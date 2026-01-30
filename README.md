# perctohex

Converts percentage values to hexadecimal codes.

## Installation

```bash
npm install perctohex
```

## Usage

```typescript
import percToHex from 'perctohex';

percToHex(85);  // => 'D9'
percToHex(50);  // => '80'
percToHex(0);   // => '00'
percToHex(100); // => 'FF'
```

## API

### percToHex(p: number): string

Converts a percentage value to a hexadecimal string.

- **Parameters:**
  - `p` (number): The percentage value to convert (0-100). Values outside this range will be clamped.
  
- **Returns:** A 2-character uppercase hexadecimal string (00-FF)

- **Throws:** `TypeError` if the input is not a finite number (e.g., NaN, Infinity)

## Testing

This project uses [Vitest](https://vitest.dev/) for testing.

### Run Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## License

ISC
