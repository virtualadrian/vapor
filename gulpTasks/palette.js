const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const _ = require('underscore');

gulp.task('palette', 'Generates the palette map with all the color variables', (done) => {
    const from = './scss/common/palette.scss';
    const to = './scss/common/palette-map.scss';
    const paletteFileContent = fs.readFileSync(from, 'utf8');
    const sassVariables = paletteFileContent.match(/\$.+(?=:)/g); //.exec(fileContent);

    let paletteMap = '$palette: (\n';

    _.each(sassVariables, (sassVariable) => {
        paletteMap += `    ${sassVariable.slice(1)}: ${sassVariable},\n`;
    });

    paletteMap += ');\n';

    fs.writeFile(to, paletteMap, done);
});
