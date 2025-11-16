# 🏦 Targobank Reader

> Convert Targobank PDF statements to hledger journal format

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- 📄 Parse Targobank PDF statements
- 📊 Convert to hledger journal format
- 🔧 TypeScript with full type safety
- 🎯 Command-line interface
- 📦 Batch processing support

## 🚀 Installation

```bash
npm install
npm run build
```

## 📖 Usage

### Convert Single PDF

```bash
targobank-reader convert statement.pdf
```

### Convert with Custom Output

```bash
targobank-reader convert statement.pdf --output transactions.journal
```

### Batch Convert Multiple Files

```bash
targobank-reader convert *.pdf --output combined.journal
```

## 🔌 Programmatic Usage

```typescript
import { TargobankReader } from 'targobank-reader'

const reader = new TargobankReader()
const transactions = await reader.parseStatement('statement.pdf')
const journal = reader.toHledger(transactions)

console.log(journal)
```

## 📊 Output Format

Generates hledger journal entries:

```
2024-11-16 REWE Supermarket
    assets:checking        €-45.67
    expenses:groceries      €45.67

2024-11-15 Salary Payment
    assets:checking       €2500.00
    income:salary        €-2500.00
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Format code
npm run format
```

## 📝 License

MIT
