# FIT3143 Data Visualisation 2

Data source: https://www.kaggle.com/datasets/tr1gg3rtrash/global-disaster-risk-index-time-series-dataset



## About Dataset

*\*\*Retrieved from Kaggle site*

The WorldRiskReport is an annual technical report on global disaster risks. The yearly issues of the WorldRiskReport focus on varying critical topics related to disaster risk management and are published in German and English. The report includes the WorldRiskIndex, which identifies the risk of an extreme natural event becoming a disaster for numerous countries worldwide.

The WorldRiskIndex uses 27 aggregated, publicly available indicators to determine disaster risk for 181 countries worldwide. Conceptually, the index is composed of exposure to extreme natural hazards and the societal vulnerability of individual countries. Earthquakes, cyclones, floods, droughts, and climate-induced sea-level rise are considered in the exposure analysis. Societal vulnerability is divided into susceptibility to extreme natural events, lack of coping capacities, and lack of adaptive capacities. All index components are scaled to the value range from 0 to 100. The higher a country's index score on the WorldRiskIndex, the higher its national disaster risk.

The dataset consists of 11 years data of multiple countries with features including:

- Region
- WRI
- Exposure
- Vulnerability
- Susceptibility
- Lack of Coping Capabilities
- Lack of Adaptive Capabilities
- Year
- WRI Category
- Exposure Category
- Vulnerability Category
- Susceptibility Category



| Feature Name                | Data Type | Feature Description                                          |
| :-------------------------- | :-------- | :----------------------------------------------------------- |
| **Region**                  | String    | Name of the region. (306 unique values)                      |
| WRI                         | Decimal   | World Risk Score of the region.                              |
| Exposure                    | Decimal   | Risk/exposure to natural hazards such as earthquakes, hurricanes, floods, droughts, and sea level rise. |
| Vulnerability               | Decimal   | Vulnerability depending on infrastructure, nutrition, housing situation, and economic framework conditions. |
| Susceptibility              | Decimal   | Susceptibility depending on infrastructure, nutrition, housing situation, and economic framework conditions. |
| Lack of Coping Capabilities | Decimal   | Coping capacities in dependence of governance, preparedness and early warning, medical care, and social and material security. |
| Lack of Adaptive Capacities | Decimal   | Adaptive capacities related to coming natural events, climate change, and other challenges. |
| Year                        | Decimal   | Year data is being described.                                |
| WRI Category                | String    | WRI Category for the given WRI Score. (5 unique values)      |
| Exposure Category           | String    | Exposure Category for the given Exposure Score. (5 unique values) |
| Vulnerability Category      | String    | Vulnerability Category for the given Vulnerability Score. (5 unique values) |
| Susceptibility Category     | String    | Susceptibility Category for the given Susceptibility Score. (5 unique values) |



Cleveland dot plot - show the achieved values in different year based on different attributes

Parallel coordinate plot

Waffle chart - apply on categorical values

https://coolors.co/0a2d4d-0b3155-0c365d-0d3b66-faf0ca-f4d35e-ee964b-f95738-fa664a-fa745a

https://coolors.co/faf0ca-f4d35e-ee964b-f95738-fa664a-fa745a