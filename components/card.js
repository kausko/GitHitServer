const { pascalCase, conditional } = require("../utils/string");
const style = require('../utils/style.json')
const types = require("../utils/types");

module.exports = ({ type, Total, Unique, disable, initialDate, theme, mode = 'light'}) => `
<svg fill="none" viewBox="0 0 412 200" width="412" height="200" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        ${style[0]}
      </style>
      <div class="html body Box mx-auto text-center" data-color-mode="${mode}" data-${mode}-theme="${mode}" ${conditional`style="background-color:${theme.bg_color}"`}>
        <div class="Box-body" ${conditional`style="color:${theme.text_color}"`}>
          <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
            <path ${conditional`fill="${theme.icon_color}"`} ${types[type]}>
            </path>
          </svg>
          <h1 class="f1-light mb-1" ${conditional`style="color:${theme.title_color}"`}>${pascalCase(type)}</h1>
          ${conditional`
            <div class="d-flex flex-justify-around">
              ${
                [{Total},{Unique}]
                .filter(obj => Object.keys(obj)[0] !== disable)
                .map(obj => 
                  `<div class="d-flex flex-column">
                    <h2 class="f2-light">
                      ${Object.values(obj)[0]}
                    </h2>
                    <p class="light">
                      ${Object.keys(obj)[0]} ${pascalCase(type)}
                    </p>
                  </div>`
                ).join('')
              }
            </div>
            <small class="small">Since ${initialDate}</small>
          `}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>
`.replace(/\0/g, '')