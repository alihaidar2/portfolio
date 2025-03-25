"use client";

import BalajiCarousel from "@/app/components/BalajiCarousel";

// import BalajiCarousel from "../components/BalajiCarousel";

export default function BalajiPage() {
  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      {/* 1) PROJECT TITLE & OVERVIEW */}
      <section className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">
          Baraji Foods <span className="text-emerald-400">Sales Analysis</span>
        </h1>
        <p className="mt-4 text-gray-300">
          A comprehensive project exploring Baraji Foods&apos; sales
          performance, product insights, weekly sales patterns, and
          transaction/payment trends. This overview highlights the entire ETL
          pipeline along with the resulting interactive dashboards.
        </p>
      </section>

      {/* 2) ETL PROCESS (Extract, Transform, Load) */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">
          ETL Process
        </h2>

        {/* Extract */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-emerald-300">1. Extract</h3>
          <p className="text-gray-300 mt-2">
            We collected raw sales data (<em>Balaji Fast Food Sales.csv</em>)
            with various date formats (<code>dd-mm-yyyy</code>,{" "}
            <code>mm/dd/yyyy</code>, etc.) among other inconsistencies.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Sample snippet of the raw CSV:
          </p>
          <pre className="bg-gray-900 text-gray-200 p-4 mt-3 rounded text-sm">
            {`date,transaction_type,transaction_amount,item_price,quantity
12-01-2025,Sale,389.7,12.99,30
01/13/2025,Sale,190.0,9.50,20
...
`}
          </pre>
        </div>

        {/* Transform (Reverted snippet, no scroll) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-emerald-300">
            2. Transform
          </h3>
          <p className="text-gray-300 mt-2">
            Using <code>clean_data.py</code>, we parsed multiple date formats,
            validated transaction amounts, handled missing{" "}
            <code>transaction_type</code>, and created new features. Below is
            the <strong>partial snippet</strong> (unchanged):
          </p>
          <pre className="bg-gray-900 text-gray-200 p-4 mt-3 rounded text-sm">
            {`import pandas as pd

def parse_dates(date_str):
    date_formats = ['%d-%m-%Y','%m/%d/%Y','%d/%m/%Y','%Y-%m-%d']
    for fmt in date_formats:
        try:
            return pd.to_datetime(date_str, format=fmt)
        except ValueError:
            continue
    return pd.NaT

data = pd.read_csv('Balaji Fast Food Sales.csv')
data['date'] = data['date'].apply(parse_dates)

missing_dates_count = data['date'].isnull().sum()
if missing_dates_count > 0:
    print(f"Warning: {missing_dates_count} rows invalid!")

data['calculated_amount'] = data['item_price'] * data['quantity']
assert (data['calculated_amount'] == data['transaction_amount']).all()

data['transaction_type'].fillna('Other', inplace=True)
data['day_of_week'] = data['date'].dt.day_name()
data['month'] = data['date'].dt.month_name()
data['year'] = data['date'].dt.year
data.to_csv('cleaned_sales_data.csv', index=False)
print("Data cleaning complete.")
`}
          </pre>
          <p className="text-gray-300 mt-2">
            This ensures consistent date formats, verifies pricing, and enriches
            the dataset.
          </p>
        </div>

        {/* Load (mention Power BI) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-emerald-300">3. Load</h3>
          <p className="text-gray-300 mt-2">
            Finally, we loaded <em>cleaned_sales_data.csv</em> into
            <strong> Power BI </strong> to build dynamic dashboards for ongoing
            analysis and visual reporting.
          </p>
        </div>
      </section>

      {/* 3) FINAL DASHBOARD (Single Big Card / Carousel) */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">
          Final Dashboard
        </h2>
        <p className="text-gray-300 mb-4">
          Below, you can cycle through the main screenshots in one large card.
          After that, check out the video demo showing the dashboard’s
          interactivity.
        </p>

        {/* Card Carousel */}
        <BalajiCarousel />

        {/* OPTIONAL VIDEO DEMO (Same width as the card) */}
        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <video controls className="w-full rounded">
            <source src="/videos/balaji_demo.mp4" type="video/mp4" />
            fallback message
            Your browser does not support HTML5 video.
          </video>
        </div> */}
      </section>

      <p className="text-sm text-gray-400 italic text-center mt-2">
        *The visualizations shown are based on sample sales data generated for
        demo purposes.
      </p>
    </div>
  );
}
