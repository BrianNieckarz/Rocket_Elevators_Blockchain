const layersOrder = [
    { name: 'background', number: 3 },
    { name: 'passengers', number: 3 },
    { name: 'elevatorChain', number: 1 },
    { name: 'rocketBase', number: 3 },
    { name: 'plumeBoundary', number: 3 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1;

module.exports = { layersOrder, format, rarity, defaultEdition };