Step1: Clone the Respositry
```bash
git clone "respositry Url"
```
Step2: Run that command in Terminal to install dependencies
```bash
npm install
```
Step3: Run that command in Terminal to install the playwright Browser
```bash
npx playwright install --with-deps
```
Step4: Run Playwright tests.
```bash
npx playwright test
```
Step5: Generate & Open Allure Report
```bash
npx allure serve allure-results
```
