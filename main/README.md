# Audio 檔案說明

請將音檔放入對應的 neuron 資料夾中。

## 每個 neuron 資料夾 (neuron_0 ~ neuron_9) 結構

```
neuron_N/
├── top_1.wav
├── top_2.wav
├── top_3.wav
├── top_4.wav
├── top_5.wav
└── steering/
    ├── sample_1_orig.wav
    ├── sample_1_strength_-20.wav
    ├── sample_1_strength_-10.wav
    ├── sample_1_strength_0.wav
    ├── sample_1_strength_10.wav
    ├── sample_1_strength_20.wav
    ├── sample_1_strength_30.wav
    ├── sample_2_orig.wav
    ├── sample_2_strength_-20.wav
    │   ... (同上 strength 系列)
    ├── sample_3_orig.wav
    │   ...
    ├── sample_4_orig.wav
    └── sample_4_strength_30.wav
```

- **Top activations**: `top_1.wav` ~ `top_5.wav`
- **Steering**: 每個 sample (1~4) 需有 `sample_N_orig.wav` 以及 `sample_N_strength_X.wav`。X 與 script.js 的 `strengths` 陣列一致；**小數請用底線**，例如 strength 0.4 → 檔名 `sample_1_strength_0_4.wav`（不要用 `0.4.wav`）
