const neuronConfig = [
    { model: 'Music2Latent', layer: 'bottleneck (L0 = 10, ε = 4)', neuronId: 202, description: 'Description: note F, distorted synth organ' },
    { model: 'Music2Latent', layer: 'pre-decoder (L0 = 10, ε = 2)', neuronId: 368, description: '' },
    { model: 'Music2Latent', layer: 'decoder layer 1 (L0 = 10, ε = 2)', neuronId: 10378, description: 'Description: Distortion', strengths: [-10, 0, 5, 10, 20, 30] },
    { model: 'Stable Audio Open', layer: 'bottleneck (L0 = 10, ε = 8)', neuronId: 67, description: 'Description: Overdrive', strengths: [-3, 0, 1, 2, 3, 4] },
    { model: 'Stable Audio Open', layer: 'decoder layer 1 (L0 = 10, ε = 2)', neuronId: 40, description: 'Description: Low Boost', strengths: [-20, 0, 10, 20, 30, 40] },
    { model: 'Stable Audio Open', layer: 'decoder layer 2 (L0 = 10, ε = 8)', neuronId: 3043, description: 'Description: Low Boost', strengths: [-20, 0, 10, 20, 30, 40] },
];

const defaultStrengths = [-1, 0, 0.4, 0.8, 1.5, 3];
const numSteerSamples = 3;
const steerInstruments = ['drumset', 'guitar', 'piano'];

const ablationNeuronIds = [
    288, 475, 574, 631, 1324, 1533, 1554, 2248, 2448, 2541, 2576, 3123, 3205, 3391,
    3462, 3744, 3844, 4022, 4052, 4151, 4235, 4339, 4781, 4958, 5116, 5182, 5336, 5556,
    5656, 6123, 6358, 6677, 7177, 7468, 7588, 7632, 7779, 8474, 8674, 8846, 9033, 9213,
    9286, 9571, 9615, 9801, 10113, 10221, 10281, 10378, 10395, 10558, 10880, 11287, 11969,
    12041, 12208, 12375, 13104, 13143, 13312, 13528, 13542, 15103, 15130, 15171, 15349,
    15415, 15437, 15897, 16025, 16037, 16143, 16207,
];
const neuronAblationAlpha = '+20';
const noSaeEntries = [
    { id: 106, file: 'dim_00106_h00_c106_alpha_+80.mp3' },
    { id: 409, file: 'dim_00409_h01_c153_alpha_+80.mp3' },
    { id: 434, file: 'dim_00434_h01_c178_alpha_+80.mp3' },
    { id: 488, file: 'dim_00488_h01_c232_alpha_+80.mp3' },
    { id: 520, file: 'dim_00520_h02_c008_alpha_+80.mp3' },
    { id: 711, file: 'dim_00711_h02_c199_alpha_+80.mp3' },
    { id: 750, file: 'dim_00750_h02_c238_alpha_+80.mp3' },
    { id: 1139, file: 'dim_01139_h04_c115_alpha_+80.mp3' },
    { id: 1169, file: 'dim_01169_h04_c145_alpha_+80.mp3' },
    { id: 1291, file: 'dim_01291_h05_c011_alpha_+80.mp3' },
    { id: 1307, file: 'dim_01307_h05_c027_alpha_+80.mp3' },
    { id: 1424, file: 'dim_01424_h05_c144_alpha_+80.mp3' },
    { id: 1519, file: 'dim_01519_h05_c239_alpha_+80.mp3' },
    { id: 1535, file: 'dim_01535_h05_c255_alpha_+80.mp3' },
    { id: 1584, file: 'dim_01584_h06_c048_alpha_+80.mp3' },
    { id: 1654, file: 'dim_01654_h06_c118_alpha_+80.mp3' },
    { id: 1674, file: 'dim_01674_h06_c138_alpha_+80.mp3' },
    { id: 1679, file: 'dim_01679_h06_c143_alpha_+80.mp3' },
    { id: 1824, file: 'dim_01824_h07_c032_alpha_+80.mp3' },
    { id: 2045, file: 'dim_02045_h07_c253_alpha_+80.mp3' },
    { id: 2286, file: 'dim_02286_h08_c238_alpha_+80.mp3' },
    { id: 2547, file: 'dim_02547_h09_c243_alpha_+80.mp3' },
    { id: 2615, file: 'dim_02615_h10_c055_alpha_+80.mp3' },
    { id: 2664, file: 'dim_02664_h10_c104_alpha_+80.mp3' },
    { id: 2677, file: 'dim_02677_h10_c117_alpha_+80.mp3' },
    { id: 2803, file: 'dim_02803_h10_c243_alpha_+80.mp3' },
    { id: 3150, file: 'dim_03150_h12_c078_alpha_+80.mp3' },
    { id: 3257, file: 'dim_03257_h12_c185_alpha_+80.mp3' },
    { id: 3432, file: 'dim_03432_h13_c104_alpha_+80.mp3' },
    { id: 3527, file: 'dim_03527_h13_c199_alpha_+80.mp3' },
    { id: 3582, file: 'dim_03582_h13_c254_alpha_+80.mp3' },
    { id: 3611, file: 'dim_03611_h14_c027_alpha_+80.mp3' },
    { id: 3657, file: 'dim_03657_h14_c073_alpha_+80.mp3' },
    { id: 3733, file: 'dim_03733_h14_c149_alpha_+80.mp3' },
    { id: 3811, file: 'dim_03811_h14_c227_alpha_+80.mp3' },
    { id: 3814, file: 'dim_03814_h14_c230_alpha_+80.mp3' },
    { id: 4010, file: 'dim_04010_h15_c170_alpha_+80.mp3' },
    { id: 4012, file: 'dim_04012_h15_c172_alpha_+80.mp3' },
    { id: 4333, file: 'dim_04333_h16_c237_alpha_+80.mp3' },
    { id: 4374, file: 'dim_04374_h17_c022_alpha_+80.mp3' },
    { id: 4506, file: 'dim_04506_h17_c154_alpha_+80.mp3' },
    { id: 4552, file: 'dim_04552_h17_c200_alpha_+80.mp3' },
    { id: 4554, file: 'dim_04554_h17_c202_alpha_+80.mp3' },
    { id: 4557, file: 'dim_04557_h17_c205_alpha_+80.mp3' },
    { id: 4741, file: 'dim_04741_h18_c133_alpha_+80.mp3' },
    { id: 4803, file: 'dim_04803_h18_c195_alpha_+80.mp3' },
    { id: 5514, file: 'dim_05514_h21_c138_alpha_+80.mp3' },
    { id: 5574, file: 'dim_05574_h21_c198_alpha_+80.mp3' },
    { id: 5635, file: 'dim_05635_h22_c003_alpha_+80.mp3' },
    { id: 5820, file: 'dim_05820_h22_c188_alpha_+80.mp3' },
    { id: 5881, file: 'dim_05881_h22_c249_alpha_+80.mp3' },
    { id: 5925, file: 'dim_05925_h23_c037_alpha_+80.mp3' },
    { id: 5977, file: 'dim_05977_h23_c089_alpha_+80.mp3' },
    { id: 6065, file: 'dim_06065_h23_c177_alpha_+80.mp3' },
    { id: 6201, file: 'dim_06201_h24_c057_alpha_+80.mp3' },
    { id: 6224, file: 'dim_06224_h24_c080_alpha_+80.mp3' },
    { id: 6227, file: 'dim_06227_h24_c083_alpha_+80.mp3' },
    { id: 6873, file: 'dim_06873_h26_c217_alpha_+80.mp3' },
    { id: 6912, file: 'dim_06912_h27_c000_alpha_+80.mp3' },
    { id: 6924, file: 'dim_06924_h27_c012_alpha_+80.mp3' },
    { id: 7359, file: 'dim_07359_h28_c191_alpha_+80.mp3' },
    { id: 7428, file: 'dim_07428_h29_c004_alpha_+80.mp3' },
    { id: 7527, file: 'dim_07527_h29_c103_alpha_+80.mp3' },
    { id: 7573, file: 'dim_07573_h29_c149_alpha_+80.mp3' },
];
const noSaeAlpha = '+80';
const noSaeBottleneckEntries = Array.from({ length: 64 }, (_, idx) => ({
    id: idx,
    file: `dim_${String(idx).padStart(4, '0')}_alpha_+10.mp3`,
}));
const noSaeBottleneckAlpha = '+10';

function strengthToFilename(st) {
    return String(st).replace('.', '_');
}

function renderMainPage(container) {
    container.innerHTML = '';

    neuronConfig.forEach((config, index) => {
        const section = document.createElement('section');
        section.className = 'neuron-section';

        const { model, layer, neuronId, description } = config;
        const strengths = config.strengths || defaultStrengths;
        section.innerHTML = `
            <h2 class="neuron-title">
                <span class="title-line">Model: ${model}</span>
                <span class="title-line">Layer: ${layer}</span>
                <span class="title-line">Neuron ID: ${neuronId}</span>
            </h2>
            ${description ? `<p class="neuron-description">${description}</p>` : ''}
        `;

        let topHtml = '<h3>Top 5 Highly Activating Samples from NSynth Validation Set</h3><div class="top-activations">';
        for (let i = 1; i <= 5; i += 1) {
            topHtml += `
                <div class="audio-item">
                    <p>Rank ${i}</p>
                    <audio controls src="main/neuron_${index}/top_${i}.mp3"></audio>
                </div>
            `;
        }
        topHtml += '</div>';
        section.innerHTML += topHtml;

        let steerHtml = `
            <h3>Steering Results on Different Steering Strength (α)</h3>
            <div class="steering-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Original</th>
                            ${strengths.map((s) => `<th>Strength: ${s}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
        `;

        for (let sampleIdx = 1; sampleIdx <= numSteerSamples; sampleIdx += 1) {
            steerHtml += `
                <tr>
                    <td>${steerInstruments[sampleIdx - 1]}</td>
                    <td><audio controls src="main/neuron_${index}/steering/sample_${sampleIdx}_orig.mp3"></audio></td>
                    ${strengths.map((st) => `<td><audio controls src="main/neuron_${index}/steering/sample_${sampleIdx}_strength_${strengthToFilename(st)}.mp3"></audio></td>`).join('')}
                </tr>
            `;
        }

        steerHtml += '</tbody></table></div>';
        section.innerHTML += steerHtml;
        container.appendChild(section);
    });
}

function renderAblationPage(container, options) {
    const { folderName, tabTitle } = options;
    container.innerHTML = '';

    const section = document.createElement('section');
    section.className = 'neuron-section';
    section.innerHTML = `
        <h2 class="neuron-title">
            <span class="title-line">Model: Music2Latent</span>
            <span class="title-line">Layer: decoder layer 1 (L0 = 10, ε = 2)</span>
            <span class="title-line">Steering Strength(α): ${neuronAblationAlpha}</span>
        </h2>
        <p class="neuron-description">${tabTitle}</p>
        <div class="neuron-audio-grid">
            ${ablationNeuronIds.map((id) => `
                <div class="audio-item neuron-audio-item">
                    <p>Neuron ID: ${id}</p>
                    <audio controls src="${folderName}/neuron_${id}_alpha_${neuronAblationAlpha}.mp3"></audio>
                </div>
            `).join('')}
        </div>
    `;

    container.appendChild(section);
}

function renderNoSaePage(container, options) {
    const {
        layerLabel,
        alphaLabel,
        description,
        folderName,
        entries,
    } = options;
    container.innerHTML = '';

    const section = document.createElement('section');
    section.className = 'neuron-section';
    section.innerHTML = `
        <h2 class="neuron-title">
            <span class="title-line">Model: Music2Latent</span>
            <span class="title-line">Layer: ${layerLabel}</span>
            <span class="title-line">Steering Strength(α): ${alphaLabel}</span>
        </h2>
        <p class="neuron-description">${description}</p>
        <div class="neuron-audio-grid">
            ${entries.map((entry) => `
                <div class="audio-item neuron-audio-item">
                    <p>Neuron ID: ${entry.id}</p>
                    <audio controls src="${folderName}/${entry.file}"></audio>
                </div>
            `).join('')}
        </div>
    `;

    container.appendChild(section);
}

function switchTab(tabId) {
    const mainPanel = document.getElementById('main-page-panel');
    const neuronPanel = document.getElementById('neuron-page-panel');
    const noResidualPanel = document.getElementById('no-residual-page-panel');
    const noSaePanel = document.getElementById('no-sae-page-panel');
    const noSaeBottleneckPanel = document.getElementById('no-sae-bottleneck-page-panel');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === tabId;
        button.classList.toggle('active', isActive);
    });

    mainPanel.classList.toggle('hidden', tabId !== 'main');
    neuronPanel.classList.toggle('hidden', tabId !== 'neuron');
    noResidualPanel.classList.toggle('hidden', tabId !== 'no-residual');
    noSaePanel.classList.toggle('hidden', tabId !== 'no-sae');
    noSaeBottleneckPanel.classList.toggle('hidden', tabId !== 'no-sae-bottleneck');
}

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });
}

const mainPanel = document.getElementById('main-page-panel');
const neuronPanel = document.getElementById('neuron-page-panel');
const noResidualPanel = document.getElementById('no-residual-page-panel');
const noSaePanel = document.getElementById('no-sae-page-panel');
const noSaeBottleneckPanel = document.getElementById('no-sae-bottleneck-page-panel');

renderMainPage(mainPanel);
renderAblationPage(neuronPanel, {
    folderName: 'ablation_proposed',
    tabTitle: 'Ablation results with proposed residual compensation.',
});
renderAblationPage(noResidualPanel, {
    folderName: 'ablation_no_residual_compensation',
    tabTitle: 'Ablation results without residual compensation.',
});
renderNoSaePage(noSaePanel, {
    layerLabel: 'decoder layer 1 (Original Latent)',
    alphaLabel: noSaeAlpha,
    description: 'Ablation results by steering original embedding without SAE.',
    folderName: 'ablation_No_SAE(decoder_layer_1)',
    entries: noSaeEntries,
});
renderNoSaePage(noSaeBottleneckPanel, {
    layerLabel: 'bottleneck (Original Latent)',
    alphaLabel: noSaeBottleneckAlpha,
    description: 'Ablation results by steering bottleneck embedding without SAE.',
    folderName: 'ablation_No_SAE(bottleneck)',
    entries: noSaeBottleneckEntries,
});
initTabs();
switchTab('main');
