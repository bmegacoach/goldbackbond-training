import { ModuleLayout } from '../ModuleLayout';
import { CheckCircle2, XCircle, AlertTriangle, Gavel, Shield, Building2, Scale, FileCheck, Coins } from 'lucide-react';

export function Module2() {
  return (
    <ModuleLayout
      moduleId="module-2"
      moduleNumber={2}
      title="Sales Compliance Playbook"
      description="Product knowledge and critical compliance guidelines for operating in a regulated environment."
    >
      <div className="space-y-8">
        {/* USDGB Product Structure Section */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-gold-600" />
            USDGB Product Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gold-50 rounded-xl border border-gold-200">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-gold-600" />
                <h3 className="font-semibold text-neutral-900">Gold-Backed Token</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Digital utility token backed by gold reserves at Federal Reserve Bank
              </p>
            </div>
            <div className="p-4 bg-gold-50 rounded-xl border border-gold-200">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="w-5 h-5 text-gold-600" />
                <h3 className="font-semibold text-neutral-900">NAV Peg</h3>
              </div>
              <p className="text-sm text-neutral-600">
                1 USDGB = $1.00 USD worth of Gold at spot price
              </p>
            </div>
          </div>
        </section>

        {/* What USDGB IS */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-success" />
            What USDGB IS
          </h2>
          <ul className="space-y-3">
            {[
              'A digital utility token backed by gold reserves',
              'A contractual right to inventory (gold reserves at NAV)',
              'A collateral asset usable with participating third-party lenders',
              'Tradable on secondary markets (DEXs)',
              'Pegged to $1.00 USD worth of gold at spot price',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What USDGB IS NOT */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-error" />
            What USDGB IS NOT
          </h2>
          <ul className="space-y-3">
            {[
              'A security (no ownership interest, no passive yield)',
              'Backed by "Bloomberg-listed Securities"',
              'Redeemable directly for USD from Goldbackbond',
              'Redeemable directly for Debentures',
              'A dividend-paying investment',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-error/5 rounded-lg">
                <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Attestation Parties */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-gold-600" />
            Attestation Parties
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'Rektor Law',
              'Senn Law',
              'Ex-Federal Reserve Board Member',
              'Federal Judge',
              'Wells Fargo Bank',
              'State of Pennsylvania',
            ].map((party, index) => (
              <div
                key={index}
                className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center"
              >
                <span className="font-medium text-neutral-700">{party}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Approved Redemption Mechanisms */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Approved Redemption Mechanisms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-gold-200 rounded-xl bg-gold-50/50">
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                1. Sell on Secondary Markets
              </h3>
              <p className="text-neutral-600">
                Trade on DEXs (Uniswap, Hyperliquid, etc.) at market price
              </p>
            </div>
            <div className="p-5 border-2 border-gold-200 rounded-xl bg-gold-50/50">
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                2. Use as Collateral
              </h3>
              <p className="text-neutral-600">
                Stake with third-party lenders, borrow up to 70% LTV
              </p>
            </div>
          </div>
        </section>

        {/* Staking Structure */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Staking Structure</h2>
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </span>
                <span className="text-neutral-700">
                  Users stake USDGB with third-party participating lenders (NOT Goldbackbond)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </span>
                <span className="text-neutral-700">
                  Staked tokens provide up to 3x collateral value to lenders
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </span>
                <span className="text-neutral-700">
                  Lenders evaluate collateral and provide loans at up to 70% LTV
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </span>
                <span className="text-neutral-700">
                  No passive yield paid by Goldbackbond corporate treasury
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-neutral-200 pt-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Compliance Guidelines</h2>
        </div>

        {/* Compliance Overview */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Regulatory Environment</h2>
          <p className="text-neutral-600 mb-4">
            Goldbackbond operates in a highly regulated environment covering:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-1">Digital Assets</h3>
              <p className="text-sm text-neutral-500">Utility tokens, non-securities</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-1">Securities</h3>
              <p className="text-sm text-neutral-500">Fixed-income Debentures, Bloomberg-listed</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-1">Lending</h3>
              <p className="text-sm text-neutral-500">Collateral-based borrowing, third-party lenders</p>
            </div>
          </div>
        </section>

        {/* What Contractors CAN Do */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            What Contractors CAN Do (Green Light)
          </h2>
          <div className="bg-success/5 border-2 border-success/30 rounded-xl p-6">
            <ul className="space-y-4">
              {[
                'Sell USDGB token allocations directly (no license required)',
                'Provide educational content (no investment advice)',
                'Refer qualified buyers to Broker/Dealer for Debentures',
                'Refer borrowers to lending partners',
                'Host X Spaces, create YouTube videos, write LinkedIn posts',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What Contractors CANNOT Do */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-error flex items-center justify-center">
              <XCircle className="w-5 h-5 text-white" />
            </div>
            What Contractors CANNOT Do (Red Light)
          </h2>
          <div className="bg-error/5 border-2 border-error/30 rounded-xl p-6">
            <ul className="space-y-4">
              {[
                'Sell Secured Debentures directly (requires Broker/Dealer license)',
                'Provide investment advice (requires RIA license)',
                'Make false gold redemption claims',
                'Market USDGB as "backed by Bloomberg Securities"',
                'Promise passive yield or guaranteed returns',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Marketing Language */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-gold-600" />
            Marketing Language Guidelines
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Approved */}
            <div className="bg-success/5 rounded-xl p-6 border-2 border-success/30">
              <h3 className="font-semibold text-success mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Approved Marketing Language
              </h3>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-lg border border-success/20 text-sm text-neutral-700">
                  "USDGB is backed by gold reserves held at The Federal Reserve Bank"
                </li>
                <li className="p-3 bg-white rounded-lg border border-success/20 text-sm text-neutral-700">
                  "Each token represents $1.00 worth of gold at spot price"
                </li>
                <li className="p-3 bg-white rounded-lg border border-success/20 text-sm text-neutral-700">
                  "Gold reserves verified through multi-party attestation including Wells Fargo Bank"
                </li>
                <li className="p-3 bg-white rounded-lg border border-success/20 text-sm text-neutral-700">
                  "Use USDGB as collateral with participating lenders for up to 70% LTV borrowing"
                </li>
              </ul>
            </div>

            {/* Prohibited */}
            <div className="bg-error/5 rounded-xl p-6 border-2 border-error/30">
              <h3 className="font-semibold text-error mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Prohibited Marketing Language
              </h3>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-lg border border-error/20 text-sm text-neutral-700">
                  "USDGB is backed by physical gold you can redeem"
                </li>
                <li className="p-3 bg-white rounded-lg border border-error/20 text-sm text-neutral-700">
                  "USDGB is backed by Bloomberg-listed Securities"
                </li>
                <li className="p-3 bg-white rounded-lg border border-error/20 text-sm text-neutral-700">
                  "Stake USDGB to earn passive yield from Goldbackbond"
                </li>
                <li className="p-3 bg-white rounded-lg border border-error/20 text-sm text-neutral-700">
                  "You should invest X% of your portfolio in USDGB"
                </li>
                <li className="p-3 bg-white rounded-lg border border-error/20 text-sm text-neutral-700">
                  "USDGB is guaranteed to appreciate"
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legal Consequences */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Gavel className="w-6 h-6 text-error" />
            Legal Consequences of Non-Compliance
          </h2>
          <div className="bg-error/5 border-2 border-error/30 rounded-xl overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Violation Type</th>
                  <th>Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Federal Crimes</td>
                  <td>Selling securities without license (SEC violation)</td>
                </tr>
                <tr>
                  <td className="font-medium">Civil Penalties</td>
                  <td>Fines up to $500,000+ per violation</td>
                </tr>
                <tr>
                  <td className="font-medium">Reputational Damage</td>
                  <td>Loss of business relationships</td>
                </tr>
                <tr>
                  <td className="font-medium">Personal Liability</td>
                  <td>Contractor personally liable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Important Security Notice */}
        <section>
          <div className="bg-info/10 border-2 border-info/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-info flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Critical: USDGB is NOT a Security</h3>
                <p className="text-neutral-700">
                  USDGB is a digital utility token (non-security). It does not represent ownership in Goldbackbond,
                  does not pay dividends or passive yield from Goldbackbond, and does not meet the Howey Test 
                  criteria for securities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section>
          <div className="bg-warning/10 border-2 border-warning/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Remember</h3>
                <p className="text-neutral-700">
                  When in doubt, DO NOT proceed. Contact your supervisor or the compliance team
                  before making any claims you are unsure about. Compliance protects you and
                  the company.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ModuleLayout>
  );
}
