# Validation and submission status

## Completed locally

- Arithmetic regenerated from `inputs.json` and `calculate.mjs`; no external packages required.
- Operations and management reconciled to the monthly total; migration overlap charged once before steady state.
- One-year and three-year term prices amortized correctly; OS/SQL licenses kept separate.
- Three-year totals reconciled across annual projections and funding reserves.
- Local Markdown links checked against packaged files.
- Calculator export and screenshot captured and inspected for the East US compute cross-check.

## Evidence boundary

Of the $59,842.86 monthly PAYG estimate, $30,261.11 uses retrieved unit prices and $29,581.75 uses planning allowances. All usage quantities are assumptions, including those multiplied by verified rates. The full bill is not a verified vendor quote. The complete provider-calculator export remains a follow-up item; only the compute validation export is included.

The data model uses 730-hour months and a 16-vCore SQL SKU. Changing SQL size requires updating the corresponding zone-redundancy meter, service limits and all capacity assumptions. The forecast is continuous for financial planning; actual supported capacity steps require re-estimation.

## GitHub submission

The reports, calculation model and pricing evidence have been
published to:

https://github.com/tajudeenbash/CST8913-LAB09

Before final grading, confirm that the instructor can access the
repository, open the README links and download the evidence files.

The included calculator export covers the East US compute
cross-check only. If the rubric requires a full provider-calculator
export, complete the configuration guide and attach that export.
