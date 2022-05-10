onEvent('worldgen.remove', event => {
    // May be one of the decoration types/levels described in worldgen.add docs
    // But ores are *most likely* to be generated in this one
    event.printFeatures(null, 'minecraft:swamp')

    event.removeFeatureById('vegetal_decoration', 'biomemakeover:swamp_flowers')
})