const touchResourcesRoot = 'http://data.openspaceproject.com/dist/sci/mastertheses/2018/';

const touchGuiResource = (relative) => {
    return touchResourcesRoot + relative;
}

export const instructionImageENG = require('../stories/images/instructions_eng.png');
export const instructionImageSWE = require('../stories/images/instructions_swe.png');

export const icons = {
    Earth: touchGuiResource('icons/solarsystem/earth.png'),
    Moon: touchGuiResource('icons/solarsystem/moon.png'),
    Mars: touchGuiResource('icons/solarsystem/mars.png'),
    Jupiter: touchGuiResource('icons/solarsystem/jupiter.png'),
    Mercury: touchGuiResource('icons/solarsystem/mercury.png'),
    Neptune: touchGuiResource('icons/solarsystem/neptune.png'),
    Saturn: touchGuiResource('icons/solarsystem/saturn.png'),
    Uranus: touchGuiResource('icons/solarsystem/uranus.png'),
    Venus: touchGuiResource('icons/solarsystem/venus.png'),
    Callisto: touchGuiResource('icons/solarsystem/callisto.png'),
    Europa: touchGuiResource('icons/solarsystem/europa.png'),
    Ganymede: touchGuiResource('icons/solarsystem/ganymede.png'),
    Io: touchGuiResource('icons/solarsystem/io.png'),
    EngFlag: require('../icons/flagga-eng-no-text.png'),
    SweFlag: require('../icons/flagga-sve-no-text.png')
};

export const storyImages = {
    climate_global: require('../stories/images/story_climate_global.png'),
    climate_arctic: require('../stories/images/story_climate_arctic.png'),
    climate_polarstern: require('../stories/images/story_climate_polarstern.png'),
    solarsystem: touchGuiResource('images/stories/story_solarsystem.png'),
    jupitermoons: touchGuiResource('images/stories/story_jupitermoons.png'),
    earthweather: touchGuiResource('images/stories/story_earthweather.png'),
    mars: touchGuiResource('images/stories/story_mars.png'),
    galaxies: touchGuiResource('images/stories/story_galaxies.png'),
}
