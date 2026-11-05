# CST8913 LAB09 — ShopPro International cloud migration

**Prepared:** November 5, 2026 · **Provider:** Microsoft Azure · **Currency:** USD · **Target repository:** `tajudeenbash/CST8913-LAB09`

This submission estimates migration, operations and management for a three-region eCommerce platform. It includes a reproducible cost model, reservation comparisons, conditional license benefits and a three-year budget.

| Decision metric | Estimate |
| --- | ---: |
| One-time migration subtotal | $88,113.50 |
| Migration funding including 15% contingency | $101,330.52 |
| Monthly operations, PAYG with scheduling | $55,206.86 |
| Monthly management | $4,636.00 |
| Total monthly PAYG | $59,842.86 |
| Recommended monthly cost: one-year reserved baseline | $55,096.93 |
| Conditional monthly cost with eligible Hybrid Benefit | $51,955.01 |

These are planning estimates, not a vendor quote. VM, SQL base compute, SQL zone/storage and Cosmos rates are captured from the Azure Retail Prices API. Other costs are explicitly labeled allowances. An Azure calculator export validates the East US Linux compute baseline only; it is **not** a full-platform calculator export.

## Required reports

1. [Cost estimate report](01-cost-estimate-report.md), including [monthly line items](cost-breakdown.md) and [one-time migration line items](migration-breakdown.md).
2. [Cost optimization strategy](02-cost-optimization-strategy.md) and [quantified comparison](comparison.md).
3. [Future growth and budget plan](03-future-growth-budget-plan.md) and [three-year projection tables](projection-tables.md).

## Evidence and reproducibility

- [Calculator export: East US baseline](evidence/calculator-eastus-compute.xlsx)
- [Calculator screenshot](evidence/calculator-evidence.jpg)
- [Selected official retail price records](evidence/azure-retail-selected.json), including meter IDs, region, effective dates and units
- [Calculator configuration guide and reconciliation](calculator-guide.md)
- [Source register](sources.md)
- [Inputs](inputs.json), [calculation code](calculate.mjs) and [machine-readable results](results.json)

From this directory, run `node calculate.mjs` with Node.js 18 or later. No external packages, credentials or network are required. It regenerates the four numerical Markdown appendices and `results.json`. Edit rate and key sizing inputs in `inputs.json`; secondary usage assumptions and growth rates are visible beside each line in `calculate.mjs`. After changing assumptions, update the narrative summary figures too.

The reports deploy no infrastructure and purchase no reservations. GitHub publication is complete only when the files appear in the target repository; local files alone are not a GitHub submission.
