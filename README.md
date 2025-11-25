#🤖 Adaptive_Trading_Bot
 

A Python-based autonomous trading simulator built with **Streamlit**. 
This tool visualizes algorithmic trading strategies (RSI, SMA, EMA) on realistic, generated market data and tracks Profit & Loss (PnL) in real-time.

## 🌟 Features

* **Realistic Simulation**: Uses a "Random Walk with Drift" algorithm to generate realistic market movements (Bull/Bear trends, volatility).
* **Technical Strategies**: 
    * RSI Reversal
    * SMA & EMA Crossovers (Golden Cross/Death Cross)
    * Volume Breakouts
* **Live PnL Tracking**: Calculates Realized and Unrealized Profit/Loss based on weighted average entry prices.
* **Interactive Charts**: Powered by Altair for smooth real-time visualization.
* **Short Selling**: Supports short positions (selling without holding).

## 🚀 Installation

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/adarsh0052/Adaptive_Trading_Bot.git](https://github.com/adarsh0052/Adaptive_Trading_Bot.git)
    cd Adaptive_Trading_Bot
    ```

2.  **Create a Virtual Environment** (Optional but recommended):
    ```bash
    python -m venv venv
    # Windows:
    venv\Scripts\activate
    # Mac/Linux:
    source venv/bin/activate
    ```

3.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

## 🏃 Usage

Run the Streamlit application:

```bash
streamlit run main.py
