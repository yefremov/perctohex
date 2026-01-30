import { describe, it, expect } from 'vitest';
import percToHex from './index';

describe('percToHex', () => {
  describe('Basic Functionality', () => {
    it('should convert 85% to D9', () => {
      expect(percToHex(85)).toBe('D9');
    });

    it('should convert 0% to 00', () => {
      expect(percToHex(0)).toBe('00');
    });

    it('should convert 25% to 40', () => {
      expect(percToHex(25)).toBe('40');
    });

    it('should convert 50% to 80', () => {
      expect(percToHex(50)).toBe('80');
    });

    it('should convert 75% to C0', () => {
      expect(percToHex(75)).toBe('C0');
    });

    it('should convert 100% to FF', () => {
      expect(percToHex(100)).toBe('FF');
    });
  });

  describe('Decimal Values', () => {
    it('should handle decimal percentages', () => {
      expect(percToHex(50.5)).toBe('81');
    });

    it('should handle small decimal values', () => {
      expect(percToHex(0.5)).toBe('02');
    });

    it('should handle large decimal values', () => {
      expect(percToHex(99.9)).toBe('FF');
    });
  });

  describe('Boundary Clamping', () => {
    it('should clamp negative values to 0', () => {
      expect(percToHex(-1)).toBe('00');
      expect(percToHex(-50)).toBe('00');
      expect(percToHex(-100)).toBe('00');
    });

    it('should clamp values above 100 to 100', () => {
      expect(percToHex(101)).toBe('FF');
      expect(percToHex(150)).toBe('FF');
      expect(percToHex(200)).toBe('FF');
    });
  });

  describe('Output Format', () => {
    it('should return uppercase hex values', () => {
      const result = percToHex(85);
      expect(result).toBe(result.toUpperCase());
    });

    it('should always return 2 characters (zero-padded)', () => {
      expect(percToHex(0)).toHaveLength(2);
      expect(percToHex(1)).toHaveLength(2);
      expect(percToHex(50)).toHaveLength(2);
      expect(percToHex(100)).toHaveLength(2);
    });

    it('should zero-pad single digit values', () => {
      expect(percToHex(0)).toBe('00');
      expect(percToHex(1)).toBe('03');
    });
  });

  describe('Error Handling', () => {
    it('should throw TypeError for NaN', () => {
      expect(() => percToHex(NaN)).toThrow(TypeError);
      expect(() => percToHex(NaN)).toThrow('Input must be a finite number');
    });

    it('should throw TypeError for Infinity', () => {
      expect(() => percToHex(Infinity)).toThrow(TypeError);
      expect(() => percToHex(Infinity)).toThrow('Input must be a finite number');
    });

    it('should throw TypeError for -Infinity', () => {
      expect(() => percToHex(-Infinity)).toThrow(TypeError);
      expect(() => percToHex(-Infinity)).toThrow('Input must be a finite number');
    });
  });

  describe('Edge Cases', () => {
    it('should handle very small positive values', () => {
      expect(percToHex(0.01)).toBe('01');
    });

    it('should handle values just below 100', () => {
      expect(percToHex(99)).toBe('FD');
    });

    it('should handle values just above 0', () => {
      expect(percToHex(1)).toBe('03');
    });

    it('should handle mid-range values', () => {
      expect(percToHex(33)).toBe('55');
      expect(percToHex(66)).toBe('A9');
    });
  });
});
