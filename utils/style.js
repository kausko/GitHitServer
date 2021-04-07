module.exports = `
/*!
 * Primer CSS
 * https://primer.style
 *
 * Released under MIT license.
 */ /*!
 * @primer/css/core
 * http://primer.style/css
 *
 * Released under MIT license. Copyright (c) 2019 GitHub Inc.
 */
.octicon {
	display: inline-block;
	vertical-align: text-top;
	fill: currentColor;
} /*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
.html {
	font-family: sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
.body {
	margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section {
	display: block;
}
summary {
	display: list-item;
}
audio,
canvas,
progress,
video {
	display: inline-block;
}
audio:not([controls]) {
	display: none;
	height: 0;
}
progress {
	vertical-align: baseline;
}
template,
[hidden] {
	display: none !important;
}
a {
	background-color: transparent;
}
a:active,
a:hover {
	outline-width: 0;
}
abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted;
}
b,
strong {
	font-weight: inherit;
}
b,
strong {
	font-weight: bolder;
}
dfn {
	font-style: italic;
}
h1 {
	font-size: 2em;
	margin: 0.67em 0;
}
mark {
	background-color: #ff0;
	color: var(--color-text-primary);
}
small {
	font-size: 80%;
}
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}
sub {
	bottom: -0.25em;
}
sup {
	top: -0.5em;
}
img {
	border-style: none;
}
svg:not(:root) {
	overflow: hidden;
}
code,
kbd,
pre,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}
figure {
	margin: 1em 40px;
}
hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}
button,
input,
select,
textarea {
	font: inherit;
	margin: 0;
}
optgroup {
	font-weight: 600;
}
button,
input {
	overflow: visible;
}
button,
select {
	text-transform: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}
fieldset {
	border: 1px solid silver;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}
legend {
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal;
}
textarea {
	overflow: auto;
}
[type="checkbox"],
[type="radio"] {
	box-sizing: border-box;
	padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}
[type="search"] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}
::-webkit-input-placeholder {
	color: inherit;
	opacity: 0.54;
}
::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}
:root,
[data-color-mode="light"][data-light-theme="light"],
[data-color-mode="dark"][data-dark-theme="light"] {
	--color-scale-black: #1b1f23;
	--color-scale-white: #ffffff;
	--color-scale-gray-0: #fafbfc;
	--color-scale-gray-1: #f6f8fa;
	--color-scale-gray-2: #e1e4e8;
	--color-scale-gray-3: #d1d5da;
	--color-scale-gray-4: #959da5;
	--color-scale-gray-5: #6a737d;
	--color-scale-gray-6: #586069;
	--color-scale-gray-7: #444d56;
	--color-scale-gray-8: #2f363d;
	--color-scale-gray-9: #24292e;
	--color-scale-blue-0: #f1f8ff;
	--color-scale-blue-1: #dbedff;
	--color-scale-blue-2: #c8e1ff;
	--color-scale-blue-3: #79b8ff;
	--color-scale-blue-4: #2188ff;
	--color-scale-blue-5: #0366d6;
	--color-scale-blue-6: #005cc5;
	--color-scale-blue-7: #044289;
	--color-scale-blue-8: #032f62;
	--color-scale-blue-9: #05264c;
	--color-scale-green-0: #f0fff4;
	--color-scale-green-1: #dcffe4;
	--color-scale-green-2: #bef5cb;
	--color-scale-green-3: #85e89d;
	--color-scale-green-4: #34d058;
	--color-scale-green-5: #28a745;
	--color-scale-green-6: #22863a;
	--color-scale-green-7: #176f2c;
	--color-scale-green-8: #165c26;
	--color-scale-green-9: #144620;
	--color-scale-yellow-0: #fffdef;
	--color-scale-yellow-1: #fffbdd;
	--color-scale-yellow-2: #fff5b1;
	--color-scale-yellow-3: #ffea7f;
	--color-scale-yellow-4: #ffdf5d;
	--color-scale-yellow-5: #ffd33d;
	--color-scale-yellow-6: #f9c513;
	--color-scale-yellow-7: #dbab09;
	--color-scale-yellow-8: #b08800;
	--color-scale-yellow-9: #735c0f;
	--color-scale-orange-0: #fff8f2;
	--color-scale-orange-1: #ffebda;
	--color-scale-orange-2: #ffd1ac;
	--color-scale-orange-3: #ffab70;
	--color-scale-orange-4: #fb8532;
	--color-scale-orange-5: #f66a0a;
	--color-scale-orange-6: #e36209;
	--color-scale-orange-7: #d15704;
	--color-scale-orange-8: #c24e00;
	--color-scale-orange-9: #a04100;
	--color-scale-red-0: #ffeef0;
	--color-scale-red-1: #ffdce0;
	--color-scale-red-2: #fdaeb7;
	--color-scale-red-3: #f97583;
	--color-scale-red-4: #ea4a5a;
	--color-scale-red-5: #d73a49;
	--color-scale-red-6: #cb2431;
	--color-scale-red-7: #b31d28;
	--color-scale-red-8: #9e1c23;
	--color-scale-red-9: #86181d;
	--color-scale-purple-0: #f5f0ff;
	--color-scale-purple-1: #e6dcfd;
	--color-scale-purple-2: #d1bcf9;
	--color-scale-purple-3: #b392f0;
	--color-scale-purple-4: #8a63d2;
	--color-scale-purple-5: #6f42c1;
	--color-scale-purple-6: #5a32a3;
	--color-scale-purple-7: #4c2889;
	--color-scale-purple-8: #3a1d6e;
	--color-scale-purple-9: #29134e;
	--color-scale-pink-0: #ffeef8;
	--color-scale-pink-1: #fedbf0;
	--color-scale-pink-2: #f9b3dd;
	--color-scale-pink-3: #f692ce;
	--color-scale-pink-4: #ec6cb9;
	--color-scale-pink-5: #ea4aaa;
	--color-scale-pink-6: #d03592;
	--color-scale-pink-7: #b93a86;
	--color-scale-pink-8: #99306f;
	--color-scale-pink-9: #6d224f;
	--color-auto-black: #1b1f23;
	--color-auto-white: #ffffff;
	--color-auto-gray-0: #fafbfc;
	--color-auto-gray-1: #f6f8fa;
	--color-auto-gray-2: #e1e4e8;
	--color-auto-gray-3: #d1d5da;
	--color-auto-gray-4: #959da5;
	--color-auto-gray-5: #6a737d;
	--color-auto-gray-6: #586069;
	--color-auto-gray-7: #444d56;
	--color-auto-gray-8: #2f363d;
	--color-auto-gray-9: #24292e;
	--color-auto-blue-0: #f1f8ff;
	--color-auto-blue-1: #dbedff;
	--color-auto-blue-2: #c8e1ff;
	--color-auto-blue-3: #79b8ff;
	--color-auto-blue-4: #2188ff;
	--color-auto-blue-5: #0366d6;
	--color-auto-blue-6: #005cc5;
	--color-auto-blue-7: #044289;
	--color-auto-blue-8: #032f62;
	--color-auto-blue-9: #05264c;
	--color-auto-green-0: #f0fff4;
	--color-auto-green-1: #dcffe4;
	--color-auto-green-2: #bef5cb;
	--color-auto-green-3: #85e89d;
	--color-auto-green-4: #34d058;
	--color-auto-green-5: #28a745;
	--color-auto-green-6: #22863a;
	--color-auto-green-7: #176f2c;
	--color-auto-green-8: #165c26;
	--color-auto-green-9: #144620;
	--color-auto-yellow-0: #fffdef;
	--color-auto-yellow-1: #fffbdd;
	--color-auto-yellow-2: #fff5b1;
	--color-auto-yellow-3: #ffea7f;
	--color-auto-yellow-4: #ffdf5d;
	--color-auto-yellow-5: #ffd33d;
	--color-auto-yellow-6: #f9c513;
	--color-auto-yellow-7: #dbab09;
	--color-auto-yellow-8: #b08800;
	--color-auto-yellow-9: #735c0f;
	--color-auto-orange-0: #fff8f2;
	--color-auto-orange-1: #ffebda;
	--color-auto-orange-2: #ffd1ac;
	--color-auto-orange-3: #ffab70;
	--color-auto-orange-4: #fb8532;
	--color-auto-orange-5: #f66a0a;
	--color-auto-orange-6: #e36209;
	--color-auto-orange-7: #d15704;
	--color-auto-orange-8: #c24e00;
	--color-auto-orange-9: #a04100;
	--color-auto-red-0: #ffeef0;
	--color-auto-red-1: #ffdce0;
	--color-auto-red-2: #fdaeb7;
	--color-auto-red-3: #f97583;
	--color-auto-red-4: #ea4a5a;
	--color-auto-red-5: #d73a49;
	--color-auto-red-6: #cb2431;
	--color-auto-red-7: #b31d28;
	--color-auto-red-8: #9e1c23;
	--color-auto-red-9: #86181d;
	--color-auto-purple-0: #f5f0ff;
	--color-auto-purple-1: #e6dcfd;
	--color-auto-purple-2: #d1bcf9;
	--color-auto-purple-3: #b392f0;
	--color-auto-purple-4: #8a63d2;
	--color-auto-purple-5: #6f42c1;
	--color-auto-purple-6: #5a32a3;
	--color-auto-purple-7: #4c2889;
	--color-auto-purple-8: #3a1d6e;
	--color-auto-purple-9: #29134e;
	--color-auto-pink-0: #ffeef8;
	--color-auto-pink-1: #fedbf0;
	--color-auto-pink-2: #f9b3dd;
	--color-auto-pink-3: #f692ce;
	--color-auto-pink-4: #ec6cb9;
	--color-auto-pink-5: #ea4aaa;
	--color-auto-pink-6: #d03592;
	--color-auto-pink-7: #b93a86;
	--color-auto-pink-8: #99306f;
	--color-auto-pink-9: #6d224f;
	--color-text-primary: #24292e;
	--color-text-secondary: #586069;
	--color-text-tertiary: #6a737d;
	--color-text-placeholder: #6a737d;
	--color-text-disabled: #959da5;
	--color-text-inverse: #ffffff;
	--color-text-link: #0366d6;
	--color-text-danger: #cb2431;
	--color-text-success: #22863a;
	--color-text-warning: #b08800;
	--color-text-white: #ffffff;
	--color-icon-primary: #24292e;
	--color-icon-secondary: #586069;
	--color-icon-tertiary: #959da5;
	--color-icon-info: #0366d6;
	--color-icon-danger: #d73a49;
	--color-icon-success: #22863a;
	--color-icon-warning: #b08800;
	--color-border-primary: #e1e4e8;
	--color-border-secondary: #eaecef;
	--color-border-tertiary: #d1d5da;
	--color-border-overlay: #e1e4e8;
	--color-border-inverse: #ffffff;
	--color-border-info: #0366d6;
	--color-border-danger: #d73a49;
	--color-border-success: #34d058;
	--color-border-warning: #f9c513;
	--color-bg-canvas: #ffffff;
	--color-bg-canvas-mobile: #ffffff;
	--color-bg-canvas-inverse: #24292e;
	--color-bg-canvas-inset: #f6f8fa;
	--color-bg-primary: #ffffff;
	--color-bg-secondary: #fafbfc;
	--color-bg-tertiary: #f6f8fa;
	--color-bg-overlay: #ffffff;
	--color-bg-backdrop: rgba(27, 31, 35, 0.5);
	--color-bg-info: #f1f8ff;
	--color-bg-info-inverse: #0366d6;
	--color-bg-danger: #ffeef0;
	--color-bg-danger-inverse: #d73a49;
	--color-bg-success: #dcffe4;
	--color-bg-success-inverse: #28a745;
	--color-bg-warning: #fff5b1;
	--color-bg-warning-inverse: #ffd33d;
	--color-shadow-small: 0 1px 0 rgba(27, 31, 35, 0.04);
	--color-shadow-medium: 0 3px 6px rgba(149, 157, 165, 0.15);
	--color-shadow-large: 0 8px 24px rgba(149, 157, 165, 0.2);
	--color-shadow-extra-large: 0 12px 48px rgba(149, 157, 165, 0.3);
	--color-shadow-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.25);
	--color-shadow-inset: inset 0 1px 0 rgba(225, 228, 232, 0.2);
	--color-state-hover-primary-bg: #0366d6;
	--color-state-hover-primary-border: #0366d6;
	--color-state-hover-primary-text: #ffffff;
	--color-state-hover-primary-icon: #ffffff;
	--color-state-hover-secondary-bg: #f6f8fa;
	--color-state-hover-secondary-border: #f6f8fa;
	--color-state-selected-primary-bg: #0366d6;
	--color-state-selected-primary-border: #0366d6;
	--color-state-selected-primary-text: #ffffff;
	--color-state-selected-primary-icon: #ffffff;
	--color-state-focus-border: #0366d6;
	--color-state-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
	--color-fade-fg-10: rgba(27, 31, 35, 0.1);
	--color-fade-fg-15: rgba(27, 31, 35, 0.15);
	--color-fade-fg-30: rgba(27, 31, 35, 0.3);
	--color-fade-fg-50: rgba(27, 31, 35, 0.5);
	--color-fade-fg-70: rgba(27, 31, 35, 0.7);
	--color-fade-fg-85: rgba(27, 31, 35, 0.85);
	--color-fade-black-10: rgba(27, 31, 35, 0.1);
	--color-fade-black-15: rgba(27, 31, 35, 0.15);
	--color-fade-black-30: rgba(27, 31, 35, 0.3);
	--color-fade-black-50: rgba(27, 31, 35, 0.5);
	--color-fade-black-70: rgba(27, 31, 35, 0.7);
	--color-fade-black-85: rgba(27, 31, 35, 0.85);
	--color-fade-white-10: rgba(255, 255, 255, 0.1);
	--color-fade-white-15: rgba(255, 255, 255, 0.15);
	--color-fade-white-30: rgba(255, 255, 255, 0.3);
	--color-fade-white-50: rgba(255, 255, 255, 0.5);
	--color-fade-white-70: rgba(255, 255, 255, 0.7);
	--color-fade-white-85: rgba(255, 255, 255, 0.85);
	--color-alert-info-text: #24292e;
	--color-alert-info-icon: rgba(4, 66, 137, 0.6);
	--color-alert-info-bg: #dbedff;
	--color-alert-info-border: rgba(4, 66, 137, 0.2);
	--color-alert-warn-text: #24292e;
	--color-alert-warn-icon: #b08800;
	--color-alert-warn-bg: #fffbdd;
	--color-alert-warn-border: rgba(176, 136, 0, 0.2);
	--color-alert-error-text: #24292e;
	--color-alert-error-icon: rgba(158, 28, 35, 0.6);
	--color-alert-error-bg: #ffe3e6;
	--color-alert-error-border: rgba(158, 28, 35, 0.2);
	--color-alert-success-text: #24292e;
	--color-alert-success-icon: rgba(23, 111, 44, 0.8);
	--color-alert-success-bg: #dcffe4;
	--color-alert-success-border: rgba(23, 111, 44, 0.2);
	--color-autocomplete-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);
	--color-autocomplete-row-border: #eaecef;
	--color-blankslate-icon: #a3aab1;
	--color-btn-text: #24292e;
	--color-btn-bg: #fafbfc;
	--color-btn-border: rgba(27, 31, 35, 0.15);
	--color-btn-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
	--color-btn-inset-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
	--color-btn-hover-bg: #f3f4f6;
	--color-btn-hover-border: rgba(27, 31, 35, 0.15);
	--color-btn-selected-bg: #edeff2;
	--color-btn-focus-bg: #fafbfc;
	--color-btn-focus-border: rgba(27, 31, 35, 0.15);
	--color-btn-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
	--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
	--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(3, 102, 214, 0.3);
	--color-btn-primary-text: #ffffff;
	--color-btn-primary-bg: #2ea44f;
	--color-btn-primary-border: rgba(27, 31, 35, 0.15);
	--color-btn-primary-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
	--color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
	--color-btn-primary-hover-bg: #2c974b;
	--color-btn-primary-hover-border: rgba(27, 31, 35, 0.15);
	--color-btn-primary-selected-bg: #2a8f47;
	--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(20, 70, 32, 0.2);
	--color-btn-primary-disabled-text: rgba(255, 255, 255, 0.8);
	--color-btn-primary-disabled-bg: #94d3a2;
	--color-btn-primary-disabled-border: rgba(27, 31, 35, 0.1);
	--color-btn-primary-focus-bg: #2ea44f;
	--color-btn-primary-focus-border: rgba(27, 31, 35, 0.15);
	--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
	--color-btn-primary-icon: rgba(255, 255, 255, 0.8);
	--color-btn-primary-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-outline-text: #0366d6;
	--color-btn-outline-hover-text: #ffffff;
	--color-btn-outline-hover-bg: #0366d6;
	--color-btn-outline-hover-border: rgba(27, 31, 35, 0.15);
	--color-btn-outline-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
	--color-btn-outline-hover-inset-shadow: inset 0 1px 0
		rgba(255, 255, 255, 0.03);
	--color-btn-outline-hover-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-outline-selected-text: #ffffff;
	--color-btn-outline-selected-bg: #035fc7;
	--color-btn-outline-selected-border: rgba(27, 31, 35, 0.15);
	--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(5, 38, 76, 0.2);
	--color-btn-outline-disabled-text: rgba(3, 102, 214, 0.5);
	--color-btn-outline-disabled-bg: #fafbfc;
	--color-btn-outline-disabled-counter-bg: rgba(3, 102, 214, 0.05);
	--color-btn-outline-focus-border: rgba(27, 31, 35, 0.15);
	--color-btn-outline-focus-shadow: 0 0 0 3px rgba(0, 92, 197, 0.4);
	--color-btn-outline-counter-bg: rgba(3, 102, 214, 0.1);
	--color-btn-danger-text: #d73a49;
	--color-btn-danger-hover-text: #ffffff;
	--color-btn-danger-hover-bg: #cb2431;
	--color-btn-danger-hover-border: rgba(27, 31, 35, 0.15);
	--color-btn-danger-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
	--color-btn-danger-hover-inset-shadow: inset 0 1px 0
		rgba(255, 255, 255, 0.03);
	--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-danger-selected-text: #ffffff;
	--color-btn-danger-selected-bg: #d42d3d;
	--color-btn-danger-selected-border: rgba(27, 31, 35, 0.15);
	--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(134, 24, 29, 0.2);
	--color-btn-danger-disabled-text: rgba(215, 58, 73, 0.5);
	--color-btn-danger-disabled-bg: #fafbfc;
	--color-btn-danger-disabled-counter-bg: rgba(215, 58, 73, 0.05);
	--color-btn-danger-focus-border: rgba(27, 31, 35, 0.15);
	--color-btn-danger-focus-shadow: 0 0 0 3px rgba(203, 36, 49, 0.4);
	--color-btn-danger-counter-bg: rgba(215, 58, 73, 0.1);
	--color-btn-danger-icon: #d73a49;
	--color-btn-danger-hover-icon: #ffffff;
	--color-btn-counter-bg: rgba(27, 31, 35, 0.08);
	--color-counter-text: #24292e;
	--color-counter-bg: rgba(209, 213, 218, 0.5);
	--color-counter-primary-text: #ffffff;
	--color-counter-primary-bg: #6a737d;
	--color-counter-secondary-text: #6a737d;
	--color-counter-secondary-bg: rgba(209, 213, 218, 0.5);
	--color-dropdown-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
	--color-label-border: #e1e4e8;
	--color-label-primary-text: #24292e;
	--color-label-primary-border: #6a737d;
	--color-label-secondary-text: #586069;
	--color-label-secondary-border: #e1e4e8;
	--color-label-info-text: #0366d6;
	--color-label-info-border: #0366d6;
	--color-label-success-text: #22863a;
	--color-label-success-border: #28a745;
	--color-label-warning-text: #735c0f;
	--color-label-warning-border: #b08800;
	--color-label-danger-text: #d73a49;
	--color-label-danger-border: #cb2431;
	--color-label-orange-text: #c24e00;
	--color-label-orange-border: #f66a0a;
	--color-input-bg: #ffffff;
	--color-input-contrast-bg: #fafbfc;
	--color-input-border: #e1e4e8;
	--color-input-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
	--color-input-disabled-bg: #f6f8fa;
	--color-input-disabled-border: #e1e4e8;
	--color-input-warning-border: #f9c513;
	--color-input-error-border: #cb2431;
	--color-input-tooltip-success-text: #144620;
	--color-input-tooltip-success-bg: #dcffe4;
	--color-input-tooltip-success-border: #34d058;
	--color-input-tooltip-warning-text: #735c0f;
	--color-input-tooltip-warning-bg: #fff5b1;
	--color-input-tooltip-warning-border: #f9c513;
	--color-input-tooltip-error-text: #86181d;
	--color-input-tooltip-error-bg: #ffeef0;
	--color-input-tooltip-error-border: #f97583;
	--color-avatar-bg: #ffffff;
	--color-avatar-border: rgba(0, 0, 0, 0);
	--color-avatar-stack-fade: #d1d5da;
	--color-avatar-stack-fade-more: #e1e4e8;
	--color-avatar-child-shadow: -2px -2px 0 rgba(255, 255, 255, 0.8);
	--color-toast-text: #24292e;
	--color-toast-bg: #ffffff;
	--color-toast-border: #e1e4e8;
	--color-toast-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
	--color-toast-icon: #ffffff;
	--color-toast-icon-bg: #0366d6;
	--color-toast-icon-border: rgba(0, 0, 0, 0);
	--color-toast-success-text: #24292e;
	--color-toast-success-border: #e1e4e8;
	--color-toast-success-icon: #ffffff;
	--color-toast-success-icon-bg: #28a745;
	--color-toast-success-icon-border: rgba(0, 0, 0, 0);
	--color-toast-warning-text: #24292e;
	--color-toast-warning-border: #e1e4e8;
	--color-toast-warning-icon: #24292e;
	--color-toast-warning-icon-bg: #ffd33d;
	--color-toast-warning-icon-border: rgba(0, 0, 0, 0);
	--color-toast-danger-text: #24292e;
	--color-toast-danger-border: #e1e4e8;
	--color-toast-danger-icon: #ffffff;
	--color-toast-danger-icon-bg: #d73a49;
	--color-toast-danger-icon-border: rgba(0, 0, 0, 0);
	--color-toast-loading-text: #24292e;
	--color-toast-loading-border: #e1e4e8;
	--color-toast-loading-icon: #ffffff;
	--color-toast-loading-icon-bg: #586069;
	--color-toast-loading-icon-border: rgba(0, 0, 0, 0);
	--color-timeline-text: #444d56;
	--color-timeline-badge-bg: #e1e4e8;
	--color-timeline-badge-success-border: rgba(0, 0, 0, 0);
	--color-timeline-target-badge-border: #2188ff;
	--color-timeline-target-badge-shadow: #c8e1ff;
	--color-select-menu-border-secondary: #eaecef;
	--color-select-menu-shadow: 0 0 18px rgba(27, 31, 35, 0.4);
	--color-select-menu-backdrop-bg: rgba(27, 31, 35, 0.5);
	--color-select-menu-backdrop-border: rgba(0, 0, 0, 0);
	--color-select-menu-tap-highlight: rgba(209, 213, 218, 0.5);
	--color-select-menu-tap-focus-bg: #dbedff;
	--color-box-blue-border: #c8e1ff;
	--color-box-row-yellow-bg: #fffbdd;
	--color-box-row-blue-bg: #f1f8ff;
	--color-box-header-blue-bg: #f1f8ff;
	--color-box-header-blue-border: #c8e1ff;
	--color-box-border-info: rgba(3, 102, 214, 0.2);
	--color-box-bg-info: #f1f8ff;
	--color-box-border-warning: rgba(255, 211, 61, 0.4);
	--color-box-bg-warning: #fffdef;
	--color-branch-name-text: #586069;
	--color-branch-name-icon: #a8bbd0;
	--color-branch-name-bg: #eaf5ff;
	--color-branch-name-link-text: #0366d6;
	--color-branch-name-link-icon: #a8bbd0;
	--color-branch-name-link-bg: #eaf5ff;
	--color-markdown-code-bg: rgba(27, 31, 35, 0.05);
	--color-markdown-frame-border: #dfe2e5;
	--color-markdown-blockquote-border: #dfe2e5;
	--color-markdown-table-border: #dfe2e5;
	--color-markdown-table-tr-border: #c6cbd1;
	--color-menu-heading-text: #24292e;
	--color-menu-border-active: #f9826c;
	--color-menu-bg-active: rgba(0, 0, 0, 0);
	--color-sidenav-selected-bg: #ffffff;
	--color-sidenav-border-active: #f9826c;
	--color-header-text: rgba(255, 255, 255, 0.7);
	--color-header-bg: #24292e;
	--color-header-logo: #ffffff;
	--color-filter-item-bar-bg: #eff3f6;
	--color-hidden-text-expander-bg: #dfe2e5;
	--color-hidden-text-expander-bg-hover: #c6cbd1;
	--color-drag-and-drop-border: #c3c8cf;
	--color-upload-enabled-border: #dfe2e5;
	--color-upload-enabled-border-focused: #4a9eff;
	--color-previewable-comment-form-border: #c3c8cf;
	--color-underlinenav-border: rgba(209, 213, 218, 0);
	--color-underlinenav-border-hover: #d1d5da;
	--color-underlinenav-border-active: #f9826c;
	--color-underlinenav-text: #24292e;
	--color-underlinenav-text-hover: #24292e;
	--color-underlinenav-text-active: #24292e;
	--color-underlinenav-icon: #959da5;
	--color-underlinenav-icon-hover: #959da5;
	--color-underlinenav-icon-active: #24292e;
	--color-underlinenav-counter-text: #24292e;
	--color-underlinenav-counter-bg: rgba(209, 213, 218, 0.5);
	--color-verified-badge-text: #22863a;
	--color-verified-badge-bg: #ffffff;
	--color-verified-badge-border: #e1e4e8;
	--color-social-count-bg: #ffffff;
	--color-tooltip-text: #ffffff;
	--color-tooltip-bg: #24292e;
	--color-header-search-bg: #24292e;
	--color-header-search-border: #444d56;
	--color-search-keyword-hl: #fffbdd;
	--color-diffstat-neutral-bg: #d1d5da;
	--color-diffstat-neutral-border: #d1d5da;
	--color-diffstat-deletion-bg: #d73a49;
	--color-diffstat-deletion-border: #d73a49;
	--color-diffstat-addition-bg: #28a745;
	--color-diffstat-addition-border: #28a745;
	--color-mktg-success: #2ebc4f;
	--color-mktg-info: #1074e7;
	--color-mktg-bg-shade-gradient-top: rgba(27, 31, 35, 0.065);
	--color-mktg-bg-shade-gradient-bottom: rgba(27, 31, 35, 0);
	--color-mktg-btn-bg: #3076df;
	--color-mktg-btn-border: #3076df;
	--color-mktg-btn-text: #ffffff;
	--color-mktg-btn-icon: #ffffff;
	--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(48, 118, 223, 0.3);
	--color-mktg-btn-hover-bg: #0366d6;
	--color-mktg-btn-hover-border: #0366d6;
	--color-mktg-btn-disabled-bg: rgba(48, 118, 223, 0.5);
	--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-disabled-text: #ffffff;
	--color-mktg-btn-disabled-icon: #ffffff;
	--color-mktg-btn-primary-bg: #5eb85c;
	--color-mktg-btn-primary-border: #5eb85c;
	--color-mktg-btn-primary-text: #ffffff;
	--color-mktg-btn-primary-icon: #ffffff;
	--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(94, 184, 92, 0.3);
	--color-mktg-btn-primary-hover-bg: #28a745;
	--color-mktg-btn-primary-hover-border: #28a745;
	--color-mktg-btn-primary-disabled-bg: rgba(94, 184, 92, 0.5);
	--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-primary-disabled-text: #ffffff;
	--color-mktg-btn-primary-disabled-icon: #ffffff;
	--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-border: rgba(42, 103, 195, 0.5);
	--color-mktg-btn-outline-text: #3076df;
	--color-mktg-btn-outline-icon: #3076df;
	--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(42, 103, 195, 0.3);
	--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-hover-border: #0366d6;
	--color-mktg-btn-outline-hover-text: #0366d6;
	--color-mktg-btn-outline-hover-icon: #0366d6;
	--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-disabled-border: rgba(42, 103, 195, 0.2);
	--color-mktg-btn-outline-disabled-text: rgba(48, 118, 223, 0.5);
	--color-mktg-btn-outline-disabled-icon: rgba(48, 118, 223, 0.5);
	--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-border: rgba(255, 255, 255, 0.5);
	--color-mktg-btn-dark-text: #ffffff;
	--color-mktg-btn-dark-icon: #ffffff;
	--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
	--color-mktg-btn-dark-hover-bg: #ffffff;
	--color-mktg-btn-dark-hover-border: #ffffff;
	--color-mktg-btn-dark-hover-text: #444d56;
	--color-mktg-btn-dark-hover-icon: #444d56;
	--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-disabled-border: rgba(255, 255, 255, 0.2);
	--color-mktg-btn-dark-disabled-text: rgba(255, 255, 255, 0.5);
	--color-mktg-btn-dark-disabled-icon: rgba(255, 255, 255, 0.5);
	--color-files-explorer-icon: #79b8ff;
	--color-hl-author-bg: #f1f8ff;
	--color-hl-author-border: #c8e1ff;
	--color-logo-subdued: #d1d5da;
	--color-discussion-border: #a2cbac;
	--color-discussion-bg-success: #28a745;
	--color-actions-workflow-table-sticky-bg: rgba(255, 255, 255, 0.95);
	--color-repo-language-color-border: rgba(27, 31, 35, 0.1);
	--color-code-selection-bg: #c8e1ff;
	--color-highlight-text: #442c12;
	--color-highlight-bg: #fff0bb;
	--color-blob-line-highlight-bg: #fffbdd;
	--color-blob-line-highlight-border: rgba(0, 0, 0, 0);
	--color-diff-addition-text: #22863a;
	--color-diff-addition-bg: #e6ffed;
	--color-diff-addition-border: #34d058;
	--color-diff-deletion-text: #cb2431;
	--color-diff-deletion-bg: #ffeef0;
	--color-diff-deletion-border: #d73a49;
	--color-diff-change-text: #b08800;
	--color-diff-change-bg: #fff5b1;
	--color-diff-change-border: #f9c513;
	--color-diff-blob-num-text: rgba(27, 31, 35, 0.3);
	--color-diff-blob-num-hover-text: rgba(27, 31, 35, 0.6);
	--color-diff-blob-addition-num-text: rgba(27, 31, 35, 0.3);
	--color-diff-blob-addition-num-hover-text: rgba(27, 31, 35, 0.6);
	--color-diff-blob-addition-num-bg: #cdffd8;
	--color-diff-blob-addition-line-bg: #e6ffed;
	--color-diff-blob-addition-word-bg: #acf2bd;
	--color-diff-blob-deletion-num-text: rgba(27, 31, 35, 0.3);
	--color-diff-blob-deletion-num-hover-text: rgba(27, 31, 35, 0.6);
	--color-diff-blob-deletion-num-bg: #ffdce0;
	--color-diff-blob-deletion-line-bg: #ffeef0;
	--color-diff-blob-deletion-word-bg: #fdb8c0;
	--color-diff-blob-hunk-text: rgba(27, 31, 35, 0.7);
	--color-diff-blob-hunk-num-bg: #dbedff;
	--color-diff-blob-hunk-line-bg: #f1f8ff;
	--color-diff-blob-empty-block-bg: #fafbfc;
	--color-diff-blob-selected-line-highlight-bg: rgba(255, 223, 93, 0.2);
	--color-diff-blob-selected-line-highlight-border: #ffd33d;
	--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;
	--color-diff-blob-expander-icon: #586069;
	--color-diff-blob-expander-hover-icon: #ffffff;
	--color-diff-blob-expander-hover-bg: #0366d6;
	--color-diff-blob-comment-button-icon: #ffffff;
	--color-diff-blob-comment-button-bg: #0366d6;
	--color-diff-blob-comment-button-gradient-bg: #0372ef;
	--color-global-nav-logo: #ffffff;
	--color-global-nav-bg: #24292e;
	--color-global-nav-text: #ffffff;
	--color-global-nav-icon: #ffffff;
	--color-global-nav-input-bg: #fafbfc;
	--color-global-nav-input-border: #fafbfc;
	--color-global-nav-input-icon: #d1d5da;
	--color-global-nav-input-placeholder: #959da5;
	--color-calendar-graph-day-bg: #ebedf0;
	--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L1-bg: #9be9a8;
	--color-calendar-graph-day-L2-bg: #40c463;
	--color-calendar-graph-day-L3-bg: #30a14e;
	--color-calendar-graph-day-L4-bg: #216e39;
	--color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
	--color-footer-invertocat-octicon: #d1d5da;
	--color-footer-invertocat-octicon-hover: #6a737d;
	--color-pr-state-draft-text: #ffffff;
	--color-pr-state-draft-bg: #6a737d;
	--color-pr-state-draft-border: rgba(0, 0, 0, 0);
	--color-pr-state-open-text: #ffffff;
	--color-pr-state-open-bg: #28a745;
	--color-pr-state-open-border: rgba(0, 0, 0, 0);
	--color-pr-state-merged-text: #ffffff;
	--color-pr-state-merged-bg: #6f42c1;
	--color-pr-state-merged-border: rgba(0, 0, 0, 0);
	--color-pr-state-closed-text: #ffffff;
	--color-pr-state-closed-bg: #d73a49;
	--color-pr-state-closed-border: rgba(0, 0, 0, 0);
	--color-topic-tag-text: #0366d6;
	--color-topic-tag-bg: #f1f8ff;
	--color-topic-tag-hover-bg: #ddeeff;
	--color-topic-tag-active-bg: #e7f3ff;
	--color-merge-box-success-icon-bg: #28a745;
	--color-merge-box-success-icon-text: #ffffff;
	--color-merge-box-success-icon-border: rgba(0, 0, 0, 0);
	--color-merge-box-success-indicator-bg: #28a745;
	--color-merge-box-success-indicator-border: rgba(0, 0, 0, 0);
	--color-merge-box-merged-icon-bg: #6f42c1;
	--color-merge-box-merged-icon-text: #ffffff;
	--color-merge-box-merged-icon-border: rgba(0, 0, 0, 0);
	--color-merge-box-merged-box-border: #6f42c1;
	--color-merge-box-neutral-icon-bg: #6a737d;
	--color-merge-box-neutral-icon-text: #ffffff;
	--color-merge-box-neutral-icon-border: rgba(0, 0, 0, 0);
	--color-merge-box-neutral-indicator-bg: #6a737d;
	--color-merge-box-neutral-indicator-border: rgba(0, 0, 0, 0);
	--color-merge-box-warning-icon-bg: #dbab09;
	--color-merge-box-warning-icon-text: #ffffff;
	--color-merge-box-warning-icon-border: rgba(0, 0, 0, 0);
	--color-merge-box-warning-box-border: #ffd33d;
	--color-merge-box-warning-merge-highlight: rgba(0, 0, 0, 0);
	--color-merge-box-error-icon-bg: #d73a49;
	--color-merge-box-error-icon-text: #ffffff;
	--color-merge-box-error-icon-border: rgba(0, 0, 0, 0);
	--color-merge-box-error-indicator-bg: #d73a49;
	--color-merge-box-error-indicator-border: rgba(0, 0, 0, 0);
	--color-project-card-bg: #ffffff;
	--color-project-header-bg: #24292e;
	--color-project-sidebar-bg: #ffffff;
	--color-project-gradient-in: #ffffff;
	--color-project-gradient-out: rgba(255, 255, 255, 0);
	--color-checks-bg: #24292e;
	--color-checks-run-border-width: 0px;
	--color-checks-container-border-width: 0px;
	--color-checks-text-primary: #fafbfc;
	--color-checks-text-secondary: #959da5;
	--color-checks-text-link: #79b8ff;
	--color-checks-btn-icon: #d1d5da;
	--color-checks-btn-hover-icon: #fafbfc;
	--color-checks-btn-hover-bg: rgba(255, 255, 255, 0.125);
	--color-checks-input-text: #f6f8fa;
	--color-checks-input-placeholder-text: #959da5;
	--color-checks-input-focus-text: #959da5;
	--color-checks-input-bg: #2f363d;
	--color-checks-input-shadow: none;
	--color-checks-dropdown-text: #d1d5da;
	--color-checks-dropdown-bg: #2f363d;
	--color-checks-dropdown-border: #444d56;
	--color-checks-dropdown-hover-text: #fafbfc;
	--color-checks-dropdown-hover-bg: #444d56;
	--color-checks-dropdown-btn-hover-text: #fafbfc;
	--color-checks-dropdown-btn-hover-bg: #2f363d;
	--color-checks-scrollbar-thumb-bg: #586069;
	--color-checks-header-label-text: #e1e4e8;
	--color-checks-header-label-open-text: #fafbfc;
	--color-checks-header-border: #2f363d;
	--color-checks-header-icon: #959da5;
	--color-checks-line-text: #e1e4e8;
	--color-checks-line-num-text: rgba(149, 157, 165, 0.75);
	--color-checks-line-timestamp-text: #959da5;
	--color-checks-line-hover-bg: #2f363d;
	--color-checks-line-selected-bg: rgba(33, 136, 255, 0.15);
	--color-checks-line-selected-num-text: #79b8ff;
	--color-checks-line-dt-fm-text: #24292e;
	--color-checks-line-dt-fm-bg: #ffd33d;
	--color-checks-gate-bg: rgba(249, 197, 19, 0.15);
	--color-checks-gate-text: #e1e4e8;
	--color-checks-gate-waiting-text: #d1d5da;
	--color-checks-step-header-open-bg: #2f363d;
	--color-checks-step-error-text: #f97583;
	--color-checks-step-warning-text: #ffea7f;
	--color-checks-logline-text: #959da5;
	--color-checks-logline-num-text: rgba(149, 157, 165, 0.75);
	--color-checks-logline-debug-text: #b392f0;
	--color-checks-logline-error-text: #e1e4e8;
	--color-checks-logline-error-num-text: #f97583;
	--color-checks-logline-error-bg: rgba(203, 36, 49, 0.15);
	--color-checks-logline-warning-text: #e1e4e8;
	--color-checks-logline-warning-num-text: #ffea7f;
	--color-checks-logline-warning-bg: rgba(249, 197, 19, 0.15);
	--color-checks-logline-command-text: #79b8ff;
	--color-checks-logline-section-text: #85e89d;
	--color-intro-shelf-gradient-left: #f1f8ff;
	--color-intro-shelf-gradient-right: #dcffe4;
	--color-intro-shelf-gradient-in: #ffffff;
	--color-intro-shelf-gradient-out: rgba(255, 255, 255, 0);
	--color-marketing-icon-primary: #2188ff;
	--color-marketing-icon-secondary: #79b8ff;
	--color-prettylights-syntax-comment: #6a737d;
	--color-prettylights-syntax-constant: #005cc5;
	--color-prettylights-syntax-entity: #6f42c1;
	--color-prettylights-syntax-storage-modifier-import: #24292e;
	--color-prettylights-syntax-entity-tag: #22863a;
	--color-prettylights-syntax-keyword: #d73a49;
	--color-prettylights-syntax-string: #032f62;
	--color-prettylights-syntax-variable: #e36209;
	--color-prettylights-syntax-brackethighlighter-unmatched: #b31d28;
	--color-prettylights-syntax-invalid-illegal-text: #fafbfc;
	--color-prettylights-syntax-invalid-illegal-bg: #b31d28;
	--color-prettylights-syntax-carriage-return-text: #fafbfc;
	--color-prettylights-syntax-carriage-return-bg: #d73a49;
	--color-prettylights-syntax-string-regexp: #22863a;
	--color-prettylights-syntax-markup-list: #735c0f;
	--color-prettylights-syntax-markup-heading: #005cc5;
	--color-prettylights-syntax-markup-italic: #24292e;
	--color-prettylights-syntax-markup-bold: #24292e;
	--color-prettylights-syntax-markup-deleted-text: #b31d28;
	--color-prettylights-syntax-markup-deleted-bg: #ffeef0;
	--color-prettylights-syntax-markup-inserted-text: #22863a;
	--color-prettylights-syntax-markup-inserted-bg: #f0fff4;
	--color-prettylights-syntax-markup-changed-text: #e36209;
	--color-prettylights-syntax-markup-changed-bg: #ffebda;
	--color-prettylights-syntax-markup-ignored-text: #f6f8fa;
	--color-prettylights-syntax-markup-ignored-bg: #005cc5;
	--color-prettylights-syntax-meta-diff-range: #6f42c1;
	--color-prettylights-syntax-brackethighlighter-angle: #586069;
	--color-prettylights-syntax-sublimelinter-gutter-mark: #959da5;
	--color-prettylights-syntax-constant-other-reference-link: #032f62;
	--color-codemirror-text: #24292e;
	--color-codemirror-bg: #ffffff;
	--color-codemirror-gutters-bg: #ffffff;
	--color-codemirror-guttermarker-text: #ffffff;
	--color-codemirror-guttermarker-subtle-text: #d1d5da;
	--color-codemirror-linenumber-text: #959da5;
	--color-codemirror-cursor: #24292e;
	--color-codemirror-selection-bg: #c8e1ff;
	--color-codemirror-activeline-bg: #fafbfc;
	--color-codemirror-matchingbracket-text: #24292e;
	--color-codemirror-lines-bg: #ffffff;
	--color-codemirror-syntax-comment: #6a737d;
	--color-codemirror-syntax-constant: #005cc5;
	--color-codemirror-syntax-entity: #6f42c1;
	--color-codemirror-syntax-keyword: #d73a49;
	--color-codemirror-syntax-storage: #d73a49;
	--color-codemirror-syntax-string: #032f62;
	--color-codemirror-syntax-support: #005cc5;
	--color-codemirror-syntax-variable: #e36209;
	--color-ansi-black: #24292e;
	--color-ansi-black-bright: #2f363d;
	--color-ansi-white: #e1e4e8;
	--color-ansi-white-bright: #e1e4e8;
	--color-ansi-gray: #959da5;
	--color-ansi-red: #f97583;
	--color-ansi-red-bright: #fdaeb7;
	--color-ansi-green: #85e89d;
	--color-ansi-green-bright: #bef5cb;
	--color-ansi-yellow: #ffea7f;
	--color-ansi-yellow-bright: #fff5b1;
	--color-ansi-blue: #79b8ff;
	--color-ansi-blue-bright: #c8e1ff;
	--color-ansi-magenta: #b392f0;
	--color-ansi-magenta-bright: #d1bcf9;
	--color-ansi-cyan: #76e3ea;
	--color-ansi-cyan-bright: #b3f0ff;
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme="light"] {
		--color-scale-black: #1b1f23;
		--color-scale-white: #ffffff;
		--color-scale-gray-0: #fafbfc;
		--color-scale-gray-1: #f6f8fa;
		--color-scale-gray-2: #e1e4e8;
		--color-scale-gray-3: #d1d5da;
		--color-scale-gray-4: #959da5;
		--color-scale-gray-5: #6a737d;
		--color-scale-gray-6: #586069;
		--color-scale-gray-7: #444d56;
		--color-scale-gray-8: #2f363d;
		--color-scale-gray-9: #24292e;
		--color-scale-blue-0: #f1f8ff;
		--color-scale-blue-1: #dbedff;
		--color-scale-blue-2: #c8e1ff;
		--color-scale-blue-3: #79b8ff;
		--color-scale-blue-4: #2188ff;
		--color-scale-blue-5: #0366d6;
		--color-scale-blue-6: #005cc5;
		--color-scale-blue-7: #044289;
		--color-scale-blue-8: #032f62;
		--color-scale-blue-9: #05264c;
		--color-scale-green-0: #f0fff4;
		--color-scale-green-1: #dcffe4;
		--color-scale-green-2: #bef5cb;
		--color-scale-green-3: #85e89d;
		--color-scale-green-4: #34d058;
		--color-scale-green-5: #28a745;
		--color-scale-green-6: #22863a;
		--color-scale-green-7: #176f2c;
		--color-scale-green-8: #165c26;
		--color-scale-green-9: #144620;
		--color-scale-yellow-0: #fffdef;
		--color-scale-yellow-1: #fffbdd;
		--color-scale-yellow-2: #fff5b1;
		--color-scale-yellow-3: #ffea7f;
		--color-scale-yellow-4: #ffdf5d;
		--color-scale-yellow-5: #ffd33d;
		--color-scale-yellow-6: #f9c513;
		--color-scale-yellow-7: #dbab09;
		--color-scale-yellow-8: #b08800;
		--color-scale-yellow-9: #735c0f;
		--color-scale-orange-0: #fff8f2;
		--color-scale-orange-1: #ffebda;
		--color-scale-orange-2: #ffd1ac;
		--color-scale-orange-3: #ffab70;
		--color-scale-orange-4: #fb8532;
		--color-scale-orange-5: #f66a0a;
		--color-scale-orange-6: #e36209;
		--color-scale-orange-7: #d15704;
		--color-scale-orange-8: #c24e00;
		--color-scale-orange-9: #a04100;
		--color-scale-red-0: #ffeef0;
		--color-scale-red-1: #ffdce0;
		--color-scale-red-2: #fdaeb7;
		--color-scale-red-3: #f97583;
		--color-scale-red-4: #ea4a5a;
		--color-scale-red-5: #d73a49;
		--color-scale-red-6: #cb2431;
		--color-scale-red-7: #b31d28;
		--color-scale-red-8: #9e1c23;
		--color-scale-red-9: #86181d;
		--color-scale-purple-0: #f5f0ff;
		--color-scale-purple-1: #e6dcfd;
		--color-scale-purple-2: #d1bcf9;
		--color-scale-purple-3: #b392f0;
		--color-scale-purple-4: #8a63d2;
		--color-scale-purple-5: #6f42c1;
		--color-scale-purple-6: #5a32a3;
		--color-scale-purple-7: #4c2889;
		--color-scale-purple-8: #3a1d6e;
		--color-scale-purple-9: #29134e;
		--color-scale-pink-0: #ffeef8;
		--color-scale-pink-1: #fedbf0;
		--color-scale-pink-2: #f9b3dd;
		--color-scale-pink-3: #f692ce;
		--color-scale-pink-4: #ec6cb9;
		--color-scale-pink-5: #ea4aaa;
		--color-scale-pink-6: #d03592;
		--color-scale-pink-7: #b93a86;
		--color-scale-pink-8: #99306f;
		--color-scale-pink-9: #6d224f;
		--color-auto-black: #1b1f23;
		--color-auto-white: #ffffff;
		--color-auto-gray-0: #fafbfc;
		--color-auto-gray-1: #f6f8fa;
		--color-auto-gray-2: #e1e4e8;
		--color-auto-gray-3: #d1d5da;
		--color-auto-gray-4: #959da5;
		--color-auto-gray-5: #6a737d;
		--color-auto-gray-6: #586069;
		--color-auto-gray-7: #444d56;
		--color-auto-gray-8: #2f363d;
		--color-auto-gray-9: #24292e;
		--color-auto-blue-0: #f1f8ff;
		--color-auto-blue-1: #dbedff;
		--color-auto-blue-2: #c8e1ff;
		--color-auto-blue-3: #79b8ff;
		--color-auto-blue-4: #2188ff;
		--color-auto-blue-5: #0366d6;
		--color-auto-blue-6: #005cc5;
		--color-auto-blue-7: #044289;
		--color-auto-blue-8: #032f62;
		--color-auto-blue-9: #05264c;
		--color-auto-green-0: #f0fff4;
		--color-auto-green-1: #dcffe4;
		--color-auto-green-2: #bef5cb;
		--color-auto-green-3: #85e89d;
		--color-auto-green-4: #34d058;
		--color-auto-green-5: #28a745;
		--color-auto-green-6: #22863a;
		--color-auto-green-7: #176f2c;
		--color-auto-green-8: #165c26;
		--color-auto-green-9: #144620;
		--color-auto-yellow-0: #fffdef;
		--color-auto-yellow-1: #fffbdd;
		--color-auto-yellow-2: #fff5b1;
		--color-auto-yellow-3: #ffea7f;
		--color-auto-yellow-4: #ffdf5d;
		--color-auto-yellow-5: #ffd33d;
		--color-auto-yellow-6: #f9c513;
		--color-auto-yellow-7: #dbab09;
		--color-auto-yellow-8: #b08800;
		--color-auto-yellow-9: #735c0f;
		--color-auto-orange-0: #fff8f2;
		--color-auto-orange-1: #ffebda;
		--color-auto-orange-2: #ffd1ac;
		--color-auto-orange-3: #ffab70;
		--color-auto-orange-4: #fb8532;
		--color-auto-orange-5: #f66a0a;
		--color-auto-orange-6: #e36209;
		--color-auto-orange-7: #d15704;
		--color-auto-orange-8: #c24e00;
		--color-auto-orange-9: #a04100;
		--color-auto-red-0: #ffeef0;
		--color-auto-red-1: #ffdce0;
		--color-auto-red-2: #fdaeb7;
		--color-auto-red-3: #f97583;
		--color-auto-red-4: #ea4a5a;
		--color-auto-red-5: #d73a49;
		--color-auto-red-6: #cb2431;
		--color-auto-red-7: #b31d28;
		--color-auto-red-8: #9e1c23;
		--color-auto-red-9: #86181d;
		--color-auto-purple-0: #f5f0ff;
		--color-auto-purple-1: #e6dcfd;
		--color-auto-purple-2: #d1bcf9;
		--color-auto-purple-3: #b392f0;
		--color-auto-purple-4: #8a63d2;
		--color-auto-purple-5: #6f42c1;
		--color-auto-purple-6: #5a32a3;
		--color-auto-purple-7: #4c2889;
		--color-auto-purple-8: #3a1d6e;
		--color-auto-purple-9: #29134e;
		--color-auto-pink-0: #ffeef8;
		--color-auto-pink-1: #fedbf0;
		--color-auto-pink-2: #f9b3dd;
		--color-auto-pink-3: #f692ce;
		--color-auto-pink-4: #ec6cb9;
		--color-auto-pink-5: #ea4aaa;
		--color-auto-pink-6: #d03592;
		--color-auto-pink-7: #b93a86;
		--color-auto-pink-8: #99306f;
		--color-auto-pink-9: #6d224f;
		--color-text-primary: #24292e;
		--color-text-secondary: #586069;
		--color-text-tertiary: #6a737d;
		--color-text-placeholder: #6a737d;
		--color-text-disabled: #959da5;
		--color-text-inverse: #ffffff;
		--color-text-link: #0366d6;
		--color-text-danger: #cb2431;
		--color-text-success: #22863a;
		--color-text-warning: #b08800;
		--color-text-white: #ffffff;
		--color-icon-primary: #24292e;
		--color-icon-secondary: #586069;
		--color-icon-tertiary: #959da5;
		--color-icon-info: #0366d6;
		--color-icon-danger: #d73a49;
		--color-icon-success: #22863a;
		--color-icon-warning: #b08800;
		--color-border-primary: #e1e4e8;
		--color-border-secondary: #eaecef;
		--color-border-tertiary: #d1d5da;
		--color-border-overlay: #e1e4e8;
		--color-border-inverse: #ffffff;
		--color-border-info: #0366d6;
		--color-border-danger: #d73a49;
		--color-border-success: #34d058;
		--color-border-warning: #f9c513;
		--color-bg-canvas: #ffffff;
		--color-bg-canvas-mobile: #ffffff;
		--color-bg-canvas-inverse: #24292e;
		--color-bg-canvas-inset: #f6f8fa;
		--color-bg-primary: #ffffff;
		--color-bg-secondary: #fafbfc;
		--color-bg-tertiary: #f6f8fa;
		--color-bg-overlay: #ffffff;
		--color-bg-backdrop: rgba(27, 31, 35, 0.5);
		--color-bg-info: #f1f8ff;
		--color-bg-info-inverse: #0366d6;
		--color-bg-danger: #ffeef0;
		--color-bg-danger-inverse: #d73a49;
		--color-bg-success: #dcffe4;
		--color-bg-success-inverse: #28a745;
		--color-bg-warning: #fff5b1;
		--color-bg-warning-inverse: #ffd33d;
		--color-shadow-small: 0 1px 0 rgba(27, 31, 35, 0.04);
		--color-shadow-medium: 0 3px 6px rgba(149, 157, 165, 0.15);
		--color-shadow-large: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-shadow-extra-large: 0 12px 48px rgba(149, 157, 165, 0.3);
		--color-shadow-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.25);
		--color-shadow-inset: inset 0 1px 0 rgba(225, 228, 232, 0.2);
		--color-state-hover-primary-bg: #0366d6;
		--color-state-hover-primary-border: #0366d6;
		--color-state-hover-primary-text: #ffffff;
		--color-state-hover-primary-icon: #ffffff;
		--color-state-hover-secondary-bg: #f6f8fa;
		--color-state-hover-secondary-border: #f6f8fa;
		--color-state-selected-primary-bg: #0366d6;
		--color-state-selected-primary-border: #0366d6;
		--color-state-selected-primary-text: #ffffff;
		--color-state-selected-primary-icon: #ffffff;
		--color-state-focus-border: #0366d6;
		--color-state-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
		--color-fade-fg-10: rgba(27, 31, 35, 0.1);
		--color-fade-fg-15: rgba(27, 31, 35, 0.15);
		--color-fade-fg-30: rgba(27, 31, 35, 0.3);
		--color-fade-fg-50: rgba(27, 31, 35, 0.5);
		--color-fade-fg-70: rgba(27, 31, 35, 0.7);
		--color-fade-fg-85: rgba(27, 31, 35, 0.85);
		--color-fade-black-10: rgba(27, 31, 35, 0.1);
		--color-fade-black-15: rgba(27, 31, 35, 0.15);
		--color-fade-black-30: rgba(27, 31, 35, 0.3);
		--color-fade-black-50: rgba(27, 31, 35, 0.5);
		--color-fade-black-70: rgba(27, 31, 35, 0.7);
		--color-fade-black-85: rgba(27, 31, 35, 0.85);
		--color-fade-white-10: rgba(255, 255, 255, 0.1);
		--color-fade-white-15: rgba(255, 255, 255, 0.15);
		--color-fade-white-30: rgba(255, 255, 255, 0.3);
		--color-fade-white-50: rgba(255, 255, 255, 0.5);
		--color-fade-white-70: rgba(255, 255, 255, 0.7);
		--color-fade-white-85: rgba(255, 255, 255, 0.85);
		--color-alert-info-text: #24292e;
		--color-alert-info-icon: rgba(4, 66, 137, 0.6);
		--color-alert-info-bg: #dbedff;
		--color-alert-info-border: rgba(4, 66, 137, 0.2);
		--color-alert-warn-text: #24292e;
		--color-alert-warn-icon: #b08800;
		--color-alert-warn-bg: #fffbdd;
		--color-alert-warn-border: rgba(176, 136, 0, 0.2);
		--color-alert-error-text: #24292e;
		--color-alert-error-icon: rgba(158, 28, 35, 0.6);
		--color-alert-error-bg: #ffe3e6;
		--color-alert-error-border: rgba(158, 28, 35, 0.2);
		--color-alert-success-text: #24292e;
		--color-alert-success-icon: rgba(23, 111, 44, 0.8);
		--color-alert-success-bg: #dcffe4;
		--color-alert-success-border: rgba(23, 111, 44, 0.2);
		--color-autocomplete-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);
		--color-autocomplete-row-border: #eaecef;
		--color-blankslate-icon: #a3aab1;
		--color-btn-text: #24292e;
		--color-btn-bg: #fafbfc;
		--color-btn-border: rgba(27, 31, 35, 0.15);
		--color-btn-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
		--color-btn-inset-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
		--color-btn-hover-bg: #f3f4f6;
		--color-btn-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-selected-bg: #edeff2;
		--color-btn-focus-bg: #fafbfc;
		--color-btn-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(3, 102, 214, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #2ea44f;
		--color-btn-primary-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-primary-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-primary-hover-bg: #2c974b;
		--color-btn-primary-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-selected-bg: #2a8f47;
		--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(20, 70, 32, 0.2);
		--color-btn-primary-disabled-text: rgba(255, 255, 255, 0.8);
		--color-btn-primary-disabled-bg: #94d3a2;
		--color-btn-primary-disabled-border: rgba(27, 31, 35, 0.1);
		--color-btn-primary-focus-bg: #2ea44f;
		--color-btn-primary-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: rgba(255, 255, 255, 0.8);
		--color-btn-primary-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-outline-text: #0366d6;
		--color-btn-outline-hover-text: #ffffff;
		--color-btn-outline-hover-bg: #0366d6;
		--color-btn-outline-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-outline-selected-text: #ffffff;
		--color-btn-outline-selected-bg: #035fc7;
		--color-btn-outline-selected-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(5, 38, 76, 0.2);
		--color-btn-outline-disabled-text: rgba(3, 102, 214, 0.5);
		--color-btn-outline-disabled-bg: #fafbfc;
		--color-btn-outline-disabled-counter-bg: rgba(3, 102, 214, 0.05);
		--color-btn-outline-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(0, 92, 197, 0.4);
		--color-btn-outline-counter-bg: rgba(3, 102, 214, 0.1);
		--color-btn-danger-text: #d73a49;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #cb2431;
		--color-btn-danger-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-danger-hover-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #d42d3d;
		--color-btn-danger-selected-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(134, 24, 29, 0.2);
		--color-btn-danger-disabled-text: rgba(215, 58, 73, 0.5);
		--color-btn-danger-disabled-bg: #fafbfc;
		--color-btn-danger-disabled-counter-bg: rgba(215, 58, 73, 0.05);
		--color-btn-danger-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(203, 36, 49, 0.4);
		--color-btn-danger-counter-bg: rgba(215, 58, 73, 0.1);
		--color-btn-danger-icon: #d73a49;
		--color-btn-danger-hover-icon: #ffffff;
		--color-btn-counter-bg: rgba(27, 31, 35, 0.08);
		--color-counter-text: #24292e;
		--color-counter-bg: rgba(209, 213, 218, 0.5);
		--color-counter-primary-text: #ffffff;
		--color-counter-primary-bg: #6a737d;
		--color-counter-secondary-text: #6a737d;
		--color-counter-secondary-bg: rgba(209, 213, 218, 0.5);
		--color-dropdown-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-label-border: #e1e4e8;
		--color-label-primary-text: #24292e;
		--color-label-primary-border: #6a737d;
		--color-label-secondary-text: #586069;
		--color-label-secondary-border: #e1e4e8;
		--color-label-info-text: #0366d6;
		--color-label-info-border: #0366d6;
		--color-label-success-text: #22863a;
		--color-label-success-border: #28a745;
		--color-label-warning-text: #735c0f;
		--color-label-warning-border: #b08800;
		--color-label-danger-text: #d73a49;
		--color-label-danger-border: #cb2431;
		--color-label-orange-text: #c24e00;
		--color-label-orange-border: #f66a0a;
		--color-input-bg: #ffffff;
		--color-input-contrast-bg: #fafbfc;
		--color-input-border: #e1e4e8;
		--color-input-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
		--color-input-disabled-bg: #f6f8fa;
		--color-input-disabled-border: #e1e4e8;
		--color-input-warning-border: #f9c513;
		--color-input-error-border: #cb2431;
		--color-input-tooltip-success-text: #144620;
		--color-input-tooltip-success-bg: #dcffe4;
		--color-input-tooltip-success-border: #34d058;
		--color-input-tooltip-warning-text: #735c0f;
		--color-input-tooltip-warning-bg: #fff5b1;
		--color-input-tooltip-warning-border: #f9c513;
		--color-input-tooltip-error-text: #86181d;
		--color-input-tooltip-error-bg: #ffeef0;
		--color-input-tooltip-error-border: #f97583;
		--color-avatar-bg: #ffffff;
		--color-avatar-border: rgba(0, 0, 0, 0);
		--color-avatar-stack-fade: #d1d5da;
		--color-avatar-stack-fade-more: #e1e4e8;
		--color-avatar-child-shadow: -2px -2px 0 rgba(255, 255, 255, 0.8);
		--color-toast-text: #24292e;
		--color-toast-bg: #ffffff;
		--color-toast-border: #e1e4e8;
		--color-toast-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-toast-icon: #ffffff;
		--color-toast-icon-bg: #0366d6;
		--color-toast-icon-border: rgba(0, 0, 0, 0);
		--color-toast-success-text: #24292e;
		--color-toast-success-border: #e1e4e8;
		--color-toast-success-icon: #ffffff;
		--color-toast-success-icon-bg: #28a745;
		--color-toast-success-icon-border: rgba(0, 0, 0, 0);
		--color-toast-warning-text: #24292e;
		--color-toast-warning-border: #e1e4e8;
		--color-toast-warning-icon: #24292e;
		--color-toast-warning-icon-bg: #ffd33d;
		--color-toast-warning-icon-border: rgba(0, 0, 0, 0);
		--color-toast-danger-text: #24292e;
		--color-toast-danger-border: #e1e4e8;
		--color-toast-danger-icon: #ffffff;
		--color-toast-danger-icon-bg: #d73a49;
		--color-toast-danger-icon-border: rgba(0, 0, 0, 0);
		--color-toast-loading-text: #24292e;
		--color-toast-loading-border: #e1e4e8;
		--color-toast-loading-icon: #ffffff;
		--color-toast-loading-icon-bg: #586069;
		--color-toast-loading-icon-border: rgba(0, 0, 0, 0);
		--color-timeline-text: #444d56;
		--color-timeline-badge-bg: #e1e4e8;
		--color-timeline-badge-success-border: rgba(0, 0, 0, 0);
		--color-timeline-target-badge-border: #2188ff;
		--color-timeline-target-badge-shadow: #c8e1ff;
		--color-select-menu-border-secondary: #eaecef;
		--color-select-menu-shadow: 0 0 18px rgba(27, 31, 35, 0.4);
		--color-select-menu-backdrop-bg: rgba(27, 31, 35, 0.5);
		--color-select-menu-backdrop-border: rgba(0, 0, 0, 0);
		--color-select-menu-tap-highlight: rgba(209, 213, 218, 0.5);
		--color-select-menu-tap-focus-bg: #dbedff;
		--color-box-blue-border: #c8e1ff;
		--color-box-row-yellow-bg: #fffbdd;
		--color-box-row-blue-bg: #f1f8ff;
		--color-box-header-blue-bg: #f1f8ff;
		--color-box-header-blue-border: #c8e1ff;
		--color-box-border-info: rgba(3, 102, 214, 0.2);
		--color-box-bg-info: #f1f8ff;
		--color-box-border-warning: rgba(255, 211, 61, 0.4);
		--color-box-bg-warning: #fffdef;
		--color-branch-name-text: #586069;
		--color-branch-name-icon: #a8bbd0;
		--color-branch-name-bg: #eaf5ff;
		--color-branch-name-link-text: #0366d6;
		--color-branch-name-link-icon: #a8bbd0;
		--color-branch-name-link-bg: #eaf5ff;
		--color-markdown-code-bg: rgba(27, 31, 35, 0.05);
		--color-markdown-frame-border: #dfe2e5;
		--color-markdown-blockquote-border: #dfe2e5;
		--color-markdown-table-border: #dfe2e5;
		--color-markdown-table-tr-border: #c6cbd1;
		--color-menu-heading-text: #24292e;
		--color-menu-border-active: #f9826c;
		--color-menu-bg-active: rgba(0, 0, 0, 0);
		--color-sidenav-selected-bg: #ffffff;
		--color-sidenav-border-active: #f9826c;
		--color-header-text: rgba(255, 255, 255, 0.7);
		--color-header-bg: #24292e;
		--color-header-logo: #ffffff;
		--color-filter-item-bar-bg: #eff3f6;
		--color-hidden-text-expander-bg: #dfe2e5;
		--color-hidden-text-expander-bg-hover: #c6cbd1;
		--color-drag-and-drop-border: #c3c8cf;
		--color-upload-enabled-border: #dfe2e5;
		--color-upload-enabled-border-focused: #4a9eff;
		--color-previewable-comment-form-border: #c3c8cf;
		--color-underlinenav-border: rgba(209, 213, 218, 0);
		--color-underlinenav-border-hover: #d1d5da;
		--color-underlinenav-border-active: #f9826c;
		--color-underlinenav-text: #24292e;
		--color-underlinenav-text-hover: #24292e;
		--color-underlinenav-text-active: #24292e;
		--color-underlinenav-icon: #959da5;
		--color-underlinenav-icon-hover: #959da5;
		--color-underlinenav-icon-active: #24292e;
		--color-underlinenav-counter-text: #24292e;
		--color-underlinenav-counter-bg: rgba(209, 213, 218, 0.5);
		--color-verified-badge-text: #22863a;
		--color-verified-badge-bg: #ffffff;
		--color-verified-badge-border: #e1e4e8;
		--color-social-count-bg: #ffffff;
		--color-tooltip-text: #ffffff;
		--color-tooltip-bg: #24292e;
		--color-header-search-bg: #24292e;
		--color-header-search-border: #444d56;
		--color-search-keyword-hl: #fffbdd;
		--color-diffstat-neutral-bg: #d1d5da;
		--color-diffstat-neutral-border: #d1d5da;
		--color-diffstat-deletion-bg: #d73a49;
		--color-diffstat-deletion-border: #d73a49;
		--color-diffstat-addition-bg: #28a745;
		--color-diffstat-addition-border: #28a745;
		--color-mktg-success: #2ebc4f;
		--color-mktg-info: #1074e7;
		--color-mktg-bg-shade-gradient-top: rgba(27, 31, 35, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(27, 31, 35, 0);
		--color-mktg-btn-bg: #3076df;
		--color-mktg-btn-border: #3076df;
		--color-mktg-btn-text: #ffffff;
		--color-mktg-btn-icon: #ffffff;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(48, 118, 223, 0.3);
		--color-mktg-btn-hover-bg: #0366d6;
		--color-mktg-btn-hover-border: #0366d6;
		--color-mktg-btn-disabled-bg: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: #ffffff;
		--color-mktg-btn-disabled-icon: #ffffff;
		--color-mktg-btn-primary-bg: #5eb85c;
		--color-mktg-btn-primary-border: #5eb85c;
		--color-mktg-btn-primary-text: #ffffff;
		--color-mktg-btn-primary-icon: #ffffff;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(94, 184, 92, 0.3);
		--color-mktg-btn-primary-hover-bg: #28a745;
		--color-mktg-btn-primary-hover-border: #28a745;
		--color-mktg-btn-primary-disabled-bg: rgba(94, 184, 92, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: #ffffff;
		--color-mktg-btn-primary-disabled-icon: #ffffff;
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(42, 103, 195, 0.5);
		--color-mktg-btn-outline-text: #3076df;
		--color-mktg-btn-outline-icon: #3076df;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(42, 103, 195, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #0366d6;
		--color-mktg-btn-outline-hover-text: #0366d6;
		--color-mktg-btn-outline-hover-icon: #0366d6;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(42, 103, 195, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(255, 255, 255, 0.5);
		--color-mktg-btn-dark-text: #ffffff;
		--color-mktg-btn-dark-icon: #ffffff;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
		--color-mktg-btn-dark-hover-bg: #ffffff;
		--color-mktg-btn-dark-hover-border: #ffffff;
		--color-mktg-btn-dark-hover-text: #444d56;
		--color-mktg-btn-dark-hover-icon: #444d56;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(255, 255, 255, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(255, 255, 255, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(255, 255, 255, 0.5);
		--color-files-explorer-icon: #79b8ff;
		--color-hl-author-bg: #f1f8ff;
		--color-hl-author-border: #c8e1ff;
		--color-logo-subdued: #d1d5da;
		--color-discussion-border: #a2cbac;
		--color-discussion-bg-success: #28a745;
		--color-actions-workflow-table-sticky-bg: rgba(255, 255, 255, 0.95);
		--color-repo-language-color-border: rgba(27, 31, 35, 0.1);
		--color-code-selection-bg: #c8e1ff;
		--color-highlight-text: #442c12;
		--color-highlight-bg: #fff0bb;
		--color-blob-line-highlight-bg: #fffbdd;
		--color-blob-line-highlight-border: rgba(0, 0, 0, 0);
		--color-diff-addition-text: #22863a;
		--color-diff-addition-bg: #e6ffed;
		--color-diff-addition-border: #34d058;
		--color-diff-deletion-text: #cb2431;
		--color-diff-deletion-bg: #ffeef0;
		--color-diff-deletion-border: #d73a49;
		--color-diff-change-text: #b08800;
		--color-diff-change-bg: #fff5b1;
		--color-diff-change-border: #f9c513;
		--color-diff-blob-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-addition-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-addition-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-addition-num-bg: #cdffd8;
		--color-diff-blob-addition-line-bg: #e6ffed;
		--color-diff-blob-addition-word-bg: #acf2bd;
		--color-diff-blob-deletion-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-deletion-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-deletion-num-bg: #ffdce0;
		--color-diff-blob-deletion-line-bg: #ffeef0;
		--color-diff-blob-deletion-word-bg: #fdb8c0;
		--color-diff-blob-hunk-text: rgba(27, 31, 35, 0.7);
		--color-diff-blob-hunk-num-bg: #dbedff;
		--color-diff-blob-hunk-line-bg: #f1f8ff;
		--color-diff-blob-empty-block-bg: #fafbfc;
		--color-diff-blob-selected-line-highlight-bg: rgba(255, 223, 93, 0.2);
		--color-diff-blob-selected-line-highlight-border: #ffd33d;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;
		--color-diff-blob-expander-icon: #586069;
		--color-diff-blob-expander-hover-icon: #ffffff;
		--color-diff-blob-expander-hover-bg: #0366d6;
		--color-diff-blob-comment-button-icon: #ffffff;
		--color-diff-blob-comment-button-bg: #0366d6;
		--color-diff-blob-comment-button-gradient-bg: #0372ef;
		--color-global-nav-logo: #ffffff;
		--color-global-nav-bg: #24292e;
		--color-global-nav-text: #ffffff;
		--color-global-nav-icon: #ffffff;
		--color-global-nav-input-bg: #fafbfc;
		--color-global-nav-input-border: #fafbfc;
		--color-global-nav-input-icon: #d1d5da;
		--color-global-nav-input-placeholder: #959da5;
		--color-calendar-graph-day-bg: #ebedf0;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #9be9a8;
		--color-calendar-graph-day-L2-bg: #40c463;
		--color-calendar-graph-day-L3-bg: #30a14e;
		--color-calendar-graph-day-L4-bg: #216e39;
		--color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
		--color-footer-invertocat-octicon: #d1d5da;
		--color-footer-invertocat-octicon-hover: #6a737d;
		--color-pr-state-draft-text: #ffffff;
		--color-pr-state-draft-bg: #6a737d;
		--color-pr-state-draft-border: rgba(0, 0, 0, 0);
		--color-pr-state-open-text: #ffffff;
		--color-pr-state-open-bg: #28a745;
		--color-pr-state-open-border: rgba(0, 0, 0, 0);
		--color-pr-state-merged-text: #ffffff;
		--color-pr-state-merged-bg: #6f42c1;
		--color-pr-state-merged-border: rgba(0, 0, 0, 0);
		--color-pr-state-closed-text: #ffffff;
		--color-pr-state-closed-bg: #d73a49;
		--color-pr-state-closed-border: rgba(0, 0, 0, 0);
		--color-topic-tag-text: #0366d6;
		--color-topic-tag-bg: #f1f8ff;
		--color-topic-tag-hover-bg: #ddeeff;
		--color-topic-tag-active-bg: #e7f3ff;
		--color-merge-box-success-icon-bg: #28a745;
		--color-merge-box-success-icon-text: #ffffff;
		--color-merge-box-success-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-success-indicator-bg: #28a745;
		--color-merge-box-success-indicator-border: rgba(0, 0, 0, 0);
		--color-merge-box-merged-icon-bg: #6f42c1;
		--color-merge-box-merged-icon-text: #ffffff;
		--color-merge-box-merged-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-merged-box-border: #6f42c1;
		--color-merge-box-neutral-icon-bg: #6a737d;
		--color-merge-box-neutral-icon-text: #ffffff;
		--color-merge-box-neutral-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-neutral-indicator-bg: #6a737d;
		--color-merge-box-neutral-indicator-border: rgba(0, 0, 0, 0);
		--color-merge-box-warning-icon-bg: #dbab09;
		--color-merge-box-warning-icon-text: #ffffff;
		--color-merge-box-warning-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-warning-box-border: #ffd33d;
		--color-merge-box-warning-merge-highlight: rgba(0, 0, 0, 0);
		--color-merge-box-error-icon-bg: #d73a49;
		--color-merge-box-error-icon-text: #ffffff;
		--color-merge-box-error-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-error-indicator-bg: #d73a49;
		--color-merge-box-error-indicator-border: rgba(0, 0, 0, 0);
		--color-project-card-bg: #ffffff;
		--color-project-header-bg: #24292e;
		--color-project-sidebar-bg: #ffffff;
		--color-project-gradient-in: #ffffff;
		--color-project-gradient-out: rgba(255, 255, 255, 0);
		--color-checks-bg: #24292e;
		--color-checks-run-border-width: 0px;
		--color-checks-container-border-width: 0px;
		--color-checks-text-primary: #fafbfc;
		--color-checks-text-secondary: #959da5;
		--color-checks-text-link: #79b8ff;
		--color-checks-btn-icon: #d1d5da;
		--color-checks-btn-hover-icon: #fafbfc;
		--color-checks-btn-hover-bg: rgba(255, 255, 255, 0.125);
		--color-checks-input-text: #f6f8fa;
		--color-checks-input-placeholder-text: #959da5;
		--color-checks-input-focus-text: #959da5;
		--color-checks-input-bg: #2f363d;
		--color-checks-input-shadow: none;
		--color-checks-dropdown-text: #d1d5da;
		--color-checks-dropdown-bg: #2f363d;
		--color-checks-dropdown-border: #444d56;
		--color-checks-dropdown-hover-text: #fafbfc;
		--color-checks-dropdown-hover-bg: #444d56;
		--color-checks-dropdown-btn-hover-text: #fafbfc;
		--color-checks-dropdown-btn-hover-bg: #2f363d;
		--color-checks-scrollbar-thumb-bg: #586069;
		--color-checks-header-label-text: #e1e4e8;
		--color-checks-header-label-open-text: #fafbfc;
		--color-checks-header-border: #2f363d;
		--color-checks-header-icon: #959da5;
		--color-checks-line-text: #e1e4e8;
		--color-checks-line-num-text: rgba(149, 157, 165, 0.75);
		--color-checks-line-timestamp-text: #959da5;
		--color-checks-line-hover-bg: #2f363d;
		--color-checks-line-selected-bg: rgba(33, 136, 255, 0.15);
		--color-checks-line-selected-num-text: #79b8ff;
		--color-checks-line-dt-fm-text: #24292e;
		--color-checks-line-dt-fm-bg: #ffd33d;
		--color-checks-gate-bg: rgba(249, 197, 19, 0.15);
		--color-checks-gate-text: #e1e4e8;
		--color-checks-gate-waiting-text: #d1d5da;
		--color-checks-step-header-open-bg: #2f363d;
		--color-checks-step-error-text: #f97583;
		--color-checks-step-warning-text: #ffea7f;
		--color-checks-logline-text: #959da5;
		--color-checks-logline-num-text: rgba(149, 157, 165, 0.75);
		--color-checks-logline-debug-text: #b392f0;
		--color-checks-logline-error-text: #e1e4e8;
		--color-checks-logline-error-num-text: #f97583;
		--color-checks-logline-error-bg: rgba(203, 36, 49, 0.15);
		--color-checks-logline-warning-text: #e1e4e8;
		--color-checks-logline-warning-num-text: #ffea7f;
		--color-checks-logline-warning-bg: rgba(249, 197, 19, 0.15);
		--color-checks-logline-command-text: #79b8ff;
		--color-checks-logline-section-text: #85e89d;
		--color-intro-shelf-gradient-left: #f1f8ff;
		--color-intro-shelf-gradient-right: #dcffe4;
		--color-intro-shelf-gradient-in: #ffffff;
		--color-intro-shelf-gradient-out: rgba(255, 255, 255, 0);
		--color-marketing-icon-primary: #2188ff;
		--color-marketing-icon-secondary: #79b8ff;
		--color-prettylights-syntax-comment: #6a737d;
		--color-prettylights-syntax-constant: #005cc5;
		--color-prettylights-syntax-entity: #6f42c1;
		--color-prettylights-syntax-storage-modifier-import: #24292e;
		--color-prettylights-syntax-entity-tag: #22863a;
		--color-prettylights-syntax-keyword: #d73a49;
		--color-prettylights-syntax-string: #032f62;
		--color-prettylights-syntax-variable: #e36209;
		--color-prettylights-syntax-brackethighlighter-unmatched: #b31d28;
		--color-prettylights-syntax-invalid-illegal-text: #fafbfc;
		--color-prettylights-syntax-invalid-illegal-bg: #b31d28;
		--color-prettylights-syntax-carriage-return-text: #fafbfc;
		--color-prettylights-syntax-carriage-return-bg: #d73a49;
		--color-prettylights-syntax-string-regexp: #22863a;
		--color-prettylights-syntax-markup-list: #735c0f;
		--color-prettylights-syntax-markup-heading: #005cc5;
		--color-prettylights-syntax-markup-italic: #24292e;
		--color-prettylights-syntax-markup-bold: #24292e;
		--color-prettylights-syntax-markup-deleted-text: #b31d28;
		--color-prettylights-syntax-markup-deleted-bg: #ffeef0;
		--color-prettylights-syntax-markup-inserted-text: #22863a;
		--color-prettylights-syntax-markup-inserted-bg: #f0fff4;
		--color-prettylights-syntax-markup-changed-text: #e36209;
		--color-prettylights-syntax-markup-changed-bg: #ffebda;
		--color-prettylights-syntax-markup-ignored-text: #f6f8fa;
		--color-prettylights-syntax-markup-ignored-bg: #005cc5;
		--color-prettylights-syntax-meta-diff-range: #6f42c1;
		--color-prettylights-syntax-brackethighlighter-angle: #586069;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #959da5;
		--color-prettylights-syntax-constant-other-reference-link: #032f62;
		--color-codemirror-text: #24292e;
		--color-codemirror-bg: #ffffff;
		--color-codemirror-gutters-bg: #ffffff;
		--color-codemirror-guttermarker-text: #ffffff;
		--color-codemirror-guttermarker-subtle-text: #d1d5da;
		--color-codemirror-linenumber-text: #959da5;
		--color-codemirror-cursor: #24292e;
		--color-codemirror-selection-bg: #c8e1ff;
		--color-codemirror-activeline-bg: #fafbfc;
		--color-codemirror-matchingbracket-text: #24292e;
		--color-codemirror-lines-bg: #ffffff;
		--color-codemirror-syntax-comment: #6a737d;
		--color-codemirror-syntax-constant: #005cc5;
		--color-codemirror-syntax-entity: #6f42c1;
		--color-codemirror-syntax-keyword: #d73a49;
		--color-codemirror-syntax-storage: #d73a49;
		--color-codemirror-syntax-string: #032f62;
		--color-codemirror-syntax-support: #005cc5;
		--color-codemirror-syntax-variable: #e36209;
		--color-ansi-black: #24292e;
		--color-ansi-black-bright: #2f363d;
		--color-ansi-white: #e1e4e8;
		--color-ansi-white-bright: #e1e4e8;
		--color-ansi-gray: #959da5;
		--color-ansi-red: #f97583;
		--color-ansi-red-bright: #fdaeb7;
		--color-ansi-green: #85e89d;
		--color-ansi-green-bright: #bef5cb;
		--color-ansi-yellow: #ffea7f;
		--color-ansi-yellow-bright: #fff5b1;
		--color-ansi-blue: #79b8ff;
		--color-ansi-blue-bright: #c8e1ff;
		--color-ansi-magenta: #b392f0;
		--color-ansi-magenta-bright: #d1bcf9;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme="light"] {
		--color-scale-black: #1b1f23;
		--color-scale-white: #ffffff;
		--color-scale-gray-0: #fafbfc;
		--color-scale-gray-1: #f6f8fa;
		--color-scale-gray-2: #e1e4e8;
		--color-scale-gray-3: #d1d5da;
		--color-scale-gray-4: #959da5;
		--color-scale-gray-5: #6a737d;
		--color-scale-gray-6: #586069;
		--color-scale-gray-7: #444d56;
		--color-scale-gray-8: #2f363d;
		--color-scale-gray-9: #24292e;
		--color-scale-blue-0: #f1f8ff;
		--color-scale-blue-1: #dbedff;
		--color-scale-blue-2: #c8e1ff;
		--color-scale-blue-3: #79b8ff;
		--color-scale-blue-4: #2188ff;
		--color-scale-blue-5: #0366d6;
		--color-scale-blue-6: #005cc5;
		--color-scale-blue-7: #044289;
		--color-scale-blue-8: #032f62;
		--color-scale-blue-9: #05264c;
		--color-scale-green-0: #f0fff4;
		--color-scale-green-1: #dcffe4;
		--color-scale-green-2: #bef5cb;
		--color-scale-green-3: #85e89d;
		--color-scale-green-4: #34d058;
		--color-scale-green-5: #28a745;
		--color-scale-green-6: #22863a;
		--color-scale-green-7: #176f2c;
		--color-scale-green-8: #165c26;
		--color-scale-green-9: #144620;
		--color-scale-yellow-0: #fffdef;
		--color-scale-yellow-1: #fffbdd;
		--color-scale-yellow-2: #fff5b1;
		--color-scale-yellow-3: #ffea7f;
		--color-scale-yellow-4: #ffdf5d;
		--color-scale-yellow-5: #ffd33d;
		--color-scale-yellow-6: #f9c513;
		--color-scale-yellow-7: #dbab09;
		--color-scale-yellow-8: #b08800;
		--color-scale-yellow-9: #735c0f;
		--color-scale-orange-0: #fff8f2;
		--color-scale-orange-1: #ffebda;
		--color-scale-orange-2: #ffd1ac;
		--color-scale-orange-3: #ffab70;
		--color-scale-orange-4: #fb8532;
		--color-scale-orange-5: #f66a0a;
		--color-scale-orange-6: #e36209;
		--color-scale-orange-7: #d15704;
		--color-scale-orange-8: #c24e00;
		--color-scale-orange-9: #a04100;
		--color-scale-red-0: #ffeef0;
		--color-scale-red-1: #ffdce0;
		--color-scale-red-2: #fdaeb7;
		--color-scale-red-3: #f97583;
		--color-scale-red-4: #ea4a5a;
		--color-scale-red-5: #d73a49;
		--color-scale-red-6: #cb2431;
		--color-scale-red-7: #b31d28;
		--color-scale-red-8: #9e1c23;
		--color-scale-red-9: #86181d;
		--color-scale-purple-0: #f5f0ff;
		--color-scale-purple-1: #e6dcfd;
		--color-scale-purple-2: #d1bcf9;
		--color-scale-purple-3: #b392f0;
		--color-scale-purple-4: #8a63d2;
		--color-scale-purple-5: #6f42c1;
		--color-scale-purple-6: #5a32a3;
		--color-scale-purple-7: #4c2889;
		--color-scale-purple-8: #3a1d6e;
		--color-scale-purple-9: #29134e;
		--color-scale-pink-0: #ffeef8;
		--color-scale-pink-1: #fedbf0;
		--color-scale-pink-2: #f9b3dd;
		--color-scale-pink-3: #f692ce;
		--color-scale-pink-4: #ec6cb9;
		--color-scale-pink-5: #ea4aaa;
		--color-scale-pink-6: #d03592;
		--color-scale-pink-7: #b93a86;
		--color-scale-pink-8: #99306f;
		--color-scale-pink-9: #6d224f;
		--color-auto-black: #1b1f23;
		--color-auto-white: #ffffff;
		--color-auto-gray-0: #fafbfc;
		--color-auto-gray-1: #f6f8fa;
		--color-auto-gray-2: #e1e4e8;
		--color-auto-gray-3: #d1d5da;
		--color-auto-gray-4: #959da5;
		--color-auto-gray-5: #6a737d;
		--color-auto-gray-6: #586069;
		--color-auto-gray-7: #444d56;
		--color-auto-gray-8: #2f363d;
		--color-auto-gray-9: #24292e;
		--color-auto-blue-0: #f1f8ff;
		--color-auto-blue-1: #dbedff;
		--color-auto-blue-2: #c8e1ff;
		--color-auto-blue-3: #79b8ff;
		--color-auto-blue-4: #2188ff;
		--color-auto-blue-5: #0366d6;
		--color-auto-blue-6: #005cc5;
		--color-auto-blue-7: #044289;
		--color-auto-blue-8: #032f62;
		--color-auto-blue-9: #05264c;
		--color-auto-green-0: #f0fff4;
		--color-auto-green-1: #dcffe4;
		--color-auto-green-2: #bef5cb;
		--color-auto-green-3: #85e89d;
		--color-auto-green-4: #34d058;
		--color-auto-green-5: #28a745;
		--color-auto-green-6: #22863a;
		--color-auto-green-7: #176f2c;
		--color-auto-green-8: #165c26;
		--color-auto-green-9: #144620;
		--color-auto-yellow-0: #fffdef;
		--color-auto-yellow-1: #fffbdd;
		--color-auto-yellow-2: #fff5b1;
		--color-auto-yellow-3: #ffea7f;
		--color-auto-yellow-4: #ffdf5d;
		--color-auto-yellow-5: #ffd33d;
		--color-auto-yellow-6: #f9c513;
		--color-auto-yellow-7: #dbab09;
		--color-auto-yellow-8: #b08800;
		--color-auto-yellow-9: #735c0f;
		--color-auto-orange-0: #fff8f2;
		--color-auto-orange-1: #ffebda;
		--color-auto-orange-2: #ffd1ac;
		--color-auto-orange-3: #ffab70;
		--color-auto-orange-4: #fb8532;
		--color-auto-orange-5: #f66a0a;
		--color-auto-orange-6: #e36209;
		--color-auto-orange-7: #d15704;
		--color-auto-orange-8: #c24e00;
		--color-auto-orange-9: #a04100;
		--color-auto-red-0: #ffeef0;
		--color-auto-red-1: #ffdce0;
		--color-auto-red-2: #fdaeb7;
		--color-auto-red-3: #f97583;
		--color-auto-red-4: #ea4a5a;
		--color-auto-red-5: #d73a49;
		--color-auto-red-6: #cb2431;
		--color-auto-red-7: #b31d28;
		--color-auto-red-8: #9e1c23;
		--color-auto-red-9: #86181d;
		--color-auto-purple-0: #f5f0ff;
		--color-auto-purple-1: #e6dcfd;
		--color-auto-purple-2: #d1bcf9;
		--color-auto-purple-3: #b392f0;
		--color-auto-purple-4: #8a63d2;
		--color-auto-purple-5: #6f42c1;
		--color-auto-purple-6: #5a32a3;
		--color-auto-purple-7: #4c2889;
		--color-auto-purple-8: #3a1d6e;
		--color-auto-purple-9: #29134e;
		--color-auto-pink-0: #ffeef8;
		--color-auto-pink-1: #fedbf0;
		--color-auto-pink-2: #f9b3dd;
		--color-auto-pink-3: #f692ce;
		--color-auto-pink-4: #ec6cb9;
		--color-auto-pink-5: #ea4aaa;
		--color-auto-pink-6: #d03592;
		--color-auto-pink-7: #b93a86;
		--color-auto-pink-8: #99306f;
		--color-auto-pink-9: #6d224f;
		--color-text-primary: #24292e;
		--color-text-secondary: #586069;
		--color-text-tertiary: #6a737d;
		--color-text-placeholder: #6a737d;
		--color-text-disabled: #959da5;
		--color-text-inverse: #ffffff;
		--color-text-link: #0366d6;
		--color-text-danger: #cb2431;
		--color-text-success: #22863a;
		--color-text-warning: #b08800;
		--color-text-white: #ffffff;
		--color-icon-primary: #24292e;
		--color-icon-secondary: #586069;
		--color-icon-tertiary: #959da5;
		--color-icon-info: #0366d6;
		--color-icon-danger: #d73a49;
		--color-icon-success: #22863a;
		--color-icon-warning: #b08800;
		--color-border-primary: #e1e4e8;
		--color-border-secondary: #eaecef;
		--color-border-tertiary: #d1d5da;
		--color-border-overlay: #e1e4e8;
		--color-border-inverse: #ffffff;
		--color-border-info: #0366d6;
		--color-border-danger: #d73a49;
		--color-border-success: #34d058;
		--color-border-warning: #f9c513;
		--color-bg-canvas: #ffffff;
		--color-bg-canvas-mobile: #ffffff;
		--color-bg-canvas-inverse: #24292e;
		--color-bg-canvas-inset: #f6f8fa;
		--color-bg-primary: #ffffff;
		--color-bg-secondary: #fafbfc;
		--color-bg-tertiary: #f6f8fa;
		--color-bg-overlay: #ffffff;
		--color-bg-backdrop: rgba(27, 31, 35, 0.5);
		--color-bg-info: #f1f8ff;
		--color-bg-info-inverse: #0366d6;
		--color-bg-danger: #ffeef0;
		--color-bg-danger-inverse: #d73a49;
		--color-bg-success: #dcffe4;
		--color-bg-success-inverse: #28a745;
		--color-bg-warning: #fff5b1;
		--color-bg-warning-inverse: #ffd33d;
		--color-shadow-small: 0 1px 0 rgba(27, 31, 35, 0.04);
		--color-shadow-medium: 0 3px 6px rgba(149, 157, 165, 0.15);
		--color-shadow-large: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-shadow-extra-large: 0 12px 48px rgba(149, 157, 165, 0.3);
		--color-shadow-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.25);
		--color-shadow-inset: inset 0 1px 0 rgba(225, 228, 232, 0.2);
		--color-state-hover-primary-bg: #0366d6;
		--color-state-hover-primary-border: #0366d6;
		--color-state-hover-primary-text: #ffffff;
		--color-state-hover-primary-icon: #ffffff;
		--color-state-hover-secondary-bg: #f6f8fa;
		--color-state-hover-secondary-border: #f6f8fa;
		--color-state-selected-primary-bg: #0366d6;
		--color-state-selected-primary-border: #0366d6;
		--color-state-selected-primary-text: #ffffff;
		--color-state-selected-primary-icon: #ffffff;
		--color-state-focus-border: #0366d6;
		--color-state-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
		--color-fade-fg-10: rgba(27, 31, 35, 0.1);
		--color-fade-fg-15: rgba(27, 31, 35, 0.15);
		--color-fade-fg-30: rgba(27, 31, 35, 0.3);
		--color-fade-fg-50: rgba(27, 31, 35, 0.5);
		--color-fade-fg-70: rgba(27, 31, 35, 0.7);
		--color-fade-fg-85: rgba(27, 31, 35, 0.85);
		--color-fade-black-10: rgba(27, 31, 35, 0.1);
		--color-fade-black-15: rgba(27, 31, 35, 0.15);
		--color-fade-black-30: rgba(27, 31, 35, 0.3);
		--color-fade-black-50: rgba(27, 31, 35, 0.5);
		--color-fade-black-70: rgba(27, 31, 35, 0.7);
		--color-fade-black-85: rgba(27, 31, 35, 0.85);
		--color-fade-white-10: rgba(255, 255, 255, 0.1);
		--color-fade-white-15: rgba(255, 255, 255, 0.15);
		--color-fade-white-30: rgba(255, 255, 255, 0.3);
		--color-fade-white-50: rgba(255, 255, 255, 0.5);
		--color-fade-white-70: rgba(255, 255, 255, 0.7);
		--color-fade-white-85: rgba(255, 255, 255, 0.85);
		--color-alert-info-text: #24292e;
		--color-alert-info-icon: rgba(4, 66, 137, 0.6);
		--color-alert-info-bg: #dbedff;
		--color-alert-info-border: rgba(4, 66, 137, 0.2);
		--color-alert-warn-text: #24292e;
		--color-alert-warn-icon: #b08800;
		--color-alert-warn-bg: #fffbdd;
		--color-alert-warn-border: rgba(176, 136, 0, 0.2);
		--color-alert-error-text: #24292e;
		--color-alert-error-icon: rgba(158, 28, 35, 0.6);
		--color-alert-error-bg: #ffe3e6;
		--color-alert-error-border: rgba(158, 28, 35, 0.2);
		--color-alert-success-text: #24292e;
		--color-alert-success-icon: rgba(23, 111, 44, 0.8);
		--color-alert-success-bg: #dcffe4;
		--color-alert-success-border: rgba(23, 111, 44, 0.2);
		--color-autocomplete-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);
		--color-autocomplete-row-border: #eaecef;
		--color-blankslate-icon: #a3aab1;
		--color-btn-text: #24292e;
		--color-btn-bg: #fafbfc;
		--color-btn-border: rgba(27, 31, 35, 0.15);
		--color-btn-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
		--color-btn-inset-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
		--color-btn-hover-bg: #f3f4f6;
		--color-btn-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-selected-bg: #edeff2;
		--color-btn-focus-bg: #fafbfc;
		--color-btn-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-focus-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(3, 102, 214, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #2ea44f;
		--color-btn-primary-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-primary-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-primary-hover-bg: #2c974b;
		--color-btn-primary-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-selected-bg: #2a8f47;
		--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(20, 70, 32, 0.2);
		--color-btn-primary-disabled-text: rgba(255, 255, 255, 0.8);
		--color-btn-primary-disabled-bg: #94d3a2;
		--color-btn-primary-disabled-border: rgba(27, 31, 35, 0.1);
		--color-btn-primary-focus-bg: #2ea44f;
		--color-btn-primary-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: rgba(255, 255, 255, 0.8);
		--color-btn-primary-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-outline-text: #0366d6;
		--color-btn-outline-hover-text: #ffffff;
		--color-btn-outline-hover-bg: #0366d6;
		--color-btn-outline-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-outline-selected-text: #ffffff;
		--color-btn-outline-selected-bg: #035fc7;
		--color-btn-outline-selected-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(5, 38, 76, 0.2);
		--color-btn-outline-disabled-text: rgba(3, 102, 214, 0.5);
		--color-btn-outline-disabled-bg: #fafbfc;
		--color-btn-outline-disabled-counter-bg: rgba(3, 102, 214, 0.05);
		--color-btn-outline-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(0, 92, 197, 0.4);
		--color-btn-outline-counter-bg: rgba(3, 102, 214, 0.1);
		--color-btn-danger-text: #d73a49;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #cb2431;
		--color-btn-danger-hover-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-hover-shadow: 0 1px 0 rgba(27, 31, 35, 0.1);
		--color-btn-danger-hover-inset-shadow: inset 0 1px 0
			rgba(255, 255, 255, 0.03);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #d42d3d;
		--color-btn-danger-selected-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(134, 24, 29, 0.2);
		--color-btn-danger-disabled-text: rgba(215, 58, 73, 0.5);
		--color-btn-danger-disabled-bg: #fafbfc;
		--color-btn-danger-disabled-counter-bg: rgba(215, 58, 73, 0.05);
		--color-btn-danger-focus-border: rgba(27, 31, 35, 0.15);
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(203, 36, 49, 0.4);
		--color-btn-danger-counter-bg: rgba(215, 58, 73, 0.1);
		--color-btn-danger-icon: #d73a49;
		--color-btn-danger-hover-icon: #ffffff;
		--color-btn-counter-bg: rgba(27, 31, 35, 0.08);
		--color-counter-text: #24292e;
		--color-counter-bg: rgba(209, 213, 218, 0.5);
		--color-counter-primary-text: #ffffff;
		--color-counter-primary-bg: #6a737d;
		--color-counter-secondary-text: #6a737d;
		--color-counter-secondary-bg: rgba(209, 213, 218, 0.5);
		--color-dropdown-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-label-border: #e1e4e8;
		--color-label-primary-text: #24292e;
		--color-label-primary-border: #6a737d;
		--color-label-secondary-text: #586069;
		--color-label-secondary-border: #e1e4e8;
		--color-label-info-text: #0366d6;
		--color-label-info-border: #0366d6;
		--color-label-success-text: #22863a;
		--color-label-success-border: #28a745;
		--color-label-warning-text: #735c0f;
		--color-label-warning-border: #b08800;
		--color-label-danger-text: #d73a49;
		--color-label-danger-border: #cb2431;
		--color-label-orange-text: #c24e00;
		--color-label-orange-border: #f66a0a;
		--color-input-bg: #ffffff;
		--color-input-contrast-bg: #fafbfc;
		--color-input-border: #e1e4e8;
		--color-input-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
		--color-input-disabled-bg: #f6f8fa;
		--color-input-disabled-border: #e1e4e8;
		--color-input-warning-border: #f9c513;
		--color-input-error-border: #cb2431;
		--color-input-tooltip-success-text: #144620;
		--color-input-tooltip-success-bg: #dcffe4;
		--color-input-tooltip-success-border: #34d058;
		--color-input-tooltip-warning-text: #735c0f;
		--color-input-tooltip-warning-bg: #fff5b1;
		--color-input-tooltip-warning-border: #f9c513;
		--color-input-tooltip-error-text: #86181d;
		--color-input-tooltip-error-bg: #ffeef0;
		--color-input-tooltip-error-border: #f97583;
		--color-avatar-bg: #ffffff;
		--color-avatar-border: rgba(0, 0, 0, 0);
		--color-avatar-stack-fade: #d1d5da;
		--color-avatar-stack-fade-more: #e1e4e8;
		--color-avatar-child-shadow: -2px -2px 0 rgba(255, 255, 255, 0.8);
		--color-toast-text: #24292e;
		--color-toast-bg: #ffffff;
		--color-toast-border: #e1e4e8;
		--color-toast-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
		--color-toast-icon: #ffffff;
		--color-toast-icon-bg: #0366d6;
		--color-toast-icon-border: rgba(0, 0, 0, 0);
		--color-toast-success-text: #24292e;
		--color-toast-success-border: #e1e4e8;
		--color-toast-success-icon: #ffffff;
		--color-toast-success-icon-bg: #28a745;
		--color-toast-success-icon-border: rgba(0, 0, 0, 0);
		--color-toast-warning-text: #24292e;
		--color-toast-warning-border: #e1e4e8;
		--color-toast-warning-icon: #24292e;
		--color-toast-warning-icon-bg: #ffd33d;
		--color-toast-warning-icon-border: rgba(0, 0, 0, 0);
		--color-toast-danger-text: #24292e;
		--color-toast-danger-border: #e1e4e8;
		--color-toast-danger-icon: #ffffff;
		--color-toast-danger-icon-bg: #d73a49;
		--color-toast-danger-icon-border: rgba(0, 0, 0, 0);
		--color-toast-loading-text: #24292e;
		--color-toast-loading-border: #e1e4e8;
		--color-toast-loading-icon: #ffffff;
		--color-toast-loading-icon-bg: #586069;
		--color-toast-loading-icon-border: rgba(0, 0, 0, 0);
		--color-timeline-text: #444d56;
		--color-timeline-badge-bg: #e1e4e8;
		--color-timeline-badge-success-border: rgba(0, 0, 0, 0);
		--color-timeline-target-badge-border: #2188ff;
		--color-timeline-target-badge-shadow: #c8e1ff;
		--color-select-menu-border-secondary: #eaecef;
		--color-select-menu-shadow: 0 0 18px rgba(27, 31, 35, 0.4);
		--color-select-menu-backdrop-bg: rgba(27, 31, 35, 0.5);
		--color-select-menu-backdrop-border: rgba(0, 0, 0, 0);
		--color-select-menu-tap-highlight: rgba(209, 213, 218, 0.5);
		--color-select-menu-tap-focus-bg: #dbedff;
		--color-box-blue-border: #c8e1ff;
		--color-box-row-yellow-bg: #fffbdd;
		--color-box-row-blue-bg: #f1f8ff;
		--color-box-header-blue-bg: #f1f8ff;
		--color-box-header-blue-border: #c8e1ff;
		--color-box-border-info: rgba(3, 102, 214, 0.2);
		--color-box-bg-info: #f1f8ff;
		--color-box-border-warning: rgba(255, 211, 61, 0.4);
		--color-box-bg-warning: #fffdef;
		--color-branch-name-text: #586069;
		--color-branch-name-icon: #a8bbd0;
		--color-branch-name-bg: #eaf5ff;
		--color-branch-name-link-text: #0366d6;
		--color-branch-name-link-icon: #a8bbd0;
		--color-branch-name-link-bg: #eaf5ff;
		--color-markdown-code-bg: rgba(27, 31, 35, 0.05);
		--color-markdown-frame-border: #dfe2e5;
		--color-markdown-blockquote-border: #dfe2e5;
		--color-markdown-table-border: #dfe2e5;
		--color-markdown-table-tr-border: #c6cbd1;
		--color-menu-heading-text: #24292e;
		--color-menu-border-active: #f9826c;
		--color-menu-bg-active: rgba(0, 0, 0, 0);
		--color-sidenav-selected-bg: #ffffff;
		--color-sidenav-border-active: #f9826c;
		--color-header-text: rgba(255, 255, 255, 0.7);
		--color-header-bg: #24292e;
		--color-header-logo: #ffffff;
		--color-filter-item-bar-bg: #eff3f6;
		--color-hidden-text-expander-bg: #dfe2e5;
		--color-hidden-text-expander-bg-hover: #c6cbd1;
		--color-drag-and-drop-border: #c3c8cf;
		--color-upload-enabled-border: #dfe2e5;
		--color-upload-enabled-border-focused: #4a9eff;
		--color-previewable-comment-form-border: #c3c8cf;
		--color-underlinenav-border: rgba(209, 213, 218, 0);
		--color-underlinenav-border-hover: #d1d5da;
		--color-underlinenav-border-active: #f9826c;
		--color-underlinenav-text: #24292e;
		--color-underlinenav-text-hover: #24292e;
		--color-underlinenav-text-active: #24292e;
		--color-underlinenav-icon: #959da5;
		--color-underlinenav-icon-hover: #959da5;
		--color-underlinenav-icon-active: #24292e;
		--color-underlinenav-counter-text: #24292e;
		--color-underlinenav-counter-bg: rgba(209, 213, 218, 0.5);
		--color-verified-badge-text: #22863a;
		--color-verified-badge-bg: #ffffff;
		--color-verified-badge-border: #e1e4e8;
		--color-social-count-bg: #ffffff;
		--color-tooltip-text: #ffffff;
		--color-tooltip-bg: #24292e;
		--color-header-search-bg: #24292e;
		--color-header-search-border: #444d56;
		--color-search-keyword-hl: #fffbdd;
		--color-diffstat-neutral-bg: #d1d5da;
		--color-diffstat-neutral-border: #d1d5da;
		--color-diffstat-deletion-bg: #d73a49;
		--color-diffstat-deletion-border: #d73a49;
		--color-diffstat-addition-bg: #28a745;
		--color-diffstat-addition-border: #28a745;
		--color-mktg-success: #2ebc4f;
		--color-mktg-info: #1074e7;
		--color-mktg-bg-shade-gradient-top: rgba(27, 31, 35, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(27, 31, 35, 0);
		--color-mktg-btn-bg: #3076df;
		--color-mktg-btn-border: #3076df;
		--color-mktg-btn-text: #ffffff;
		--color-mktg-btn-icon: #ffffff;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(48, 118, 223, 0.3);
		--color-mktg-btn-hover-bg: #0366d6;
		--color-mktg-btn-hover-border: #0366d6;
		--color-mktg-btn-disabled-bg: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: #ffffff;
		--color-mktg-btn-disabled-icon: #ffffff;
		--color-mktg-btn-primary-bg: #5eb85c;
		--color-mktg-btn-primary-border: #5eb85c;
		--color-mktg-btn-primary-text: #ffffff;
		--color-mktg-btn-primary-icon: #ffffff;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(94, 184, 92, 0.3);
		--color-mktg-btn-primary-hover-bg: #28a745;
		--color-mktg-btn-primary-hover-border: #28a745;
		--color-mktg-btn-primary-disabled-bg: rgba(94, 184, 92, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: #ffffff;
		--color-mktg-btn-primary-disabled-icon: #ffffff;
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(42, 103, 195, 0.5);
		--color-mktg-btn-outline-text: #3076df;
		--color-mktg-btn-outline-icon: #3076df;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(42, 103, 195, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #0366d6;
		--color-mktg-btn-outline-hover-text: #0366d6;
		--color-mktg-btn-outline-hover-icon: #0366d6;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(42, 103, 195, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(48, 118, 223, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(255, 255, 255, 0.5);
		--color-mktg-btn-dark-text: #ffffff;
		--color-mktg-btn-dark-icon: #ffffff;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
		--color-mktg-btn-dark-hover-bg: #ffffff;
		--color-mktg-btn-dark-hover-border: #ffffff;
		--color-mktg-btn-dark-hover-text: #444d56;
		--color-mktg-btn-dark-hover-icon: #444d56;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(255, 255, 255, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(255, 255, 255, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(255, 255, 255, 0.5);
		--color-files-explorer-icon: #79b8ff;
		--color-hl-author-bg: #f1f8ff;
		--color-hl-author-border: #c8e1ff;
		--color-logo-subdued: #d1d5da;
		--color-discussion-border: #a2cbac;
		--color-discussion-bg-success: #28a745;
		--color-actions-workflow-table-sticky-bg: rgba(255, 255, 255, 0.95);
		--color-repo-language-color-border: rgba(27, 31, 35, 0.1);
		--color-code-selection-bg: #c8e1ff;
		--color-highlight-text: #442c12;
		--color-highlight-bg: #fff0bb;
		--color-blob-line-highlight-bg: #fffbdd;
		--color-blob-line-highlight-border: rgba(0, 0, 0, 0);
		--color-diff-addition-text: #22863a;
		--color-diff-addition-bg: #e6ffed;
		--color-diff-addition-border: #34d058;
		--color-diff-deletion-text: #cb2431;
		--color-diff-deletion-bg: #ffeef0;
		--color-diff-deletion-border: #d73a49;
		--color-diff-change-text: #b08800;
		--color-diff-change-bg: #fff5b1;
		--color-diff-change-border: #f9c513;
		--color-diff-blob-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-addition-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-addition-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-addition-num-bg: #cdffd8;
		--color-diff-blob-addition-line-bg: #e6ffed;
		--color-diff-blob-addition-word-bg: #acf2bd;
		--color-diff-blob-deletion-num-text: rgba(27, 31, 35, 0.3);
		--color-diff-blob-deletion-num-hover-text: rgba(27, 31, 35, 0.6);
		--color-diff-blob-deletion-num-bg: #ffdce0;
		--color-diff-blob-deletion-line-bg: #ffeef0;
		--color-diff-blob-deletion-word-bg: #fdb8c0;
		--color-diff-blob-hunk-text: rgba(27, 31, 35, 0.7);
		--color-diff-blob-hunk-num-bg: #dbedff;
		--color-diff-blob-hunk-line-bg: #f1f8ff;
		--color-diff-blob-empty-block-bg: #fafbfc;
		--color-diff-blob-selected-line-highlight-bg: rgba(255, 223, 93, 0.2);
		--color-diff-blob-selected-line-highlight-border: #ffd33d;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;
		--color-diff-blob-expander-icon: #586069;
		--color-diff-blob-expander-hover-icon: #ffffff;
		--color-diff-blob-expander-hover-bg: #0366d6;
		--color-diff-blob-comment-button-icon: #ffffff;
		--color-diff-blob-comment-button-bg: #0366d6;
		--color-diff-blob-comment-button-gradient-bg: #0372ef;
		--color-global-nav-logo: #ffffff;
		--color-global-nav-bg: #24292e;
		--color-global-nav-text: #ffffff;
		--color-global-nav-icon: #ffffff;
		--color-global-nav-input-bg: #fafbfc;
		--color-global-nav-input-border: #fafbfc;
		--color-global-nav-input-icon: #d1d5da;
		--color-global-nav-input-placeholder: #959da5;
		--color-calendar-graph-day-bg: #ebedf0;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #9be9a8;
		--color-calendar-graph-day-L2-bg: #40c463;
		--color-calendar-graph-day-L3-bg: #30a14e;
		--color-calendar-graph-day-L4-bg: #216e39;
		--color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
		--color-footer-invertocat-octicon: #d1d5da;
		--color-footer-invertocat-octicon-hover: #6a737d;
		--color-pr-state-draft-text: #ffffff;
		--color-pr-state-draft-bg: #6a737d;
		--color-pr-state-draft-border: rgba(0, 0, 0, 0);
		--color-pr-state-open-text: #ffffff;
		--color-pr-state-open-bg: #28a745;
		--color-pr-state-open-border: rgba(0, 0, 0, 0);
		--color-pr-state-merged-text: #ffffff;
		--color-pr-state-merged-bg: #6f42c1;
		--color-pr-state-merged-border: rgba(0, 0, 0, 0);
		--color-pr-state-closed-text: #ffffff;
		--color-pr-state-closed-bg: #d73a49;
		--color-pr-state-closed-border: rgba(0, 0, 0, 0);
		--color-topic-tag-text: #0366d6;
		--color-topic-tag-bg: #f1f8ff;
		--color-topic-tag-hover-bg: #ddeeff;
		--color-topic-tag-active-bg: #e7f3ff;
		--color-merge-box-success-icon-bg: #28a745;
		--color-merge-box-success-icon-text: #ffffff;
		--color-merge-box-success-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-success-indicator-bg: #28a745;
		--color-merge-box-success-indicator-border: rgba(0, 0, 0, 0);
		--color-merge-box-merged-icon-bg: #6f42c1;
		--color-merge-box-merged-icon-text: #ffffff;
		--color-merge-box-merged-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-merged-box-border: #6f42c1;
		--color-merge-box-neutral-icon-bg: #6a737d;
		--color-merge-box-neutral-icon-text: #ffffff;
		--color-merge-box-neutral-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-neutral-indicator-bg: #6a737d;
		--color-merge-box-neutral-indicator-border: rgba(0, 0, 0, 0);
		--color-merge-box-warning-icon-bg: #dbab09;
		--color-merge-box-warning-icon-text: #ffffff;
		--color-merge-box-warning-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-warning-box-border: #ffd33d;
		--color-merge-box-warning-merge-highlight: rgba(0, 0, 0, 0);
		--color-merge-box-error-icon-bg: #d73a49;
		--color-merge-box-error-icon-text: #ffffff;
		--color-merge-box-error-icon-border: rgba(0, 0, 0, 0);
		--color-merge-box-error-indicator-bg: #d73a49;
		--color-merge-box-error-indicator-border: rgba(0, 0, 0, 0);
		--color-project-card-bg: #ffffff;
		--color-project-header-bg: #24292e;
		--color-project-sidebar-bg: #ffffff;
		--color-project-gradient-in: #ffffff;
		--color-project-gradient-out: rgba(255, 255, 255, 0);
		--color-checks-bg: #24292e;
		--color-checks-run-border-width: 0px;
		--color-checks-container-border-width: 0px;
		--color-checks-text-primary: #fafbfc;
		--color-checks-text-secondary: #959da5;
		--color-checks-text-link: #79b8ff;
		--color-checks-btn-icon: #d1d5da;
		--color-checks-btn-hover-icon: #fafbfc;
		--color-checks-btn-hover-bg: rgba(255, 255, 255, 0.125);
		--color-checks-input-text: #f6f8fa;
		--color-checks-input-placeholder-text: #959da5;
		--color-checks-input-focus-text: #959da5;
		--color-checks-input-bg: #2f363d;
		--color-checks-input-shadow: none;
		--color-checks-dropdown-text: #d1d5da;
		--color-checks-dropdown-bg: #2f363d;
		--color-checks-dropdown-border: #444d56;
		--color-checks-dropdown-hover-text: #fafbfc;
		--color-checks-dropdown-hover-bg: #444d56;
		--color-checks-dropdown-btn-hover-text: #fafbfc;
		--color-checks-dropdown-btn-hover-bg: #2f363d;
		--color-checks-scrollbar-thumb-bg: #586069;
		--color-checks-header-label-text: #e1e4e8;
		--color-checks-header-label-open-text: #fafbfc;
		--color-checks-header-border: #2f363d;
		--color-checks-header-icon: #959da5;
		--color-checks-line-text: #e1e4e8;
		--color-checks-line-num-text: rgba(149, 157, 165, 0.75);
		--color-checks-line-timestamp-text: #959da5;
		--color-checks-line-hover-bg: #2f363d;
		--color-checks-line-selected-bg: rgba(33, 136, 255, 0.15);
		--color-checks-line-selected-num-text: #79b8ff;
		--color-checks-line-dt-fm-text: #24292e;
		--color-checks-line-dt-fm-bg: #ffd33d;
		--color-checks-gate-bg: rgba(249, 197, 19, 0.15);
		--color-checks-gate-text: #e1e4e8;
		--color-checks-gate-waiting-text: #d1d5da;
		--color-checks-step-header-open-bg: #2f363d;
		--color-checks-step-error-text: #f97583;
		--color-checks-step-warning-text: #ffea7f;
		--color-checks-logline-text: #959da5;
		--color-checks-logline-num-text: rgba(149, 157, 165, 0.75);
		--color-checks-logline-debug-text: #b392f0;
		--color-checks-logline-error-text: #e1e4e8;
		--color-checks-logline-error-num-text: #f97583;
		--color-checks-logline-error-bg: rgba(203, 36, 49, 0.15);
		--color-checks-logline-warning-text: #e1e4e8;
		--color-checks-logline-warning-num-text: #ffea7f;
		--color-checks-logline-warning-bg: rgba(249, 197, 19, 0.15);
		--color-checks-logline-command-text: #79b8ff;
		--color-checks-logline-section-text: #85e89d;
		--color-intro-shelf-gradient-left: #f1f8ff;
		--color-intro-shelf-gradient-right: #dcffe4;
		--color-intro-shelf-gradient-in: #ffffff;
		--color-intro-shelf-gradient-out: rgba(255, 255, 255, 0);
		--color-marketing-icon-primary: #2188ff;
		--color-marketing-icon-secondary: #79b8ff;
		--color-prettylights-syntax-comment: #6a737d;
		--color-prettylights-syntax-constant: #005cc5;
		--color-prettylights-syntax-entity: #6f42c1;
		--color-prettylights-syntax-storage-modifier-import: #24292e;
		--color-prettylights-syntax-entity-tag: #22863a;
		--color-prettylights-syntax-keyword: #d73a49;
		--color-prettylights-syntax-string: #032f62;
		--color-prettylights-syntax-variable: #e36209;
		--color-prettylights-syntax-brackethighlighter-unmatched: #b31d28;
		--color-prettylights-syntax-invalid-illegal-text: #fafbfc;
		--color-prettylights-syntax-invalid-illegal-bg: #b31d28;
		--color-prettylights-syntax-carriage-return-text: #fafbfc;
		--color-prettylights-syntax-carriage-return-bg: #d73a49;
		--color-prettylights-syntax-string-regexp: #22863a;
		--color-prettylights-syntax-markup-list: #735c0f;
		--color-prettylights-syntax-markup-heading: #005cc5;
		--color-prettylights-syntax-markup-italic: #24292e;
		--color-prettylights-syntax-markup-bold: #24292e;
		--color-prettylights-syntax-markup-deleted-text: #b31d28;
		--color-prettylights-syntax-markup-deleted-bg: #ffeef0;
		--color-prettylights-syntax-markup-inserted-text: #22863a;
		--color-prettylights-syntax-markup-inserted-bg: #f0fff4;
		--color-prettylights-syntax-markup-changed-text: #e36209;
		--color-prettylights-syntax-markup-changed-bg: #ffebda;
		--color-prettylights-syntax-markup-ignored-text: #f6f8fa;
		--color-prettylights-syntax-markup-ignored-bg: #005cc5;
		--color-prettylights-syntax-meta-diff-range: #6f42c1;
		--color-prettylights-syntax-brackethighlighter-angle: #586069;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #959da5;
		--color-prettylights-syntax-constant-other-reference-link: #032f62;
		--color-codemirror-text: #24292e;
		--color-codemirror-bg: #ffffff;
		--color-codemirror-gutters-bg: #ffffff;
		--color-codemirror-guttermarker-text: #ffffff;
		--color-codemirror-guttermarker-subtle-text: #d1d5da;
		--color-codemirror-linenumber-text: #959da5;
		--color-codemirror-cursor: #24292e;
		--color-codemirror-selection-bg: #c8e1ff;
		--color-codemirror-activeline-bg: #fafbfc;
		--color-codemirror-matchingbracket-text: #24292e;
		--color-codemirror-lines-bg: #ffffff;
		--color-codemirror-syntax-comment: #6a737d;
		--color-codemirror-syntax-constant: #005cc5;
		--color-codemirror-syntax-entity: #6f42c1;
		--color-codemirror-syntax-keyword: #d73a49;
		--color-codemirror-syntax-storage: #d73a49;
		--color-codemirror-syntax-string: #032f62;
		--color-codemirror-syntax-support: #005cc5;
		--color-codemirror-syntax-variable: #e36209;
		--color-ansi-black: #24292e;
		--color-ansi-black-bright: #2f363d;
		--color-ansi-white: #e1e4e8;
		--color-ansi-white-bright: #e1e4e8;
		--color-ansi-gray: #959da5;
		--color-ansi-red: #f97583;
		--color-ansi-red-bright: #fdaeb7;
		--color-ansi-green: #85e89d;
		--color-ansi-green-bright: #bef5cb;
		--color-ansi-yellow: #ffea7f;
		--color-ansi-yellow-bright: #fff5b1;
		--color-ansi-blue: #79b8ff;
		--color-ansi-blue-bright: #c8e1ff;
		--color-ansi-magenta: #b392f0;
		--color-ansi-magenta-bright: #d1bcf9;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
[data-color-mode="light"][data-light-theme="dark"],
[data-color-mode="dark"][data-dark-theme="dark"] {
	--color-scale-black: #010409;
	--color-scale-white: #f0f6fc;
	--color-scale-gray-0: #f0f6fc;
	--color-scale-gray-1: #c9d1d9;
	--color-scale-gray-2: #b1bac4;
	--color-scale-gray-3: #8b949e;
	--color-scale-gray-4: #6e7681;
	--color-scale-gray-5: #484f58;
	--color-scale-gray-6: #30363d;
	--color-scale-gray-7: #21262d;
	--color-scale-gray-8: #161b22;
	--color-scale-gray-9: #0d1117;
	--color-scale-blue-0: #cae8ff;
	--color-scale-blue-1: #a5d6ff;
	--color-scale-blue-2: #79c0ff;
	--color-scale-blue-3: #58a6ff;
	--color-scale-blue-4: #388bfd;
	--color-scale-blue-5: #1f6feb;
	--color-scale-blue-6: #1158c7;
	--color-scale-blue-7: #0d419d;
	--color-scale-blue-8: #0c2d6b;
	--color-scale-blue-9: #051d4d;
	--color-scale-green-0: #aff5b4;
	--color-scale-green-1: #7ee787;
	--color-scale-green-2: #56d364;
	--color-scale-green-3: #3fb950;
	--color-scale-green-4: #2ea043;
	--color-scale-green-5: #238636;
	--color-scale-green-6: #196c2e;
	--color-scale-green-7: #0f5323;
	--color-scale-green-8: #033a16;
	--color-scale-green-9: #04260f;
	--color-scale-yellow-0: #f8e3a1;
	--color-scale-yellow-1: #f2cc60;
	--color-scale-yellow-2: #e3b341;
	--color-scale-yellow-3: #d29922;
	--color-scale-yellow-4: #bb8009;
	--color-scale-yellow-5: #9e6a03;
	--color-scale-yellow-6: #845306;
	--color-scale-yellow-7: #693e00;
	--color-scale-yellow-8: #4b2900;
	--color-scale-yellow-9: #341a00;
	--color-scale-orange-0: #ffdfb6;
	--color-scale-orange-1: #ffc680;
	--color-scale-orange-2: #ffa657;
	--color-scale-orange-3: #f0883e;
	--color-scale-orange-4: #db6d28;
	--color-scale-orange-5: #bd561d;
	--color-scale-orange-6: #9b4215;
	--color-scale-orange-7: #762d0a;
	--color-scale-orange-8: #5a1e02;
	--color-scale-orange-9: #3d1300;
	--color-scale-red-0: #ffdcd7;
	--color-scale-red-1: #ffc1ba;
	--color-scale-red-2: #ffa198;
	--color-scale-red-3: #ff7b72;
	--color-scale-red-4: #f85149;
	--color-scale-red-5: #da3633;
	--color-scale-red-6: #b62324;
	--color-scale-red-7: #8e1519;
	--color-scale-red-8: #67060c;
	--color-scale-red-9: #490202;
	--color-scale-purple-0: #eddeff;
	--color-scale-purple-1: #e2c5ff;
	--color-scale-purple-2: #d2a8ff;
	--color-scale-purple-3: #bc8cff;
	--color-scale-purple-4: #a371f7;
	--color-scale-purple-5: #8957e5;
	--color-scale-purple-6: #6e40c9;
	--color-scale-purple-7: #553098;
	--color-scale-purple-8: #3c1e70;
	--color-scale-purple-9: #271052;
	--color-scale-pink-0: #ffdaec;
	--color-scale-pink-1: #ffbedd;
	--color-scale-pink-2: #ff9bce;
	--color-scale-pink-3: #f778ba;
	--color-scale-pink-4: #db61a2;
	--color-scale-pink-5: #bf4b8a;
	--color-scale-pink-6: #9e3670;
	--color-scale-pink-7: #7d2457;
	--color-scale-pink-8: #5e103e;
	--color-scale-pink-9: #42062a;
	--color-auto-black: #f0f6fc;
	--color-auto-white: #010409;
	--color-auto-gray-0: #0d1117;
	--color-auto-gray-1: #161b22;
	--color-auto-gray-2: #21262d;
	--color-auto-gray-3: #30363d;
	--color-auto-gray-4: #484f58;
	--color-auto-gray-5: #6e7681;
	--color-auto-gray-6: #8b949e;
	--color-auto-gray-7: #b1bac4;
	--color-auto-gray-8: #c9d1d9;
	--color-auto-gray-9: #f0f6fc;
	--color-auto-blue-0: #051d4d;
	--color-auto-blue-1: #0c2d6b;
	--color-auto-blue-2: #0d419d;
	--color-auto-blue-3: #1158c7;
	--color-auto-blue-4: #1f6feb;
	--color-auto-blue-5: #388bfd;
	--color-auto-blue-6: #58a6ff;
	--color-auto-blue-7: #79c0ff;
	--color-auto-blue-8: #a5d6ff;
	--color-auto-blue-9: #cae8ff;
	--color-auto-green-0: #04260f;
	--color-auto-green-1: #033a16;
	--color-auto-green-2: #0f5323;
	--color-auto-green-3: #196c2e;
	--color-auto-green-4: #238636;
	--color-auto-green-5: #2ea043;
	--color-auto-green-6: #3fb950;
	--color-auto-green-7: #56d364;
	--color-auto-green-8: #7ee787;
	--color-auto-green-9: #aff5b4;
	--color-auto-yellow-0: #341a00;
	--color-auto-yellow-1: #4b2900;
	--color-auto-yellow-2: #693e00;
	--color-auto-yellow-3: #845306;
	--color-auto-yellow-4: #9e6a03;
	--color-auto-yellow-5: #bb8009;
	--color-auto-yellow-6: #d29922;
	--color-auto-yellow-7: #e3b341;
	--color-auto-yellow-8: #f2cc60;
	--color-auto-yellow-9: #f8e3a1;
	--color-auto-orange-0: #3d1300;
	--color-auto-orange-1: #5a1e02;
	--color-auto-orange-2: #762d0a;
	--color-auto-orange-3: #9b4215;
	--color-auto-orange-4: #bd561d;
	--color-auto-orange-5: #db6d28;
	--color-auto-orange-6: #f0883e;
	--color-auto-orange-7: #ffa657;
	--color-auto-orange-8: #ffc680;
	--color-auto-orange-9: #ffdfb6;
	--color-auto-red-0: #490202;
	--color-auto-red-1: #67060c;
	--color-auto-red-2: #8e1519;
	--color-auto-red-3: #b62324;
	--color-auto-red-4: #da3633;
	--color-auto-red-5: #f85149;
	--color-auto-red-6: #ff7b72;
	--color-auto-red-7: #ffa198;
	--color-auto-red-8: #ffc1ba;
	--color-auto-red-9: #ffdcd7;
	--color-auto-purple-0: #271052;
	--color-auto-purple-1: #3c1e70;
	--color-auto-purple-2: #553098;
	--color-auto-purple-3: #6e40c9;
	--color-auto-purple-4: #8957e5;
	--color-auto-purple-5: #a371f7;
	--color-auto-purple-6: #bc8cff;
	--color-auto-purple-7: #d2a8ff;
	--color-auto-purple-8: #e2c5ff;
	--color-auto-purple-9: #eddeff;
	--color-auto-pink-0: #42062a;
	--color-auto-pink-1: #5e103e;
	--color-auto-pink-2: #7d2457;
	--color-auto-pink-3: #9e3670;
	--color-auto-pink-4: #bf4b8a;
	--color-auto-pink-5: #db61a2;
	--color-auto-pink-6: #f778ba;
	--color-auto-pink-7: #ff9bce;
	--color-auto-pink-8: #ffbedd;
	--color-auto-pink-9: #ffdaec;
	--color-text-primary: #c9d1d9;
	--color-text-secondary: #8b949e;
	--color-text-tertiary: #8b949e;
	--color-text-placeholder: #484f58;
	--color-text-disabled: #484f58;
	--color-text-inverse: #0d1117;
	--color-text-link: #58a6ff;
	--color-text-danger: #f85149;
	--color-text-success: #56d364;
	--color-text-warning: #e3b341;
	--color-text-white: #f0f6fc;
	--color-icon-primary: #c9d1d9;
	--color-icon-secondary: #6e7681;
	--color-icon-tertiary: #484f58;
	--color-icon-info: #79c0ff;
	--color-icon-danger: #f85149;
	--color-icon-success: #56d364;
	--color-icon-warning: #e3b341;
	--color-border-primary: #30363d;
	--color-border-secondary: #21262d;
	--color-border-tertiary: #6e7681;
	--color-border-overlay: #30363d;
	--color-border-inverse: #f0f6fc;
	--color-border-info: rgba(56, 139, 253, 0.4);
	--color-border-danger: rgba(248, 81, 73, 0.4);
	--color-border-success: rgba(63, 185, 80, 0.4);
	--color-border-warning: rgba(187, 128, 9, 0.4);
	--color-bg-canvas: #0d1117;
	--color-bg-canvas-mobile: #010409;
	--color-bg-canvas-inverse: #f0f6fc;
	--color-bg-canvas-inset: #090c10;
	--color-bg-primary: #0d1117;
	--color-bg-secondary: #0d1117;
	--color-bg-tertiary: #161b22;
	--color-bg-overlay: #21262d;
	--color-bg-backdrop: rgba(1, 4, 9, 0.8);
	--color-bg-info: rgba(56, 139, 253, 0.1);
	--color-bg-info-inverse: #388bfd;
	--color-bg-danger: rgba(248, 81, 73, 0.1);
	--color-bg-danger-inverse: #da3633;
	--color-bg-success: rgba(46, 160, 67, 0.1);
	--color-bg-success-inverse: #2ea043;
	--color-bg-warning: rgba(187, 128, 9, 0.1);
	--color-bg-warning-inverse: #bb8009;
	--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
	--color-shadow-medium: 0 3px 6px #010409;
	--color-shadow-large: 0 8px 24px #010409;
	--color-shadow-extra-large: 0 12px 48px #010409;
	--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
	--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
	--color-state-hover-primary-bg: #1f6feb;
	--color-state-hover-primary-border: #388bfd;
	--color-state-hover-primary-text: #f0f6fc;
	--color-state-hover-primary-icon: #f0f6fc;
	--color-state-hover-secondary-bg: #161b22;
	--color-state-hover-secondary-border: #161b22;
	--color-state-selected-primary-bg: #1f6feb;
	--color-state-selected-primary-border: #388bfd;
	--color-state-selected-primary-text: #f0f6fc;
	--color-state-selected-primary-icon: #f0f6fc;
	--color-state-focus-border: #388bfd;
	--color-state-focus-shadow: 0 0 0 3px #0c2d6b;
	--color-fade-fg-10: rgba(240, 246, 252, 0.1);
	--color-fade-fg-15: rgba(240, 246, 252, 0.15);
	--color-fade-fg-30: rgba(240, 246, 252, 0.3);
	--color-fade-fg-50: rgba(240, 246, 252, 0.5);
	--color-fade-fg-70: rgba(240, 246, 252, 0.7);
	--color-fade-fg-85: rgba(240, 246, 252, 0.85);
	--color-fade-black-10: rgba(1, 4, 9, 0.1);
	--color-fade-black-15: rgba(1, 4, 9, 0.15);
	--color-fade-black-30: rgba(1, 4, 9, 0.3);
	--color-fade-black-50: rgba(1, 4, 9, 0.5);
	--color-fade-black-70: rgba(1, 4, 9, 0.7);
	--color-fade-black-85: rgba(1, 4, 9, 0.85);
	--color-fade-white-10: rgba(240, 246, 252, 0.1);
	--color-fade-white-15: rgba(240, 246, 252, 0.15);
	--color-fade-white-30: rgba(240, 246, 252, 0.3);
	--color-fade-white-50: rgba(240, 246, 252, 0.5);
	--color-fade-white-70: rgba(240, 246, 252, 0.7);
	--color-fade-white-85: rgba(240, 246, 252, 0.85);
	--color-alert-info-text: #79c0ff;
	--color-alert-info-icon: #79c0ff;
	--color-alert-info-bg: rgba(56, 139, 253, 0.1);
	--color-alert-info-border: rgba(56, 139, 253, 0.4);
	--color-alert-warn-text: #e3b341;
	--color-alert-warn-icon: #e3b341;
	--color-alert-warn-bg: rgba(187, 128, 9, 0.1);
	--color-alert-warn-border: rgba(187, 128, 9, 0.4);
	--color-alert-error-text: #ff7b72;
	--color-alert-error-icon: #ff7b72;
	--color-alert-error-bg: rgba(248, 81, 73, 0.1);
	--color-alert-error-border: rgba(248, 81, 73, 0.4);
	--color-alert-success-text: #56d364;
	--color-alert-success-icon: #56d364;
	--color-alert-success-bg: rgba(46, 160, 67, 0.1);
	--color-alert-success-border: rgba(46, 160, 67, 0.4);
	--color-autocomplete-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
	--color-autocomplete-row-border: #30363d;
	--color-blankslate-icon: #535c66;
	--color-btn-text: #c9d1d9;
	--color-btn-bg: #21262d;
	--color-btn-border: #30363d;
	--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-hover-bg: #30363d;
	--color-btn-hover-border: #8b949e;
	--color-btn-selected-bg: #161b22;
	--color-btn-focus-bg: #21262d;
	--color-btn-focus-border: #8b949e;
	--color-btn-focus-shadow: 0 0 0 3px rgba(139, 148, 158, 0.3);
	--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(1, 4, 9, 0.15);
	--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(31, 111, 235, 0.3);
	--color-btn-primary-text: #ffffff;
	--color-btn-primary-bg: #238636;
	--color-btn-primary-border: #2ea043;
	--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-hover-bg: #2ea043;
	--color-btn-primary-hover-border: #3fb950;
	--color-btn-primary-selected-bg: #238636;
	--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
	--color-btn-primary-disabled-bg: rgba(35, 134, 54, 0.6);
	--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
	--color-btn-primary-focus-bg: #238636;
	--color-btn-primary-focus-border: #3fb950;
	--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
	--color-btn-primary-icon: #f0f6fc;
	--color-btn-primary-counter-bg: rgba(240, 246, 252, 0.2);
	--color-btn-outline-text: #58a6ff;
	--color-btn-outline-hover-text: #58a6ff;
	--color-btn-outline-hover-bg: #30363d;
	--color-btn-outline-hover-border: #58a6ff;
	--color-btn-outline-hover-shadow: 0 1px 0 rgba(1, 4, 9, 0.1);
	--color-btn-outline-hover-inset-shadow: inset 0 1px 0
		rgba(240, 246, 252, 0.03);
	--color-btn-outline-hover-counter-bg: rgba(240, 246, 252, 0.2);
	--color-btn-outline-selected-text: #f0f6fc;
	--color-btn-outline-selected-bg: #0d419d;
	--color-btn-outline-selected-border: rgba(240, 246, 252, 0.1);
	--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-outline-disabled-text: rgba(88, 166, 255, 0.5);
	--color-btn-outline-disabled-bg: #0d1117;
	--color-btn-outline-disabled-counter-bg: rgba(31, 111, 235, 0.05);
	--color-btn-outline-focus-border: #58a6ff;
	--color-btn-outline-focus-shadow: 0 0 0 3px rgba(17, 88, 199, 0.4);
	--color-btn-outline-counter-bg: rgba(31, 111, 235, 0.1);
	--color-btn-danger-text: #f85149;
	--color-btn-danger-hover-text: #ffffff;
	--color-btn-danger-hover-bg: #da3633;
	--color-btn-danger-hover-border: #f85149;
	--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-danger-selected-text: #ffffff;
	--color-btn-danger-selected-bg: #b62324;
	--color-btn-danger-selected-border: rgba(240, 246, 252, 0.1);
	--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-disabled-text: rgba(248, 81, 73, 0.5);
	--color-btn-danger-disabled-bg: #0d1117;
	--color-btn-danger-disabled-counter-bg: rgba(218, 54, 51, 0.05);
	--color-btn-danger-focus-border: #f85149;
	--color-btn-danger-focus-shadow: 0 0 0 3px rgba(182, 35, 36, 0.4);
	--color-btn-danger-counter-bg: rgba(218, 54, 51, 0.1);
	--color-btn-danger-icon: #f85149;
	--color-btn-danger-hover-icon: #f0f6fc;
	--color-btn-counter-bg: #30363d;
	--color-counter-text: #c9d1d9;
	--color-counter-bg: #30363d;
	--color-counter-primary-text: #c9d1d9;
	--color-counter-primary-bg: #6e7681;
	--color-counter-secondary-text: #8b949e;
	--color-counter-secondary-bg: rgba(139, 148, 158, 0.2);
	--color-dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
	--color-label-border: #30363d;
	--color-label-primary-text: #b1bac4;
	--color-label-primary-border: #6e7681;
	--color-label-secondary-text: #8b949e;
	--color-label-secondary-border: #30363d;
	--color-label-info-text: #388bfd;
	--color-label-info-border: rgba(56, 139, 253, 0.4);
	--color-label-success-text: #3fb950;
	--color-label-success-border: rgba(46, 160, 67, 0.4);
	--color-label-warning-text: #e3b341;
	--color-label-warning-border: rgba(242, 211, 91, 0.4);
	--color-label-danger-text: #f85149;
	--color-label-danger-border: rgba(248, 81, 73, 0.4);
	--color-label-orange-text: #db6d28;
	--color-label-orange-border: rgba(219, 109, 40, 0.4);
	--color-input-bg: #0d1117;
	--color-input-contrast-bg: rgba(1, 4, 9, 0.5);
	--color-input-border: #21262d;
	--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-input-disabled-bg: #161b22;
	--color-input-disabled-border: #30363d;
	--color-input-warning-border: #d29922;
	--color-input-error-border: #f85149;
	--color-input-tooltip-success-text: #56d364;
	--color-input-tooltip-success-bg: #101f1b;
	--color-input-tooltip-success-border: #1c532b;
	--color-input-tooltip-warning-text: #e3b341;
	--color-input-tooltip-warning-bg: #1e1c16;
	--color-input-tooltip-warning-border: #5d4411;
	--color-input-tooltip-error-text: #ff7b72;
	--color-input-tooltip-error-bg: #25171c;
	--color-input-tooltip-error-border: #792e2e;
	--color-avatar-bg: rgba(240, 246, 252, 0.1);
	--color-avatar-border: rgba(240, 246, 252, 0.1);
	--color-avatar-stack-fade: #30363d;
	--color-avatar-stack-fade-more: #21262d;
	--color-avatar-child-shadow: -2px -2px 0 #0d1117;
	--color-toast-text: #c9d1d9;
	--color-toast-bg: #30363d;
	--color-toast-border: #6e7681;
	--color-toast-shadow: 0 8px 24px #010409;
	--color-toast-icon: #f0f6fc;
	--color-toast-icon-bg: #1f6feb;
	--color-toast-icon-border: #388bfd;
	--color-toast-success-text: #c9d1d9;
	--color-toast-success-border: #6e7681;
	--color-toast-success-icon: #f0f6fc;
	--color-toast-success-icon-bg: #2ea043;
	--color-toast-success-icon-border: #3fb950;
	--color-toast-warning-text: #c9d1d9;
	--color-toast-warning-border: #6e7681;
	--color-toast-warning-icon: #f0f6fc;
	--color-toast-warning-icon-bg: #bb8009;
	--color-toast-warning-icon-border: #d29922;
	--color-toast-danger-text: #c9d1d9;
	--color-toast-danger-border: #6e7681;
	--color-toast-danger-icon: #f0f6fc;
	--color-toast-danger-icon-bg: #da3633;
	--color-toast-danger-icon-border: #f85149;
	--color-toast-loading-text: #c9d1d9;
	--color-toast-loading-border: #6e7681;
	--color-toast-loading-icon: #f0f6fc;
	--color-toast-loading-icon-bg: #6e7681;
	--color-toast-loading-icon-border: #8b949e;
	--color-timeline-text: #b1bac4;
	--color-timeline-badge-bg: #0d1117;
	--color-timeline-badge-success-border: #2ea043;
	--color-timeline-target-badge-border: #1f6feb;
	--color-timeline-target-badge-shadow: #0d419d;
	--color-select-menu-border-secondary: #30363d;
	--color-select-menu-shadow: 0 0 18px rgba(1, 4, 9, 0.4);
	--color-select-menu-backdrop-bg: rgba(1, 4, 9, 0.5);
	--color-select-menu-backdrop-border: #484f58;
	--color-select-menu-tap-highlight: rgba(48, 54, 61, 0.5);
	--color-select-menu-tap-focus-bg: #0c2d6b;
	--color-box-blue-border: #0d419d;
	--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
	--color-box-row-blue-bg: rgba(121, 192, 255, 0.1);
	--color-box-header-blue-bg: #0d1117;
	--color-box-header-blue-border: #30363d;
	--color-box-border-info: rgba(56, 139, 253, 0.4);
	--color-box-bg-info: rgba(56, 139, 253, 0.1);
	--color-box-border-warning: rgba(187, 128, 9, 0.4);
	--color-box-bg-warning: rgba(187, 128, 9, 0.1);
	--color-branch-name-text: #c9d1d9;
	--color-branch-name-icon: #b1bac4;
	--color-branch-name-bg: rgba(88, 166, 255, 0.1);
	--color-branch-name-link-text: #58a6ff;
	--color-branch-name-link-icon: #58a6ff;
	--color-branch-name-link-bg: rgba(88, 166, 255, 0.1);
	--color-markdown-code-bg: rgba(240, 246, 252, 0.15);
	--color-markdown-frame-border: #3b434b;
	--color-markdown-blockquote-border: #3b434b;
	--color-markdown-table-border: #3b434b;
	--color-markdown-table-tr-border: #272c32;
	--color-menu-heading-text: #8b949e;
	--color-menu-border-active: #f78166;
	--color-menu-bg-active: #161b22;
	--color-sidenav-selected-bg: #21262d;
	--color-sidenav-border-active: #f78166;
	--color-header-text: rgba(240, 246, 252, 0.7);
	--color-header-bg: #161b22;
	--color-header-logo: #f0f6fc;
	--color-filter-item-bar-bg: #12161c;
	--color-hidden-text-expander-bg: #21262d;
	--color-hidden-text-expander-bg-hover: #30363d;
	--color-drag-and-drop-border: #25292f;
	--color-upload-enabled-border: #3b434b;
	--color-upload-enabled-border-focused: #4487ee;
	--color-previewable-comment-form-border: #25292f;
	--color-underlinenav-border: rgba(48, 54, 61, 0);
	--color-underlinenav-border-hover: #30363d;
	--color-underlinenav-border-active: #f78166;
	--color-underlinenav-text: #8b949e;
	--color-underlinenav-text-hover: #c9d1d9;
	--color-underlinenav-text-active: #c9d1d9;
	--color-underlinenav-icon: #6e7681;
	--color-underlinenav-icon-hover: #c9d1d9;
	--color-underlinenav-icon-active: #c9d1d9;
	--color-underlinenav-counter-text: #8b949e;
	--color-underlinenav-counter-bg: rgba(139, 148, 158, 0.2);
	--color-verified-badge-text: #3fb950;
	--color-verified-badge-bg: rgba(63, 185, 80, 0.1);
	--color-verified-badge-border: rgba(63, 185, 80, 0.4);
	--color-social-count-bg: #21262d;
	--color-tooltip-text: #f0f6fc;
	--color-tooltip-bg: #6e7681;
	--color-header-search-bg: #0d1117;
	--color-header-search-border: #21262d;
	--color-search-keyword-hl: rgba(187, 128, 9, 0.4);
	--color-diffstat-neutral-bg: #30363d;
	--color-diffstat-neutral-border: rgba(240, 246, 252, 0.1);
	--color-diffstat-deletion-bg: #da3633;
	--color-diffstat-deletion-border: #f85149;
	--color-diffstat-addition-bg: #238636;
	--color-diffstat-addition-border: #2ea043;
	--color-mktg-success: #29933d;
	--color-mktg-info: #2a7bf3;
	--color-mktg-bg-shade-gradient-top: rgba(1, 4, 9, 0.065);
	--color-mktg-bg-shade-gradient-bottom: rgba(1, 4, 9, 0);
	--color-mktg-btn-bg: #1f6feb;
	--color-mktg-btn-border: #1f6feb;
	--color-mktg-btn-text: #f0f6fc;
	--color-mktg-btn-icon: #f0f6fc;
	--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(31, 111, 235, 0.3);
	--color-mktg-btn-hover-bg: #388bfd;
	--color-mktg-btn-hover-border: #388bfd;
	--color-mktg-btn-disabled-bg: rgba(56, 139, 253, 0.5);
	--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-disabled-text: rgba(240, 246, 252, 0.5);
	--color-mktg-btn-disabled-icon: rgba(240, 246, 252, 0.5);
	--color-mktg-btn-primary-bg: #238636;
	--color-mktg-btn-primary-border: #238636;
	--color-mktg-btn-primary-text: #f0f6fc;
	--color-mktg-btn-primary-icon: #f0f6fc;
	--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(35, 134, 54, 0.3);
	--color-mktg-btn-primary-hover-bg: #2ea043;
	--color-mktg-btn-primary-hover-border: #2ea043;
	--color-mktg-btn-primary-disabled-bg: rgba(46, 160, 67, 0.5);
	--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
	--color-mktg-btn-primary-disabled-icon: rgba(240, 246, 252, 0.5);
	--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-border: rgba(56, 139, 253, 0.5);
	--color-mktg-btn-outline-text: #388bfd;
	--color-mktg-btn-outline-icon: #388bfd;
	--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(56, 139, 253, 0.3);
	--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-hover-border: #388bfd;
	--color-mktg-btn-outline-hover-text: #58a6ff;
	--color-mktg-btn-outline-hover-icon: #58a6ff;
	--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-disabled-border: rgba(56, 139, 253, 0.2);
	--color-mktg-btn-outline-disabled-text: rgba(56, 139, 253, 0.5);
	--color-mktg-btn-outline-disabled-icon: rgba(56, 139, 253, 0.5);
	--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-border: rgba(201, 209, 217, 0.5);
	--color-mktg-btn-dark-text: #c9d1d9;
	--color-mktg-btn-dark-icon: #c9d1d9;
	--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(201, 209, 217, 0.3);
	--color-mktg-btn-dark-hover-bg: rgba(201, 209, 217, 0.5);
	--color-mktg-btn-dark-hover-border: rgba(201, 209, 217, 0.5);
	--color-mktg-btn-dark-hover-text: #0d1117;
	--color-mktg-btn-dark-hover-icon: #0d1117;
	--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-disabled-border: rgba(201, 209, 217, 0.2);
	--color-mktg-btn-dark-disabled-text: rgba(201, 209, 217, 0.5);
	--color-mktg-btn-dark-disabled-icon: rgba(201, 209, 217, 0.5);
	--color-files-explorer-icon: #6e7681;
	--color-hl-author-bg: #051d4d;
	--color-hl-author-border: #0d419d;
	--color-logo-subdued: #30363d;
	--color-discussion-border: #34513b;
	--color-discussion-bg-success: rgba(46, 160, 67, 0.1);
	--color-actions-workflow-table-sticky-bg: rgba(13, 17, 23, 0.95);
	--color-repo-language-color-border: rgba(240, 246, 252, 0.2);
	--color-code-selection-bg: rgba(121, 192, 255, 0.3);
	--color-highlight-text: #ffd467;
	--color-highlight-bg: rgba(204, 143, 44, 0.38);
	--color-blob-line-highlight-bg: rgba(210, 153, 34, 0.15);
	--color-blob-line-highlight-border: #e3b341;
	--color-diff-addition-text: #56d364;
	--color-diff-addition-bg: rgba(46, 160, 67, 0.2);
	--color-diff-addition-border: #196c2e;
	--color-diff-deletion-text: #f85149;
	--color-diff-deletion-bg: rgba(218, 54, 51, 0.2);
	--color-diff-deletion-border: #b62324;
	--color-diff-change-text: #e3b341;
	--color-diff-change-bg: #341a00;
	--color-diff-change-border: #9e6a03;
	--color-diff-blob-num-text: rgba(240, 246, 252, 0.3);
	--color-diff-blob-num-hover-text: rgba(240, 246, 252, 0.6);
	--color-diff-blob-addition-num-text: #3fb950;
	--color-diff-blob-addition-num-hover-text: #7ee787;
	--color-diff-blob-addition-num-bg: rgba(46, 160, 67, 0.1);
	--color-diff-blob-addition-line-bg: rgba(46, 160, 67, 0.2);
	--color-diff-blob-addition-word-bg: rgba(46, 160, 67, 0.55);
	--color-diff-blob-deletion-num-text: #f85149;
	--color-diff-blob-deletion-num-hover-text: #ffa198;
	--color-diff-blob-deletion-num-bg: rgba(218, 54, 51, 0.1);
	--color-diff-blob-deletion-line-bg: rgba(218, 54, 51, 0.2);
	--color-diff-blob-deletion-word-bg: rgba(218, 54, 51, 0.5);
	--color-diff-blob-hunk-text: #8b949e;
	--color-diff-blob-hunk-num-bg: rgba(88, 166, 255, 0.15);
	--color-diff-blob-hunk-line-bg: rgba(88, 166, 255, 0.1);
	--color-diff-blob-empty-block-bg: #161b22;
	--color-diff-blob-selected-line-highlight-bg: rgba(187, 128, 9, 0.1);
	--color-diff-blob-selected-line-highlight-border: #bb8009;
	--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
	--color-diff-blob-expander-icon: #8b949e;
	--color-diff-blob-expander-hover-icon: #f0f6fc;
	--color-diff-blob-expander-hover-bg: #1f6feb;
	--color-diff-blob-comment-button-icon: #f0f6fc;
	--color-diff-blob-comment-button-bg: #1f6feb;
	--color-diff-blob-comment-button-gradient-bg: #367eed;
	--color-global-nav-logo: #f0f6fc;
	--color-global-nav-bg: #161b22;
	--color-global-nav-text: #c9d1d9;
	--color-global-nav-icon: #c9d1d9;
	--color-global-nav-input-bg: #0d1117;
	--color-global-nav-input-border: #21262d;
	--color-global-nav-input-icon: #21262d;
	--color-global-nav-input-placeholder: #484f58;
	--color-calendar-graph-day-bg: #161b22;
	--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L1-bg: #003820;
	--color-calendar-graph-day-L2-bg: #00602d;
	--color-calendar-graph-day-L3-bg: #10983d;
	--color-calendar-graph-day-L4-bg: #27d545;
	--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
	--color-footer-invertocat-octicon: #30363d;
	--color-footer-invertocat-octicon-hover: #6e7681;
	--color-pr-state-draft-text: #8b949e;
	--color-pr-state-draft-bg: rgba(139, 148, 158, 0.1);
	--color-pr-state-draft-border: rgba(139, 148, 158, 0.4);
	--color-pr-state-open-text: #3fb950;
	--color-pr-state-open-bg: rgba(63, 185, 80, 0.1);
	--color-pr-state-open-border: rgba(63, 185, 80, 0.4);
	--color-pr-state-merged-text: #a371f7;
	--color-pr-state-merged-bg: rgba(188, 140, 255, 0.1);
	--color-pr-state-merged-border: rgba(188, 140, 255, 0.4);
	--color-pr-state-closed-text: #f85149;
	--color-pr-state-closed-bg: rgba(218, 54, 51, 0.1);
	--color-pr-state-closed-border: rgba(218, 54, 51, 0.4);
	--color-topic-tag-text: #58a6ff;
	--color-topic-tag-bg: rgba(56, 139, 253, 0.1);
	--color-topic-tag-hover-bg: rgba(56, 139, 253, 0.2);
	--color-topic-tag-active-bg: rgba(56, 139, 253, 0.15);
	--color-merge-box-success-icon-bg: rgba(46, 160, 67, 0.1);
	--color-merge-box-success-icon-text: #3fb950;
	--color-merge-box-success-icon-border: rgba(46, 160, 67, 0.4);
	--color-merge-box-success-indicator-bg: #238636;
	--color-merge-box-success-indicator-border: #2ea043;
	--color-merge-box-merged-icon-bg: rgba(188, 140, 255, 0.1);
	--color-merge-box-merged-icon-text: #a371f7;
	--color-merge-box-merged-icon-border: rgba(188, 140, 255, 0.4);
	--color-merge-box-merged-box-border: rgba(188, 140, 255, 0.4);
	--color-merge-box-neutral-icon-bg: rgba(201, 209, 217, 0.1);
	--color-merge-box-neutral-icon-text: #8b949e;
	--color-merge-box-neutral-icon-border: rgba(201, 209, 217, 0.4);
	--color-merge-box-neutral-indicator-bg: #484f58;
	--color-merge-box-neutral-indicator-border: #6e7681;
	--color-merge-box-warning-icon-bg: rgba(187, 128, 9, 0.1);
	--color-merge-box-warning-icon-text: #e3b341;
	--color-merge-box-warning-icon-border: rgba(187, 128, 9, 0.4);
	--color-merge-box-warning-box-border: rgba(187, 128, 9, 0.4);
	--color-merge-box-warning-merge-highlight: rgba(187, 128, 9, 0.1);
	--color-merge-box-error-icon-bg: rgba(248, 81, 73, 0.1);
	--color-merge-box-error-icon-text: #f85149;
	--color-merge-box-error-icon-border: rgba(248, 81, 73, 0.4);
	--color-merge-box-error-indicator-bg: #da3633;
	--color-merge-box-error-indicator-border: #f85149;
	--color-project-card-bg: #161b22;
	--color-project-header-bg: #0d1117;
	--color-project-sidebar-bg: #161b22;
	--color-project-gradient-in: #161b22;
	--color-project-gradient-out: rgba(22, 27, 34, 0);
	--color-checks-bg: #090c10;
	--color-checks-run-border-width: 1px;
	--color-checks-container-border-width: 1px;
	--color-checks-text-primary: #c9d1d9;
	--color-checks-text-secondary: #8b949e;
	--color-checks-text-link: #58a6ff;
	--color-checks-btn-icon: #6e7681;
	--color-checks-btn-hover-icon: #c9d1d9;
	--color-checks-btn-hover-bg: #30363d;
	--color-checks-input-text: #8b949e;
	--color-checks-input-placeholder-text: #484f58;
	--color-checks-input-focus-text: #c9d1d9;
	--color-checks-input-bg: #0d1117;
	--color-checks-input-shadow: 0 0 0 1px #21262d;
	--color-checks-dropdown-text: #c9d1d9;
	--color-checks-dropdown-bg: #21262d;
	--color-checks-dropdown-border: #30363d;
	--color-checks-dropdown-hover-text: #f0f6fc;
	--color-checks-dropdown-hover-bg: #1f6feb;
	--color-checks-dropdown-btn-hover-text: #f0f6fc;
	--color-checks-dropdown-btn-hover-bg: #161b22;
	--color-checks-scrollbar-thumb-bg: #30363d;
	--color-checks-header-label-text: #8b949e;
	--color-checks-header-label-open-text: #c9d1d9;
	--color-checks-header-border: #21262d;
	--color-checks-header-icon: #6e7681;
	--color-checks-line-text: #8b949e;
	--color-checks-line-num-text: #8b949e;
	--color-checks-line-timestamp-text: #8b949e;
	--color-checks-line-hover-bg: #161b22;
	--color-checks-line-selected-bg: rgba(56, 139, 253, 0.1);
	--color-checks-line-selected-num-text: #58a6ff;
	--color-checks-line-dt-fm-text: #0d1117;
	--color-checks-line-dt-fm-bg: #d29922;
	--color-checks-gate-bg: rgba(132, 83, 6, 0.15);
	--color-checks-gate-text: #8b949e;
	--color-checks-gate-waiting-text: #e3b341;
	--color-checks-step-header-open-bg: #161b22;
	--color-checks-step-error-text: #f85149;
	--color-checks-step-warning-text: #e3b341;
	--color-checks-logline-text: #6e7681;
	--color-checks-logline-num-text: #8b949e;
	--color-checks-logline-debug-text: #bc8cff;
	--color-checks-logline-error-text: #8b949e;
	--color-checks-logline-error-num-text: #8b949e;
	--color-checks-logline-error-bg: rgba(248, 81, 73, 0.1);
	--color-checks-logline-warning-text: #8b949e;
	--color-checks-logline-warning-num-text: #e3b341;
	--color-checks-logline-warning-bg: rgba(187, 128, 9, 0.1);
	--color-checks-logline-command-text: #58a6ff;
	--color-checks-logline-section-text: #56d364;
	--color-intro-shelf-gradient-left: rgba(56, 139, 253, 0.1);
	--color-intro-shelf-gradient-right: rgba(46, 160, 67, 0.1);
	--color-intro-shelf-gradient-in: #0d1117;
	--color-intro-shelf-gradient-out: rgba(13, 17, 23, 0);
	--color-marketing-icon-primary: #79c0ff;
	--color-marketing-icon-secondary: #1f6feb;
	--color-prettylights-syntax-comment: #8b949e;
	--color-prettylights-syntax-constant: #79c0ff;
	--color-prettylights-syntax-entity: #d2a8ff;
	--color-prettylights-syntax-storage-modifier-import: #c9d1d9;
	--color-prettylights-syntax-entity-tag: #7ee787;
	--color-prettylights-syntax-keyword: #ff7b72;
	--color-prettylights-syntax-string: #a5d6ff;
	--color-prettylights-syntax-variable: #ffa657;
	--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
	--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
	--color-prettylights-syntax-invalid-illegal-bg: #8e1519;
	--color-prettylights-syntax-carriage-return-text: #f0f6fc;
	--color-prettylights-syntax-carriage-return-bg: #b62324;
	--color-prettylights-syntax-string-regexp: #7ee787;
	--color-prettylights-syntax-markup-list: #f2cc60;
	--color-prettylights-syntax-markup-heading: #1f6feb;
	--color-prettylights-syntax-markup-italic: #c9d1d9;
	--color-prettylights-syntax-markup-bold: #c9d1d9;
	--color-prettylights-syntax-markup-deleted-text: #ffdcd7;
	--color-prettylights-syntax-markup-deleted-bg: #67060c;
	--color-prettylights-syntax-markup-inserted-text: #aff5b4;
	--color-prettylights-syntax-markup-inserted-bg: #033a16;
	--color-prettylights-syntax-markup-changed-text: #ffdfb6;
	--color-prettylights-syntax-markup-changed-bg: #5a1e02;
	--color-prettylights-syntax-markup-ignored-text: #c9d1d9;
	--color-prettylights-syntax-markup-ignored-bg: #1158c7;
	--color-prettylights-syntax-meta-diff-range: #d2a8ff;
	--color-prettylights-syntax-brackethighlighter-angle: #8b949e;
	--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
	--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
	--color-codemirror-text: #c9d1d9;
	--color-codemirror-bg: #0d1117;
	--color-codemirror-gutters-bg: #0d1117;
	--color-codemirror-guttermarker-text: #0d1117;
	--color-codemirror-guttermarker-subtle-text: #6e7681;
	--color-codemirror-linenumber-text: #8b949e;
	--color-codemirror-cursor: #f0f6fc;
	--color-codemirror-selection-bg: rgba(121, 192, 255, 0.3);
	--color-codemirror-activeline-bg: #161b22;
	--color-codemirror-matchingbracket-text: #c9d1d9;
	--color-codemirror-lines-bg: #0d1117;
	--color-codemirror-syntax-comment: #8b949e;
	--color-codemirror-syntax-constant: #79c0ff;
	--color-codemirror-syntax-entity: #d2a8ff;
	--color-codemirror-syntax-keyword: #ff7b72;
	--color-codemirror-syntax-storage: #ff7b72;
	--color-codemirror-syntax-string: #a5d6ff;
	--color-codemirror-syntax-support: #79c0ff;
	--color-codemirror-syntax-variable: #ffa657;
	--color-ansi-black: #0d1117;
	--color-ansi-black-bright: #161b22;
	--color-ansi-white: #b1bac4;
	--color-ansi-white-bright: #b1bac4;
	--color-ansi-gray: #6e7681;
	--color-ansi-red: #ff7b72;
	--color-ansi-red-bright: #ffa198;
	--color-ansi-green: #3fb950;
	--color-ansi-green-bright: #56d364;
	--color-ansi-yellow: #d29922;
	--color-ansi-yellow-bright: #e3b341;
	--color-ansi-blue: #58a6ff;
	--color-ansi-blue-bright: #79c0ff;
	--color-ansi-magenta: #bc8cff;
	--color-ansi-magenta-bright: #d2a8ff;
	--color-ansi-cyan: #76e3ea;
	--color-ansi-cyan-bright: #b3f0ff;
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme="dark"] {
		--color-scale-black: #010409;
		--color-scale-white: #f0f6fc;
		--color-scale-gray-0: #f0f6fc;
		--color-scale-gray-1: #c9d1d9;
		--color-scale-gray-2: #b1bac4;
		--color-scale-gray-3: #8b949e;
		--color-scale-gray-4: #6e7681;
		--color-scale-gray-5: #484f58;
		--color-scale-gray-6: #30363d;
		--color-scale-gray-7: #21262d;
		--color-scale-gray-8: #161b22;
		--color-scale-gray-9: #0d1117;
		--color-scale-blue-0: #cae8ff;
		--color-scale-blue-1: #a5d6ff;
		--color-scale-blue-2: #79c0ff;
		--color-scale-blue-3: #58a6ff;
		--color-scale-blue-4: #388bfd;
		--color-scale-blue-5: #1f6feb;
		--color-scale-blue-6: #1158c7;
		--color-scale-blue-7: #0d419d;
		--color-scale-blue-8: #0c2d6b;
		--color-scale-blue-9: #051d4d;
		--color-scale-green-0: #aff5b4;
		--color-scale-green-1: #7ee787;
		--color-scale-green-2: #56d364;
		--color-scale-green-3: #3fb950;
		--color-scale-green-4: #2ea043;
		--color-scale-green-5: #238636;
		--color-scale-green-6: #196c2e;
		--color-scale-green-7: #0f5323;
		--color-scale-green-8: #033a16;
		--color-scale-green-9: #04260f;
		--color-scale-yellow-0: #f8e3a1;
		--color-scale-yellow-1: #f2cc60;
		--color-scale-yellow-2: #e3b341;
		--color-scale-yellow-3: #d29922;
		--color-scale-yellow-4: #bb8009;
		--color-scale-yellow-5: #9e6a03;
		--color-scale-yellow-6: #845306;
		--color-scale-yellow-7: #693e00;
		--color-scale-yellow-8: #4b2900;
		--color-scale-yellow-9: #341a00;
		--color-scale-orange-0: #ffdfb6;
		--color-scale-orange-1: #ffc680;
		--color-scale-orange-2: #ffa657;
		--color-scale-orange-3: #f0883e;
		--color-scale-orange-4: #db6d28;
		--color-scale-orange-5: #bd561d;
		--color-scale-orange-6: #9b4215;
		--color-scale-orange-7: #762d0a;
		--color-scale-orange-8: #5a1e02;
		--color-scale-orange-9: #3d1300;
		--color-scale-red-0: #ffdcd7;
		--color-scale-red-1: #ffc1ba;
		--color-scale-red-2: #ffa198;
		--color-scale-red-3: #ff7b72;
		--color-scale-red-4: #f85149;
		--color-scale-red-5: #da3633;
		--color-scale-red-6: #b62324;
		--color-scale-red-7: #8e1519;
		--color-scale-red-8: #67060c;
		--color-scale-red-9: #490202;
		--color-scale-purple-0: #eddeff;
		--color-scale-purple-1: #e2c5ff;
		--color-scale-purple-2: #d2a8ff;
		--color-scale-purple-3: #bc8cff;
		--color-scale-purple-4: #a371f7;
		--color-scale-purple-5: #8957e5;
		--color-scale-purple-6: #6e40c9;
		--color-scale-purple-7: #553098;
		--color-scale-purple-8: #3c1e70;
		--color-scale-purple-9: #271052;
		--color-scale-pink-0: #ffdaec;
		--color-scale-pink-1: #ffbedd;
		--color-scale-pink-2: #ff9bce;
		--color-scale-pink-3: #f778ba;
		--color-scale-pink-4: #db61a2;
		--color-scale-pink-5: #bf4b8a;
		--color-scale-pink-6: #9e3670;
		--color-scale-pink-7: #7d2457;
		--color-scale-pink-8: #5e103e;
		--color-scale-pink-9: #42062a;
		--color-auto-black: #f0f6fc;
		--color-auto-white: #010409;
		--color-auto-gray-0: #0d1117;
		--color-auto-gray-1: #161b22;
		--color-auto-gray-2: #21262d;
		--color-auto-gray-3: #30363d;
		--color-auto-gray-4: #484f58;
		--color-auto-gray-5: #6e7681;
		--color-auto-gray-6: #8b949e;
		--color-auto-gray-7: #b1bac4;
		--color-auto-gray-8: #c9d1d9;
		--color-auto-gray-9: #f0f6fc;
		--color-auto-blue-0: #051d4d;
		--color-auto-blue-1: #0c2d6b;
		--color-auto-blue-2: #0d419d;
		--color-auto-blue-3: #1158c7;
		--color-auto-blue-4: #1f6feb;
		--color-auto-blue-5: #388bfd;
		--color-auto-blue-6: #58a6ff;
		--color-auto-blue-7: #79c0ff;
		--color-auto-blue-8: #a5d6ff;
		--color-auto-blue-9: #cae8ff;
		--color-auto-green-0: #04260f;
		--color-auto-green-1: #033a16;
		--color-auto-green-2: #0f5323;
		--color-auto-green-3: #196c2e;
		--color-auto-green-4: #238636;
		--color-auto-green-5: #2ea043;
		--color-auto-green-6: #3fb950;
		--color-auto-green-7: #56d364;
		--color-auto-green-8: #7ee787;
		--color-auto-green-9: #aff5b4;
		--color-auto-yellow-0: #341a00;
		--color-auto-yellow-1: #4b2900;
		--color-auto-yellow-2: #693e00;
		--color-auto-yellow-3: #845306;
		--color-auto-yellow-4: #9e6a03;
		--color-auto-yellow-5: #bb8009;
		--color-auto-yellow-6: #d29922;
		--color-auto-yellow-7: #e3b341;
		--color-auto-yellow-8: #f2cc60;
		--color-auto-yellow-9: #f8e3a1;
		--color-auto-orange-0: #3d1300;
		--color-auto-orange-1: #5a1e02;
		--color-auto-orange-2: #762d0a;
		--color-auto-orange-3: #9b4215;
		--color-auto-orange-4: #bd561d;
		--color-auto-orange-5: #db6d28;
		--color-auto-orange-6: #f0883e;
		--color-auto-orange-7: #ffa657;
		--color-auto-orange-8: #ffc680;
		--color-auto-orange-9: #ffdfb6;
		--color-auto-red-0: #490202;
		--color-auto-red-1: #67060c;
		--color-auto-red-2: #8e1519;
		--color-auto-red-3: #b62324;
		--color-auto-red-4: #da3633;
		--color-auto-red-5: #f85149;
		--color-auto-red-6: #ff7b72;
		--color-auto-red-7: #ffa198;
		--color-auto-red-8: #ffc1ba;
		--color-auto-red-9: #ffdcd7;
		--color-auto-purple-0: #271052;
		--color-auto-purple-1: #3c1e70;
		--color-auto-purple-2: #553098;
		--color-auto-purple-3: #6e40c9;
		--color-auto-purple-4: #8957e5;
		--color-auto-purple-5: #a371f7;
		--color-auto-purple-6: #bc8cff;
		--color-auto-purple-7: #d2a8ff;
		--color-auto-purple-8: #e2c5ff;
		--color-auto-purple-9: #eddeff;
		--color-auto-pink-0: #42062a;
		--color-auto-pink-1: #5e103e;
		--color-auto-pink-2: #7d2457;
		--color-auto-pink-3: #9e3670;
		--color-auto-pink-4: #bf4b8a;
		--color-auto-pink-5: #db61a2;
		--color-auto-pink-6: #f778ba;
		--color-auto-pink-7: #ff9bce;
		--color-auto-pink-8: #ffbedd;
		--color-auto-pink-9: #ffdaec;
		--color-text-primary: #c9d1d9;
		--color-text-secondary: #8b949e;
		--color-text-tertiary: #8b949e;
		--color-text-placeholder: #484f58;
		--color-text-disabled: #484f58;
		--color-text-inverse: #0d1117;
		--color-text-link: #58a6ff;
		--color-text-danger: #f85149;
		--color-text-success: #56d364;
		--color-text-warning: #e3b341;
		--color-text-white: #f0f6fc;
		--color-icon-primary: #c9d1d9;
		--color-icon-secondary: #6e7681;
		--color-icon-tertiary: #484f58;
		--color-icon-info: #79c0ff;
		--color-icon-danger: #f85149;
		--color-icon-success: #56d364;
		--color-icon-warning: #e3b341;
		--color-border-primary: #30363d;
		--color-border-secondary: #21262d;
		--color-border-tertiary: #6e7681;
		--color-border-overlay: #30363d;
		--color-border-inverse: #f0f6fc;
		--color-border-info: rgba(56, 139, 253, 0.4);
		--color-border-danger: rgba(248, 81, 73, 0.4);
		--color-border-success: rgba(63, 185, 80, 0.4);
		--color-border-warning: rgba(187, 128, 9, 0.4);
		--color-bg-canvas: #0d1117;
		--color-bg-canvas-mobile: #010409;
		--color-bg-canvas-inverse: #f0f6fc;
		--color-bg-canvas-inset: #090c10;
		--color-bg-primary: #0d1117;
		--color-bg-secondary: #0d1117;
		--color-bg-tertiary: #161b22;
		--color-bg-overlay: #21262d;
		--color-bg-backdrop: rgba(1, 4, 9, 0.8);
		--color-bg-info: rgba(56, 139, 253, 0.1);
		--color-bg-info-inverse: #388bfd;
		--color-bg-danger: rgba(248, 81, 73, 0.1);
		--color-bg-danger-inverse: #da3633;
		--color-bg-success: rgba(46, 160, 67, 0.1);
		--color-bg-success-inverse: #2ea043;
		--color-bg-warning: rgba(187, 128, 9, 0.1);
		--color-bg-warning-inverse: #bb8009;
		--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-medium: 0 3px 6px #010409;
		--color-shadow-large: 0 8px 24px #010409;
		--color-shadow-extra-large: 0 12px 48px #010409;
		--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
		--color-state-hover-primary-bg: #1f6feb;
		--color-state-hover-primary-border: #388bfd;
		--color-state-hover-primary-text: #f0f6fc;
		--color-state-hover-primary-icon: #f0f6fc;
		--color-state-hover-secondary-bg: #161b22;
		--color-state-hover-secondary-border: #161b22;
		--color-state-selected-primary-bg: #1f6feb;
		--color-state-selected-primary-border: #388bfd;
		--color-state-selected-primary-text: #f0f6fc;
		--color-state-selected-primary-icon: #f0f6fc;
		--color-state-focus-border: #388bfd;
		--color-state-focus-shadow: 0 0 0 3px #0c2d6b;
		--color-fade-fg-10: rgba(240, 246, 252, 0.1);
		--color-fade-fg-15: rgba(240, 246, 252, 0.15);
		--color-fade-fg-30: rgba(240, 246, 252, 0.3);
		--color-fade-fg-50: rgba(240, 246, 252, 0.5);
		--color-fade-fg-70: rgba(240, 246, 252, 0.7);
		--color-fade-fg-85: rgba(240, 246, 252, 0.85);
		--color-fade-black-10: rgba(1, 4, 9, 0.1);
		--color-fade-black-15: rgba(1, 4, 9, 0.15);
		--color-fade-black-30: rgba(1, 4, 9, 0.3);
		--color-fade-black-50: rgba(1, 4, 9, 0.5);
		--color-fade-black-70: rgba(1, 4, 9, 0.7);
		--color-fade-black-85: rgba(1, 4, 9, 0.85);
		--color-fade-white-10: rgba(240, 246, 252, 0.1);
		--color-fade-white-15: rgba(240, 246, 252, 0.15);
		--color-fade-white-30: rgba(240, 246, 252, 0.3);
		--color-fade-white-50: rgba(240, 246, 252, 0.5);
		--color-fade-white-70: rgba(240, 246, 252, 0.7);
		--color-fade-white-85: rgba(240, 246, 252, 0.85);
		--color-alert-info-text: #79c0ff;
		--color-alert-info-icon: #79c0ff;
		--color-alert-info-bg: rgba(56, 139, 253, 0.1);
		--color-alert-info-border: rgba(56, 139, 253, 0.4);
		--color-alert-warn-text: #e3b341;
		--color-alert-warn-icon: #e3b341;
		--color-alert-warn-bg: rgba(187, 128, 9, 0.1);
		--color-alert-warn-border: rgba(187, 128, 9, 0.4);
		--color-alert-error-text: #ff7b72;
		--color-alert-error-icon: #ff7b72;
		--color-alert-error-bg: rgba(248, 81, 73, 0.1);
		--color-alert-error-border: rgba(248, 81, 73, 0.4);
		--color-alert-success-text: #56d364;
		--color-alert-success-icon: #56d364;
		--color-alert-success-bg: rgba(46, 160, 67, 0.1);
		--color-alert-success-border: rgba(46, 160, 67, 0.4);
		--color-autocomplete-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
		--color-autocomplete-row-border: #30363d;
		--color-blankslate-icon: #535c66;
		--color-btn-text: #c9d1d9;
		--color-btn-bg: #21262d;
		--color-btn-border: #30363d;
		--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-hover-bg: #30363d;
		--color-btn-hover-border: #8b949e;
		--color-btn-selected-bg: #161b22;
		--color-btn-focus-bg: #21262d;
		--color-btn-focus-border: #8b949e;
		--color-btn-focus-shadow: 0 0 0 3px rgba(139, 148, 158, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(1, 4, 9, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(31, 111, 235, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #238636;
		--color-btn-primary-border: #2ea043;
		--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-hover-bg: #2ea043;
		--color-btn-primary-hover-border: #3fb950;
		--color-btn-primary-selected-bg: #238636;
		--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
		--color-btn-primary-disabled-bg: rgba(35, 134, 54, 0.6);
		--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-btn-primary-focus-bg: #238636;
		--color-btn-primary-focus-border: #3fb950;
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: #f0f6fc;
		--color-btn-primary-counter-bg: rgba(240, 246, 252, 0.2);
		--color-btn-outline-text: #58a6ff;
		--color-btn-outline-hover-text: #58a6ff;
		--color-btn-outline-hover-bg: #30363d;
		--color-btn-outline-hover-border: #58a6ff;
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(1, 4, 9, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(240, 246, 252, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(240, 246, 252, 0.2);
		--color-btn-outline-selected-text: #f0f6fc;
		--color-btn-outline-selected-bg: #0d419d;
		--color-btn-outline-selected-border: rgba(240, 246, 252, 0.1);
		--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-outline-disabled-text: rgba(88, 166, 255, 0.5);
		--color-btn-outline-disabled-bg: #0d1117;
		--color-btn-outline-disabled-counter-bg: rgba(31, 111, 235, 0.05);
		--color-btn-outline-focus-border: #58a6ff;
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(17, 88, 199, 0.4);
		--color-btn-outline-counter-bg: rgba(31, 111, 235, 0.1);
		--color-btn-danger-text: #f85149;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #da3633;
		--color-btn-danger-hover-border: #f85149;
		--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #b62324;
		--color-btn-danger-selected-border: rgba(240, 246, 252, 0.1);
		--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-disabled-text: rgba(248, 81, 73, 0.5);
		--color-btn-danger-disabled-bg: #0d1117;
		--color-btn-danger-disabled-counter-bg: rgba(218, 54, 51, 0.05);
		--color-btn-danger-focus-border: #f85149;
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(182, 35, 36, 0.4);
		--color-btn-danger-counter-bg: rgba(218, 54, 51, 0.1);
		--color-btn-danger-icon: #f85149;
		--color-btn-danger-hover-icon: #f0f6fc;
		--color-btn-counter-bg: #30363d;
		--color-counter-text: #c9d1d9;
		--color-counter-bg: #30363d;
		--color-counter-primary-text: #c9d1d9;
		--color-counter-primary-bg: #6e7681;
		--color-counter-secondary-text: #8b949e;
		--color-counter-secondary-bg: rgba(139, 148, 158, 0.2);
		--color-dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
		--color-label-border: #30363d;
		--color-label-primary-text: #b1bac4;
		--color-label-primary-border: #6e7681;
		--color-label-secondary-text: #8b949e;
		--color-label-secondary-border: #30363d;
		--color-label-info-text: #388bfd;
		--color-label-info-border: rgba(56, 139, 253, 0.4);
		--color-label-success-text: #3fb950;
		--color-label-success-border: rgba(46, 160, 67, 0.4);
		--color-label-warning-text: #e3b341;
		--color-label-warning-border: rgba(242, 211, 91, 0.4);
		--color-label-danger-text: #f85149;
		--color-label-danger-border: rgba(248, 81, 73, 0.4);
		--color-label-orange-text: #db6d28;
		--color-label-orange-border: rgba(219, 109, 40, 0.4);
		--color-input-bg: #0d1117;
		--color-input-contrast-bg: rgba(1, 4, 9, 0.5);
		--color-input-border: #21262d;
		--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-input-disabled-bg: #161b22;
		--color-input-disabled-border: #30363d;
		--color-input-warning-border: #d29922;
		--color-input-error-border: #f85149;
		--color-input-tooltip-success-text: #56d364;
		--color-input-tooltip-success-bg: #101f1b;
		--color-input-tooltip-success-border: #1c532b;
		--color-input-tooltip-warning-text: #e3b341;
		--color-input-tooltip-warning-bg: #1e1c16;
		--color-input-tooltip-warning-border: #5d4411;
		--color-input-tooltip-error-text: #ff7b72;
		--color-input-tooltip-error-bg: #25171c;
		--color-input-tooltip-error-border: #792e2e;
		--color-avatar-bg: rgba(240, 246, 252, 0.1);
		--color-avatar-border: rgba(240, 246, 252, 0.1);
		--color-avatar-stack-fade: #30363d;
		--color-avatar-stack-fade-more: #21262d;
		--color-avatar-child-shadow: -2px -2px 0 #0d1117;
		--color-toast-text: #c9d1d9;
		--color-toast-bg: #30363d;
		--color-toast-border: #6e7681;
		--color-toast-shadow: 0 8px 24px #010409;
		--color-toast-icon: #f0f6fc;
		--color-toast-icon-bg: #1f6feb;
		--color-toast-icon-border: #388bfd;
		--color-toast-success-text: #c9d1d9;
		--color-toast-success-border: #6e7681;
		--color-toast-success-icon: #f0f6fc;
		--color-toast-success-icon-bg: #2ea043;
		--color-toast-success-icon-border: #3fb950;
		--color-toast-warning-text: #c9d1d9;
		--color-toast-warning-border: #6e7681;
		--color-toast-warning-icon: #f0f6fc;
		--color-toast-warning-icon-bg: #bb8009;
		--color-toast-warning-icon-border: #d29922;
		--color-toast-danger-text: #c9d1d9;
		--color-toast-danger-border: #6e7681;
		--color-toast-danger-icon: #f0f6fc;
		--color-toast-danger-icon-bg: #da3633;
		--color-toast-danger-icon-border: #f85149;
		--color-toast-loading-text: #c9d1d9;
		--color-toast-loading-border: #6e7681;
		--color-toast-loading-icon: #f0f6fc;
		--color-toast-loading-icon-bg: #6e7681;
		--color-toast-loading-icon-border: #8b949e;
		--color-timeline-text: #b1bac4;
		--color-timeline-badge-bg: #0d1117;
		--color-timeline-badge-success-border: #2ea043;
		--color-timeline-target-badge-border: #1f6feb;
		--color-timeline-target-badge-shadow: #0d419d;
		--color-select-menu-border-secondary: #30363d;
		--color-select-menu-shadow: 0 0 18px rgba(1, 4, 9, 0.4);
		--color-select-menu-backdrop-bg: rgba(1, 4, 9, 0.5);
		--color-select-menu-backdrop-border: #484f58;
		--color-select-menu-tap-highlight: rgba(48, 54, 61, 0.5);
		--color-select-menu-tap-focus-bg: #0c2d6b;
		--color-box-blue-border: #0d419d;
		--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
		--color-box-row-blue-bg: rgba(121, 192, 255, 0.1);
		--color-box-header-blue-bg: #0d1117;
		--color-box-header-blue-border: #30363d;
		--color-box-border-info: rgba(56, 139, 253, 0.4);
		--color-box-bg-info: rgba(56, 139, 253, 0.1);
		--color-box-border-warning: rgba(187, 128, 9, 0.4);
		--color-box-bg-warning: rgba(187, 128, 9, 0.1);
		--color-branch-name-text: #c9d1d9;
		--color-branch-name-icon: #b1bac4;
		--color-branch-name-bg: rgba(88, 166, 255, 0.1);
		--color-branch-name-link-text: #58a6ff;
		--color-branch-name-link-icon: #58a6ff;
		--color-branch-name-link-bg: rgba(88, 166, 255, 0.1);
		--color-markdown-code-bg: rgba(240, 246, 252, 0.15);
		--color-markdown-frame-border: #3b434b;
		--color-markdown-blockquote-border: #3b434b;
		--color-markdown-table-border: #3b434b;
		--color-markdown-table-tr-border: #272c32;
		--color-menu-heading-text: #8b949e;
		--color-menu-border-active: #f78166;
		--color-menu-bg-active: #161b22;
		--color-sidenav-selected-bg: #21262d;
		--color-sidenav-border-active: #f78166;
		--color-header-text: rgba(240, 246, 252, 0.7);
		--color-header-bg: #161b22;
		--color-header-logo: #f0f6fc;
		--color-filter-item-bar-bg: #12161c;
		--color-hidden-text-expander-bg: #21262d;
		--color-hidden-text-expander-bg-hover: #30363d;
		--color-drag-and-drop-border: #25292f;
		--color-upload-enabled-border: #3b434b;
		--color-upload-enabled-border-focused: #4487ee;
		--color-previewable-comment-form-border: #25292f;
		--color-underlinenav-border: rgba(48, 54, 61, 0);
		--color-underlinenav-border-hover: #30363d;
		--color-underlinenav-border-active: #f78166;
		--color-underlinenav-text: #8b949e;
		--color-underlinenav-text-hover: #c9d1d9;
		--color-underlinenav-text-active: #c9d1d9;
		--color-underlinenav-icon: #6e7681;
		--color-underlinenav-icon-hover: #c9d1d9;
		--color-underlinenav-icon-active: #c9d1d9;
		--color-underlinenav-counter-text: #8b949e;
		--color-underlinenav-counter-bg: rgba(139, 148, 158, 0.2);
		--color-verified-badge-text: #3fb950;
		--color-verified-badge-bg: rgba(63, 185, 80, 0.1);
		--color-verified-badge-border: rgba(63, 185, 80, 0.4);
		--color-social-count-bg: #21262d;
		--color-tooltip-text: #f0f6fc;
		--color-tooltip-bg: #6e7681;
		--color-header-search-bg: #0d1117;
		--color-header-search-border: #21262d;
		--color-search-keyword-hl: rgba(187, 128, 9, 0.4);
		--color-diffstat-neutral-bg: #30363d;
		--color-diffstat-neutral-border: rgba(240, 246, 252, 0.1);
		--color-diffstat-deletion-bg: #da3633;
		--color-diffstat-deletion-border: #f85149;
		--color-diffstat-addition-bg: #238636;
		--color-diffstat-addition-border: #2ea043;
		--color-mktg-success: #29933d;
		--color-mktg-info: #2a7bf3;
		--color-mktg-bg-shade-gradient-top: rgba(1, 4, 9, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(1, 4, 9, 0);
		--color-mktg-btn-bg: #1f6feb;
		--color-mktg-btn-border: #1f6feb;
		--color-mktg-btn-text: #f0f6fc;
		--color-mktg-btn-icon: #f0f6fc;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(31, 111, 235, 0.3);
		--color-mktg-btn-hover-bg: #388bfd;
		--color-mktg-btn-hover-border: #388bfd;
		--color-mktg-btn-disabled-bg: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-disabled-icon: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-primary-bg: #238636;
		--color-mktg-btn-primary-border: #238636;
		--color-mktg-btn-primary-text: #f0f6fc;
		--color-mktg-btn-primary-icon: #f0f6fc;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(35, 134, 54, 0.3);
		--color-mktg-btn-primary-hover-bg: #2ea043;
		--color-mktg-btn-primary-hover-border: #2ea043;
		--color-mktg-btn-primary-disabled-bg: rgba(46, 160, 67, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-primary-disabled-icon: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-outline-text: #388bfd;
		--color-mktg-btn-outline-icon: #388bfd;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(56, 139, 253, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #388bfd;
		--color-mktg-btn-outline-hover-text: #58a6ff;
		--color-mktg-btn-outline-hover-icon: #58a6ff;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(56, 139, 253, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-text: #c9d1d9;
		--color-mktg-btn-dark-icon: #c9d1d9;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(201, 209, 217, 0.3);
		--color-mktg-btn-dark-hover-bg: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-hover-border: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-hover-text: #0d1117;
		--color-mktg-btn-dark-hover-icon: #0d1117;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(201, 209, 217, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(201, 209, 217, 0.5);
		--color-files-explorer-icon: #6e7681;
		--color-hl-author-bg: #051d4d;
		--color-hl-author-border: #0d419d;
		--color-logo-subdued: #30363d;
		--color-discussion-border: #34513b;
		--color-discussion-bg-success: rgba(46, 160, 67, 0.1);
		--color-actions-workflow-table-sticky-bg: rgba(13, 17, 23, 0.95);
		--color-repo-language-color-border: rgba(240, 246, 252, 0.2);
		--color-code-selection-bg: rgba(121, 192, 255, 0.3);
		--color-highlight-text: #ffd467;
		--color-highlight-bg: rgba(204, 143, 44, 0.38);
		--color-blob-line-highlight-bg: rgba(210, 153, 34, 0.15);
		--color-blob-line-highlight-border: #e3b341;
		--color-diff-addition-text: #56d364;
		--color-diff-addition-bg: rgba(46, 160, 67, 0.2);
		--color-diff-addition-border: #196c2e;
		--color-diff-deletion-text: #f85149;
		--color-diff-deletion-bg: rgba(218, 54, 51, 0.2);
		--color-diff-deletion-border: #b62324;
		--color-diff-change-text: #e3b341;
		--color-diff-change-bg: #341a00;
		--color-diff-change-border: #9e6a03;
		--color-diff-blob-num-text: rgba(240, 246, 252, 0.3);
		--color-diff-blob-num-hover-text: rgba(240, 246, 252, 0.6);
		--color-diff-blob-addition-num-text: #3fb950;
		--color-diff-blob-addition-num-hover-text: #7ee787;
		--color-diff-blob-addition-num-bg: rgba(46, 160, 67, 0.1);
		--color-diff-blob-addition-line-bg: rgba(46, 160, 67, 0.2);
		--color-diff-blob-addition-word-bg: rgba(46, 160, 67, 0.55);
		--color-diff-blob-deletion-num-text: #f85149;
		--color-diff-blob-deletion-num-hover-text: #ffa198;
		--color-diff-blob-deletion-num-bg: rgba(218, 54, 51, 0.1);
		--color-diff-blob-deletion-line-bg: rgba(218, 54, 51, 0.2);
		--color-diff-blob-deletion-word-bg: rgba(218, 54, 51, 0.5);
		--color-diff-blob-hunk-text: #8b949e;
		--color-diff-blob-hunk-num-bg: rgba(88, 166, 255, 0.15);
		--color-diff-blob-hunk-line-bg: rgba(88, 166, 255, 0.1);
		--color-diff-blob-empty-block-bg: #161b22;
		--color-diff-blob-selected-line-highlight-bg: rgba(187, 128, 9, 0.1);
		--color-diff-blob-selected-line-highlight-border: #bb8009;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
		--color-diff-blob-expander-icon: #8b949e;
		--color-diff-blob-expander-hover-icon: #f0f6fc;
		--color-diff-blob-expander-hover-bg: #1f6feb;
		--color-diff-blob-comment-button-icon: #f0f6fc;
		--color-diff-blob-comment-button-bg: #1f6feb;
		--color-diff-blob-comment-button-gradient-bg: #367eed;
		--color-global-nav-logo: #f0f6fc;
		--color-global-nav-bg: #161b22;
		--color-global-nav-text: #c9d1d9;
		--color-global-nav-icon: #c9d1d9;
		--color-global-nav-input-bg: #0d1117;
		--color-global-nav-input-border: #21262d;
		--color-global-nav-input-icon: #21262d;
		--color-global-nav-input-placeholder: #484f58;
		--color-calendar-graph-day-bg: #161b22;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #003820;
		--color-calendar-graph-day-L2-bg: #00602d;
		--color-calendar-graph-day-L3-bg: #10983d;
		--color-calendar-graph-day-L4-bg: #27d545;
		--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
		--color-footer-invertocat-octicon: #30363d;
		--color-footer-invertocat-octicon-hover: #6e7681;
		--color-pr-state-draft-text: #8b949e;
		--color-pr-state-draft-bg: rgba(139, 148, 158, 0.1);
		--color-pr-state-draft-border: rgba(139, 148, 158, 0.4);
		--color-pr-state-open-text: #3fb950;
		--color-pr-state-open-bg: rgba(63, 185, 80, 0.1);
		--color-pr-state-open-border: rgba(63, 185, 80, 0.4);
		--color-pr-state-merged-text: #a371f7;
		--color-pr-state-merged-bg: rgba(188, 140, 255, 0.1);
		--color-pr-state-merged-border: rgba(188, 140, 255, 0.4);
		--color-pr-state-closed-text: #f85149;
		--color-pr-state-closed-bg: rgba(218, 54, 51, 0.1);
		--color-pr-state-closed-border: rgba(218, 54, 51, 0.4);
		--color-topic-tag-text: #58a6ff;
		--color-topic-tag-bg: rgba(56, 139, 253, 0.1);
		--color-topic-tag-hover-bg: rgba(56, 139, 253, 0.2);
		--color-topic-tag-active-bg: rgba(56, 139, 253, 0.15);
		--color-merge-box-success-icon-bg: rgba(46, 160, 67, 0.1);
		--color-merge-box-success-icon-text: #3fb950;
		--color-merge-box-success-icon-border: rgba(46, 160, 67, 0.4);
		--color-merge-box-success-indicator-bg: #238636;
		--color-merge-box-success-indicator-border: #2ea043;
		--color-merge-box-merged-icon-bg: rgba(188, 140, 255, 0.1);
		--color-merge-box-merged-icon-text: #a371f7;
		--color-merge-box-merged-icon-border: rgba(188, 140, 255, 0.4);
		--color-merge-box-merged-box-border: rgba(188, 140, 255, 0.4);
		--color-merge-box-neutral-icon-bg: rgba(201, 209, 217, 0.1);
		--color-merge-box-neutral-icon-text: #8b949e;
		--color-merge-box-neutral-icon-border: rgba(201, 209, 217, 0.4);
		--color-merge-box-neutral-indicator-bg: #484f58;
		--color-merge-box-neutral-indicator-border: #6e7681;
		--color-merge-box-warning-icon-bg: rgba(187, 128, 9, 0.1);
		--color-merge-box-warning-icon-text: #e3b341;
		--color-merge-box-warning-icon-border: rgba(187, 128, 9, 0.4);
		--color-merge-box-warning-box-border: rgba(187, 128, 9, 0.4);
		--color-merge-box-warning-merge-highlight: rgba(187, 128, 9, 0.1);
		--color-merge-box-error-icon-bg: rgba(248, 81, 73, 0.1);
		--color-merge-box-error-icon-text: #f85149;
		--color-merge-box-error-icon-border: rgba(248, 81, 73, 0.4);
		--color-merge-box-error-indicator-bg: #da3633;
		--color-merge-box-error-indicator-border: #f85149;
		--color-project-card-bg: #161b22;
		--color-project-header-bg: #0d1117;
		--color-project-sidebar-bg: #161b22;
		--color-project-gradient-in: #161b22;
		--color-project-gradient-out: rgba(22, 27, 34, 0);
		--color-checks-bg: #090c10;
		--color-checks-run-border-width: 1px;
		--color-checks-container-border-width: 1px;
		--color-checks-text-primary: #c9d1d9;
		--color-checks-text-secondary: #8b949e;
		--color-checks-text-link: #58a6ff;
		--color-checks-btn-icon: #6e7681;
		--color-checks-btn-hover-icon: #c9d1d9;
		--color-checks-btn-hover-bg: #30363d;
		--color-checks-input-text: #8b949e;
		--color-checks-input-placeholder-text: #484f58;
		--color-checks-input-focus-text: #c9d1d9;
		--color-checks-input-bg: #0d1117;
		--color-checks-input-shadow: 0 0 0 1px #21262d;
		--color-checks-dropdown-text: #c9d1d9;
		--color-checks-dropdown-bg: #21262d;
		--color-checks-dropdown-border: #30363d;
		--color-checks-dropdown-hover-text: #f0f6fc;
		--color-checks-dropdown-hover-bg: #1f6feb;
		--color-checks-dropdown-btn-hover-text: #f0f6fc;
		--color-checks-dropdown-btn-hover-bg: #161b22;
		--color-checks-scrollbar-thumb-bg: #30363d;
		--color-checks-header-label-text: #8b949e;
		--color-checks-header-label-open-text: #c9d1d9;
		--color-checks-header-border: #21262d;
		--color-checks-header-icon: #6e7681;
		--color-checks-line-text: #8b949e;
		--color-checks-line-num-text: #8b949e;
		--color-checks-line-timestamp-text: #8b949e;
		--color-checks-line-hover-bg: #161b22;
		--color-checks-line-selected-bg: rgba(56, 139, 253, 0.1);
		--color-checks-line-selected-num-text: #58a6ff;
		--color-checks-line-dt-fm-text: #0d1117;
		--color-checks-line-dt-fm-bg: #d29922;
		--color-checks-gate-bg: rgba(132, 83, 6, 0.15);
		--color-checks-gate-text: #8b949e;
		--color-checks-gate-waiting-text: #e3b341;
		--color-checks-step-header-open-bg: #161b22;
		--color-checks-step-error-text: #f85149;
		--color-checks-step-warning-text: #e3b341;
		--color-checks-logline-text: #6e7681;
		--color-checks-logline-num-text: #8b949e;
		--color-checks-logline-debug-text: #bc8cff;
		--color-checks-logline-error-text: #8b949e;
		--color-checks-logline-error-num-text: #8b949e;
		--color-checks-logline-error-bg: rgba(248, 81, 73, 0.1);
		--color-checks-logline-warning-text: #8b949e;
		--color-checks-logline-warning-num-text: #e3b341;
		--color-checks-logline-warning-bg: rgba(187, 128, 9, 0.1);
		--color-checks-logline-command-text: #58a6ff;
		--color-checks-logline-section-text: #56d364;
		--color-intro-shelf-gradient-left: rgba(56, 139, 253, 0.1);
		--color-intro-shelf-gradient-right: rgba(46, 160, 67, 0.1);
		--color-intro-shelf-gradient-in: #0d1117;
		--color-intro-shelf-gradient-out: rgba(13, 17, 23, 0);
		--color-marketing-icon-primary: #79c0ff;
		--color-marketing-icon-secondary: #1f6feb;
		--color-prettylights-syntax-comment: #8b949e;
		--color-prettylights-syntax-constant: #79c0ff;
		--color-prettylights-syntax-entity: #d2a8ff;
		--color-prettylights-syntax-storage-modifier-import: #c9d1d9;
		--color-prettylights-syntax-entity-tag: #7ee787;
		--color-prettylights-syntax-keyword: #ff7b72;
		--color-prettylights-syntax-string: #a5d6ff;
		--color-prettylights-syntax-variable: #ffa657;
		--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
		--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
		--color-prettylights-syntax-invalid-illegal-bg: #8e1519;
		--color-prettylights-syntax-carriage-return-text: #f0f6fc;
		--color-prettylights-syntax-carriage-return-bg: #b62324;
		--color-prettylights-syntax-string-regexp: #7ee787;
		--color-prettylights-syntax-markup-list: #f2cc60;
		--color-prettylights-syntax-markup-heading: #1f6feb;
		--color-prettylights-syntax-markup-italic: #c9d1d9;
		--color-prettylights-syntax-markup-bold: #c9d1d9;
		--color-prettylights-syntax-markup-deleted-text: #ffdcd7;
		--color-prettylights-syntax-markup-deleted-bg: #67060c;
		--color-prettylights-syntax-markup-inserted-text: #aff5b4;
		--color-prettylights-syntax-markup-inserted-bg: #033a16;
		--color-prettylights-syntax-markup-changed-text: #ffdfb6;
		--color-prettylights-syntax-markup-changed-bg: #5a1e02;
		--color-prettylights-syntax-markup-ignored-text: #c9d1d9;
		--color-prettylights-syntax-markup-ignored-bg: #1158c7;
		--color-prettylights-syntax-meta-diff-range: #d2a8ff;
		--color-prettylights-syntax-brackethighlighter-angle: #8b949e;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
		--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
		--color-codemirror-text: #c9d1d9;
		--color-codemirror-bg: #0d1117;
		--color-codemirror-gutters-bg: #0d1117;
		--color-codemirror-guttermarker-text: #0d1117;
		--color-codemirror-guttermarker-subtle-text: #6e7681;
		--color-codemirror-linenumber-text: #8b949e;
		--color-codemirror-cursor: #f0f6fc;
		--color-codemirror-selection-bg: rgba(121, 192, 255, 0.3);
		--color-codemirror-activeline-bg: #161b22;
		--color-codemirror-matchingbracket-text: #c9d1d9;
		--color-codemirror-lines-bg: #0d1117;
		--color-codemirror-syntax-comment: #8b949e;
		--color-codemirror-syntax-constant: #79c0ff;
		--color-codemirror-syntax-entity: #d2a8ff;
		--color-codemirror-syntax-keyword: #ff7b72;
		--color-codemirror-syntax-storage: #ff7b72;
		--color-codemirror-syntax-string: #a5d6ff;
		--color-codemirror-syntax-support: #79c0ff;
		--color-codemirror-syntax-variable: #ffa657;
		--color-ansi-black: #0d1117;
		--color-ansi-black-bright: #161b22;
		--color-ansi-white: #b1bac4;
		--color-ansi-white-bright: #b1bac4;
		--color-ansi-gray: #6e7681;
		--color-ansi-red: #ff7b72;
		--color-ansi-red-bright: #ffa198;
		--color-ansi-green: #3fb950;
		--color-ansi-green-bright: #56d364;
		--color-ansi-yellow: #d29922;
		--color-ansi-yellow-bright: #e3b341;
		--color-ansi-blue: #58a6ff;
		--color-ansi-blue-bright: #79c0ff;
		--color-ansi-magenta: #bc8cff;
		--color-ansi-magenta-bright: #d2a8ff;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme="dark"] {
		--color-scale-black: #010409;
		--color-scale-white: #f0f6fc;
		--color-scale-gray-0: #f0f6fc;
		--color-scale-gray-1: #c9d1d9;
		--color-scale-gray-2: #b1bac4;
		--color-scale-gray-3: #8b949e;
		--color-scale-gray-4: #6e7681;
		--color-scale-gray-5: #484f58;
		--color-scale-gray-6: #30363d;
		--color-scale-gray-7: #21262d;
		--color-scale-gray-8: #161b22;
		--color-scale-gray-9: #0d1117;
		--color-scale-blue-0: #cae8ff;
		--color-scale-blue-1: #a5d6ff;
		--color-scale-blue-2: #79c0ff;
		--color-scale-blue-3: #58a6ff;
		--color-scale-blue-4: #388bfd;
		--color-scale-blue-5: #1f6feb;
		--color-scale-blue-6: #1158c7;
		--color-scale-blue-7: #0d419d;
		--color-scale-blue-8: #0c2d6b;
		--color-scale-blue-9: #051d4d;
		--color-scale-green-0: #aff5b4;
		--color-scale-green-1: #7ee787;
		--color-scale-green-2: #56d364;
		--color-scale-green-3: #3fb950;
		--color-scale-green-4: #2ea043;
		--color-scale-green-5: #238636;
		--color-scale-green-6: #196c2e;
		--color-scale-green-7: #0f5323;
		--color-scale-green-8: #033a16;
		--color-scale-green-9: #04260f;
		--color-scale-yellow-0: #f8e3a1;
		--color-scale-yellow-1: #f2cc60;
		--color-scale-yellow-2: #e3b341;
		--color-scale-yellow-3: #d29922;
		--color-scale-yellow-4: #bb8009;
		--color-scale-yellow-5: #9e6a03;
		--color-scale-yellow-6: #845306;
		--color-scale-yellow-7: #693e00;
		--color-scale-yellow-8: #4b2900;
		--color-scale-yellow-9: #341a00;
		--color-scale-orange-0: #ffdfb6;
		--color-scale-orange-1: #ffc680;
		--color-scale-orange-2: #ffa657;
		--color-scale-orange-3: #f0883e;
		--color-scale-orange-4: #db6d28;
		--color-scale-orange-5: #bd561d;
		--color-scale-orange-6: #9b4215;
		--color-scale-orange-7: #762d0a;
		--color-scale-orange-8: #5a1e02;
		--color-scale-orange-9: #3d1300;
		--color-scale-red-0: #ffdcd7;
		--color-scale-red-1: #ffc1ba;
		--color-scale-red-2: #ffa198;
		--color-scale-red-3: #ff7b72;
		--color-scale-red-4: #f85149;
		--color-scale-red-5: #da3633;
		--color-scale-red-6: #b62324;
		--color-scale-red-7: #8e1519;
		--color-scale-red-8: #67060c;
		--color-scale-red-9: #490202;
		--color-scale-purple-0: #eddeff;
		--color-scale-purple-1: #e2c5ff;
		--color-scale-purple-2: #d2a8ff;
		--color-scale-purple-3: #bc8cff;
		--color-scale-purple-4: #a371f7;
		--color-scale-purple-5: #8957e5;
		--color-scale-purple-6: #6e40c9;
		--color-scale-purple-7: #553098;
		--color-scale-purple-8: #3c1e70;
		--color-scale-purple-9: #271052;
		--color-scale-pink-0: #ffdaec;
		--color-scale-pink-1: #ffbedd;
		--color-scale-pink-2: #ff9bce;
		--color-scale-pink-3: #f778ba;
		--color-scale-pink-4: #db61a2;
		--color-scale-pink-5: #bf4b8a;
		--color-scale-pink-6: #9e3670;
		--color-scale-pink-7: #7d2457;
		--color-scale-pink-8: #5e103e;
		--color-scale-pink-9: #42062a;
		--color-auto-black: #f0f6fc;
		--color-auto-white: #010409;
		--color-auto-gray-0: #0d1117;
		--color-auto-gray-1: #161b22;
		--color-auto-gray-2: #21262d;
		--color-auto-gray-3: #30363d;
		--color-auto-gray-4: #484f58;
		--color-auto-gray-5: #6e7681;
		--color-auto-gray-6: #8b949e;
		--color-auto-gray-7: #b1bac4;
		--color-auto-gray-8: #c9d1d9;
		--color-auto-gray-9: #f0f6fc;
		--color-auto-blue-0: #051d4d;
		--color-auto-blue-1: #0c2d6b;
		--color-auto-blue-2: #0d419d;
		--color-auto-blue-3: #1158c7;
		--color-auto-blue-4: #1f6feb;
		--color-auto-blue-5: #388bfd;
		--color-auto-blue-6: #58a6ff;
		--color-auto-blue-7: #79c0ff;
		--color-auto-blue-8: #a5d6ff;
		--color-auto-blue-9: #cae8ff;
		--color-auto-green-0: #04260f;
		--color-auto-green-1: #033a16;
		--color-auto-green-2: #0f5323;
		--color-auto-green-3: #196c2e;
		--color-auto-green-4: #238636;
		--color-auto-green-5: #2ea043;
		--color-auto-green-6: #3fb950;
		--color-auto-green-7: #56d364;
		--color-auto-green-8: #7ee787;
		--color-auto-green-9: #aff5b4;
		--color-auto-yellow-0: #341a00;
		--color-auto-yellow-1: #4b2900;
		--color-auto-yellow-2: #693e00;
		--color-auto-yellow-3: #845306;
		--color-auto-yellow-4: #9e6a03;
		--color-auto-yellow-5: #bb8009;
		--color-auto-yellow-6: #d29922;
		--color-auto-yellow-7: #e3b341;
		--color-auto-yellow-8: #f2cc60;
		--color-auto-yellow-9: #f8e3a1;
		--color-auto-orange-0: #3d1300;
		--color-auto-orange-1: #5a1e02;
		--color-auto-orange-2: #762d0a;
		--color-auto-orange-3: #9b4215;
		--color-auto-orange-4: #bd561d;
		--color-auto-orange-5: #db6d28;
		--color-auto-orange-6: #f0883e;
		--color-auto-orange-7: #ffa657;
		--color-auto-orange-8: #ffc680;
		--color-auto-orange-9: #ffdfb6;
		--color-auto-red-0: #490202;
		--color-auto-red-1: #67060c;
		--color-auto-red-2: #8e1519;
		--color-auto-red-3: #b62324;
		--color-auto-red-4: #da3633;
		--color-auto-red-5: #f85149;
		--color-auto-red-6: #ff7b72;
		--color-auto-red-7: #ffa198;
		--color-auto-red-8: #ffc1ba;
		--color-auto-red-9: #ffdcd7;
		--color-auto-purple-0: #271052;
		--color-auto-purple-1: #3c1e70;
		--color-auto-purple-2: #553098;
		--color-auto-purple-3: #6e40c9;
		--color-auto-purple-4: #8957e5;
		--color-auto-purple-5: #a371f7;
		--color-auto-purple-6: #bc8cff;
		--color-auto-purple-7: #d2a8ff;
		--color-auto-purple-8: #e2c5ff;
		--color-auto-purple-9: #eddeff;
		--color-auto-pink-0: #42062a;
		--color-auto-pink-1: #5e103e;
		--color-auto-pink-2: #7d2457;
		--color-auto-pink-3: #9e3670;
		--color-auto-pink-4: #bf4b8a;
		--color-auto-pink-5: #db61a2;
		--color-auto-pink-6: #f778ba;
		--color-auto-pink-7: #ff9bce;
		--color-auto-pink-8: #ffbedd;
		--color-auto-pink-9: #ffdaec;
		--color-text-primary: #c9d1d9;
		--color-text-secondary: #8b949e;
		--color-text-tertiary: #8b949e;
		--color-text-placeholder: #484f58;
		--color-text-disabled: #484f58;
		--color-text-inverse: #0d1117;
		--color-text-link: #58a6ff;
		--color-text-danger: #f85149;
		--color-text-success: #56d364;
		--color-text-warning: #e3b341;
		--color-text-white: #f0f6fc;
		--color-icon-primary: #c9d1d9;
		--color-icon-secondary: #6e7681;
		--color-icon-tertiary: #484f58;
		--color-icon-info: #79c0ff;
		--color-icon-danger: #f85149;
		--color-icon-success: #56d364;
		--color-icon-warning: #e3b341;
		--color-border-primary: #30363d;
		--color-border-secondary: #21262d;
		--color-border-tertiary: #6e7681;
		--color-border-overlay: #30363d;
		--color-border-inverse: #f0f6fc;
		--color-border-info: rgba(56, 139, 253, 0.4);
		--color-border-danger: rgba(248, 81, 73, 0.4);
		--color-border-success: rgba(63, 185, 80, 0.4);
		--color-border-warning: rgba(187, 128, 9, 0.4);
		--color-bg-canvas: #0d1117;
		--color-bg-canvas-mobile: #010409;
		--color-bg-canvas-inverse: #f0f6fc;
		--color-bg-canvas-inset: #090c10;
		--color-bg-primary: #0d1117;
		--color-bg-secondary: #0d1117;
		--color-bg-tertiary: #161b22;
		--color-bg-overlay: #21262d;
		--color-bg-backdrop: rgba(1, 4, 9, 0.8);
		--color-bg-info: rgba(56, 139, 253, 0.1);
		--color-bg-info-inverse: #388bfd;
		--color-bg-danger: rgba(248, 81, 73, 0.1);
		--color-bg-danger-inverse: #da3633;
		--color-bg-success: rgba(46, 160, 67, 0.1);
		--color-bg-success-inverse: #2ea043;
		--color-bg-warning: rgba(187, 128, 9, 0.1);
		--color-bg-warning-inverse: #bb8009;
		--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-medium: 0 3px 6px #010409;
		--color-shadow-large: 0 8px 24px #010409;
		--color-shadow-extra-large: 0 12px 48px #010409;
		--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
		--color-state-hover-primary-bg: #1f6feb;
		--color-state-hover-primary-border: #388bfd;
		--color-state-hover-primary-text: #f0f6fc;
		--color-state-hover-primary-icon: #f0f6fc;
		--color-state-hover-secondary-bg: #161b22;
		--color-state-hover-secondary-border: #161b22;
		--color-state-selected-primary-bg: #1f6feb;
		--color-state-selected-primary-border: #388bfd;
		--color-state-selected-primary-text: #f0f6fc;
		--color-state-selected-primary-icon: #f0f6fc;
		--color-state-focus-border: #388bfd;
		--color-state-focus-shadow: 0 0 0 3px #0c2d6b;
		--color-fade-fg-10: rgba(240, 246, 252, 0.1);
		--color-fade-fg-15: rgba(240, 246, 252, 0.15);
		--color-fade-fg-30: rgba(240, 246, 252, 0.3);
		--color-fade-fg-50: rgba(240, 246, 252, 0.5);
		--color-fade-fg-70: rgba(240, 246, 252, 0.7);
		--color-fade-fg-85: rgba(240, 246, 252, 0.85);
		--color-fade-black-10: rgba(1, 4, 9, 0.1);
		--color-fade-black-15: rgba(1, 4, 9, 0.15);
		--color-fade-black-30: rgba(1, 4, 9, 0.3);
		--color-fade-black-50: rgba(1, 4, 9, 0.5);
		--color-fade-black-70: rgba(1, 4, 9, 0.7);
		--color-fade-black-85: rgba(1, 4, 9, 0.85);
		--color-fade-white-10: rgba(240, 246, 252, 0.1);
		--color-fade-white-15: rgba(240, 246, 252, 0.15);
		--color-fade-white-30: rgba(240, 246, 252, 0.3);
		--color-fade-white-50: rgba(240, 246, 252, 0.5);
		--color-fade-white-70: rgba(240, 246, 252, 0.7);
		--color-fade-white-85: rgba(240, 246, 252, 0.85);
		--color-alert-info-text: #79c0ff;
		--color-alert-info-icon: #79c0ff;
		--color-alert-info-bg: rgba(56, 139, 253, 0.1);
		--color-alert-info-border: rgba(56, 139, 253, 0.4);
		--color-alert-warn-text: #e3b341;
		--color-alert-warn-icon: #e3b341;
		--color-alert-warn-bg: rgba(187, 128, 9, 0.1);
		--color-alert-warn-border: rgba(187, 128, 9, 0.4);
		--color-alert-error-text: #ff7b72;
		--color-alert-error-icon: #ff7b72;
		--color-alert-error-bg: rgba(248, 81, 73, 0.1);
		--color-alert-error-border: rgba(248, 81, 73, 0.4);
		--color-alert-success-text: #56d364;
		--color-alert-success-icon: #56d364;
		--color-alert-success-bg: rgba(46, 160, 67, 0.1);
		--color-alert-success-border: rgba(46, 160, 67, 0.4);
		--color-autocomplete-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
		--color-autocomplete-row-border: #30363d;
		--color-blankslate-icon: #535c66;
		--color-btn-text: #c9d1d9;
		--color-btn-bg: #21262d;
		--color-btn-border: #30363d;
		--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-hover-bg: #30363d;
		--color-btn-hover-border: #8b949e;
		--color-btn-selected-bg: #161b22;
		--color-btn-focus-bg: #21262d;
		--color-btn-focus-border: #8b949e;
		--color-btn-focus-shadow: 0 0 0 3px rgba(139, 148, 158, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(1, 4, 9, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(31, 111, 235, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #238636;
		--color-btn-primary-border: #2ea043;
		--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-hover-bg: #2ea043;
		--color-btn-primary-hover-border: #3fb950;
		--color-btn-primary-selected-bg: #238636;
		--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
		--color-btn-primary-disabled-bg: rgba(35, 134, 54, 0.6);
		--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-btn-primary-focus-bg: #238636;
		--color-btn-primary-focus-border: #3fb950;
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: #f0f6fc;
		--color-btn-primary-counter-bg: rgba(240, 246, 252, 0.2);
		--color-btn-outline-text: #58a6ff;
		--color-btn-outline-hover-text: #58a6ff;
		--color-btn-outline-hover-bg: #30363d;
		--color-btn-outline-hover-border: #58a6ff;
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(1, 4, 9, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(240, 246, 252, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(240, 246, 252, 0.2);
		--color-btn-outline-selected-text: #f0f6fc;
		--color-btn-outline-selected-bg: #0d419d;
		--color-btn-outline-selected-border: rgba(240, 246, 252, 0.1);
		--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-outline-disabled-text: rgba(88, 166, 255, 0.5);
		--color-btn-outline-disabled-bg: #0d1117;
		--color-btn-outline-disabled-counter-bg: rgba(31, 111, 235, 0.05);
		--color-btn-outline-focus-border: #58a6ff;
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(17, 88, 199, 0.4);
		--color-btn-outline-counter-bg: rgba(31, 111, 235, 0.1);
		--color-btn-danger-text: #f85149;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #da3633;
		--color-btn-danger-hover-border: #f85149;
		--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #b62324;
		--color-btn-danger-selected-border: rgba(240, 246, 252, 0.1);
		--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-disabled-text: rgba(248, 81, 73, 0.5);
		--color-btn-danger-disabled-bg: #0d1117;
		--color-btn-danger-disabled-counter-bg: rgba(218, 54, 51, 0.05);
		--color-btn-danger-focus-border: #f85149;
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(182, 35, 36, 0.4);
		--color-btn-danger-counter-bg: rgba(218, 54, 51, 0.1);
		--color-btn-danger-icon: #f85149;
		--color-btn-danger-hover-icon: #f0f6fc;
		--color-btn-counter-bg: #30363d;
		--color-counter-text: #c9d1d9;
		--color-counter-bg: #30363d;
		--color-counter-primary-text: #c9d1d9;
		--color-counter-primary-bg: #6e7681;
		--color-counter-secondary-text: #8b949e;
		--color-counter-secondary-bg: rgba(139, 148, 158, 0.2);
		--color-dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
		--color-label-border: #30363d;
		--color-label-primary-text: #b1bac4;
		--color-label-primary-border: #6e7681;
		--color-label-secondary-text: #8b949e;
		--color-label-secondary-border: #30363d;
		--color-label-info-text: #388bfd;
		--color-label-info-border: rgba(56, 139, 253, 0.4);
		--color-label-success-text: #3fb950;
		--color-label-success-border: rgba(46, 160, 67, 0.4);
		--color-label-warning-text: #e3b341;
		--color-label-warning-border: rgba(242, 211, 91, 0.4);
		--color-label-danger-text: #f85149;
		--color-label-danger-border: rgba(248, 81, 73, 0.4);
		--color-label-orange-text: #db6d28;
		--color-label-orange-border: rgba(219, 109, 40, 0.4);
		--color-input-bg: #0d1117;
		--color-input-contrast-bg: rgba(1, 4, 9, 0.5);
		--color-input-border: #21262d;
		--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-input-disabled-bg: #161b22;
		--color-input-disabled-border: #30363d;
		--color-input-warning-border: #d29922;
		--color-input-error-border: #f85149;
		--color-input-tooltip-success-text: #56d364;
		--color-input-tooltip-success-bg: #101f1b;
		--color-input-tooltip-success-border: #1c532b;
		--color-input-tooltip-warning-text: #e3b341;
		--color-input-tooltip-warning-bg: #1e1c16;
		--color-input-tooltip-warning-border: #5d4411;
		--color-input-tooltip-error-text: #ff7b72;
		--color-input-tooltip-error-bg: #25171c;
		--color-input-tooltip-error-border: #792e2e;
		--color-avatar-bg: rgba(240, 246, 252, 0.1);
		--color-avatar-border: rgba(240, 246, 252, 0.1);
		--color-avatar-stack-fade: #30363d;
		--color-avatar-stack-fade-more: #21262d;
		--color-avatar-child-shadow: -2px -2px 0 #0d1117;
		--color-toast-text: #c9d1d9;
		--color-toast-bg: #30363d;
		--color-toast-border: #6e7681;
		--color-toast-shadow: 0 8px 24px #010409;
		--color-toast-icon: #f0f6fc;
		--color-toast-icon-bg: #1f6feb;
		--color-toast-icon-border: #388bfd;
		--color-toast-success-text: #c9d1d9;
		--color-toast-success-border: #6e7681;
		--color-toast-success-icon: #f0f6fc;
		--color-toast-success-icon-bg: #2ea043;
		--color-toast-success-icon-border: #3fb950;
		--color-toast-warning-text: #c9d1d9;
		--color-toast-warning-border: #6e7681;
		--color-toast-warning-icon: #f0f6fc;
		--color-toast-warning-icon-bg: #bb8009;
		--color-toast-warning-icon-border: #d29922;
		--color-toast-danger-text: #c9d1d9;
		--color-toast-danger-border: #6e7681;
		--color-toast-danger-icon: #f0f6fc;
		--color-toast-danger-icon-bg: #da3633;
		--color-toast-danger-icon-border: #f85149;
		--color-toast-loading-text: #c9d1d9;
		--color-toast-loading-border: #6e7681;
		--color-toast-loading-icon: #f0f6fc;
		--color-toast-loading-icon-bg: #6e7681;
		--color-toast-loading-icon-border: #8b949e;
		--color-timeline-text: #b1bac4;
		--color-timeline-badge-bg: #0d1117;
		--color-timeline-badge-success-border: #2ea043;
		--color-timeline-target-badge-border: #1f6feb;
		--color-timeline-target-badge-shadow: #0d419d;
		--color-select-menu-border-secondary: #30363d;
		--color-select-menu-shadow: 0 0 18px rgba(1, 4, 9, 0.4);
		--color-select-menu-backdrop-bg: rgba(1, 4, 9, 0.5);
		--color-select-menu-backdrop-border: #484f58;
		--color-select-menu-tap-highlight: rgba(48, 54, 61, 0.5);
		--color-select-menu-tap-focus-bg: #0c2d6b;
		--color-box-blue-border: #0d419d;
		--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
		--color-box-row-blue-bg: rgba(121, 192, 255, 0.1);
		--color-box-header-blue-bg: #0d1117;
		--color-box-header-blue-border: #30363d;
		--color-box-border-info: rgba(56, 139, 253, 0.4);
		--color-box-bg-info: rgba(56, 139, 253, 0.1);
		--color-box-border-warning: rgba(187, 128, 9, 0.4);
		--color-box-bg-warning: rgba(187, 128, 9, 0.1);
		--color-branch-name-text: #c9d1d9;
		--color-branch-name-icon: #b1bac4;
		--color-branch-name-bg: rgba(88, 166, 255, 0.1);
		--color-branch-name-link-text: #58a6ff;
		--color-branch-name-link-icon: #58a6ff;
		--color-branch-name-link-bg: rgba(88, 166, 255, 0.1);
		--color-markdown-code-bg: rgba(240, 246, 252, 0.15);
		--color-markdown-frame-border: #3b434b;
		--color-markdown-blockquote-border: #3b434b;
		--color-markdown-table-border: #3b434b;
		--color-markdown-table-tr-border: #272c32;
		--color-menu-heading-text: #8b949e;
		--color-menu-border-active: #f78166;
		--color-menu-bg-active: #161b22;
		--color-sidenav-selected-bg: #21262d;
		--color-sidenav-border-active: #f78166;
		--color-header-text: rgba(240, 246, 252, 0.7);
		--color-header-bg: #161b22;
		--color-header-logo: #f0f6fc;
		--color-filter-item-bar-bg: #12161c;
		--color-hidden-text-expander-bg: #21262d;
		--color-hidden-text-expander-bg-hover: #30363d;
		--color-drag-and-drop-border: #25292f;
		--color-upload-enabled-border: #3b434b;
		--color-upload-enabled-border-focused: #4487ee;
		--color-previewable-comment-form-border: #25292f;
		--color-underlinenav-border: rgba(48, 54, 61, 0);
		--color-underlinenav-border-hover: #30363d;
		--color-underlinenav-border-active: #f78166;
		--color-underlinenav-text: #8b949e;
		--color-underlinenav-text-hover: #c9d1d9;
		--color-underlinenav-text-active: #c9d1d9;
		--color-underlinenav-icon: #6e7681;
		--color-underlinenav-icon-hover: #c9d1d9;
		--color-underlinenav-icon-active: #c9d1d9;
		--color-underlinenav-counter-text: #8b949e;
		--color-underlinenav-counter-bg: rgba(139, 148, 158, 0.2);
		--color-verified-badge-text: #3fb950;
		--color-verified-badge-bg: rgba(63, 185, 80, 0.1);
		--color-verified-badge-border: rgba(63, 185, 80, 0.4);
		--color-social-count-bg: #21262d;
		--color-tooltip-text: #f0f6fc;
		--color-tooltip-bg: #6e7681;
		--color-header-search-bg: #0d1117;
		--color-header-search-border: #21262d;
		--color-search-keyword-hl: rgba(187, 128, 9, 0.4);
		--color-diffstat-neutral-bg: #30363d;
		--color-diffstat-neutral-border: rgba(240, 246, 252, 0.1);
		--color-diffstat-deletion-bg: #da3633;
		--color-diffstat-deletion-border: #f85149;
		--color-diffstat-addition-bg: #238636;
		--color-diffstat-addition-border: #2ea043;
		--color-mktg-success: #29933d;
		--color-mktg-info: #2a7bf3;
		--color-mktg-bg-shade-gradient-top: rgba(1, 4, 9, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(1, 4, 9, 0);
		--color-mktg-btn-bg: #1f6feb;
		--color-mktg-btn-border: #1f6feb;
		--color-mktg-btn-text: #f0f6fc;
		--color-mktg-btn-icon: #f0f6fc;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(31, 111, 235, 0.3);
		--color-mktg-btn-hover-bg: #388bfd;
		--color-mktg-btn-hover-border: #388bfd;
		--color-mktg-btn-disabled-bg: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-disabled-icon: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-primary-bg: #238636;
		--color-mktg-btn-primary-border: #238636;
		--color-mktg-btn-primary-text: #f0f6fc;
		--color-mktg-btn-primary-icon: #f0f6fc;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(35, 134, 54, 0.3);
		--color-mktg-btn-primary-hover-bg: #2ea043;
		--color-mktg-btn-primary-hover-border: #2ea043;
		--color-mktg-btn-primary-disabled-bg: rgba(46, 160, 67, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-primary-disabled-icon: rgba(240, 246, 252, 0.5);
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-outline-text: #388bfd;
		--color-mktg-btn-outline-icon: #388bfd;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(56, 139, 253, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #388bfd;
		--color-mktg-btn-outline-hover-text: #58a6ff;
		--color-mktg-btn-outline-hover-icon: #58a6ff;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(56, 139, 253, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(56, 139, 253, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-text: #c9d1d9;
		--color-mktg-btn-dark-icon: #c9d1d9;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(201, 209, 217, 0.3);
		--color-mktg-btn-dark-hover-bg: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-hover-border: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-hover-text: #0d1117;
		--color-mktg-btn-dark-hover-icon: #0d1117;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(201, 209, 217, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(201, 209, 217, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(201, 209, 217, 0.5);
		--color-files-explorer-icon: #6e7681;
		--color-hl-author-bg: #051d4d;
		--color-hl-author-border: #0d419d;
		--color-logo-subdued: #30363d;
		--color-discussion-border: #34513b;
		--color-discussion-bg-success: rgba(46, 160, 67, 0.1);
		--color-actions-workflow-table-sticky-bg: rgba(13, 17, 23, 0.95);
		--color-repo-language-color-border: rgba(240, 246, 252, 0.2);
		--color-code-selection-bg: rgba(121, 192, 255, 0.3);
		--color-highlight-text: #ffd467;
		--color-highlight-bg: rgba(204, 143, 44, 0.38);
		--color-blob-line-highlight-bg: rgba(210, 153, 34, 0.15);
		--color-blob-line-highlight-border: #e3b341;
		--color-diff-addition-text: #56d364;
		--color-diff-addition-bg: rgba(46, 160, 67, 0.2);
		--color-diff-addition-border: #196c2e;
		--color-diff-deletion-text: #f85149;
		--color-diff-deletion-bg: rgba(218, 54, 51, 0.2);
		--color-diff-deletion-border: #b62324;
		--color-diff-change-text: #e3b341;
		--color-diff-change-bg: #341a00;
		--color-diff-change-border: #9e6a03;
		--color-diff-blob-num-text: rgba(240, 246, 252, 0.3);
		--color-diff-blob-num-hover-text: rgba(240, 246, 252, 0.6);
		--color-diff-blob-addition-num-text: #3fb950;
		--color-diff-blob-addition-num-hover-text: #7ee787;
		--color-diff-blob-addition-num-bg: rgba(46, 160, 67, 0.1);
		--color-diff-blob-addition-line-bg: rgba(46, 160, 67, 0.2);
		--color-diff-blob-addition-word-bg: rgba(46, 160, 67, 0.55);
		--color-diff-blob-deletion-num-text: #f85149;
		--color-diff-blob-deletion-num-hover-text: #ffa198;
		--color-diff-blob-deletion-num-bg: rgba(218, 54, 51, 0.1);
		--color-diff-blob-deletion-line-bg: rgba(218, 54, 51, 0.2);
		--color-diff-blob-deletion-word-bg: rgba(218, 54, 51, 0.5);
		--color-diff-blob-hunk-text: #8b949e;
		--color-diff-blob-hunk-num-bg: rgba(88, 166, 255, 0.15);
		--color-diff-blob-hunk-line-bg: rgba(88, 166, 255, 0.1);
		--color-diff-blob-empty-block-bg: #161b22;
		--color-diff-blob-selected-line-highlight-bg: rgba(187, 128, 9, 0.1);
		--color-diff-blob-selected-line-highlight-border: #bb8009;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
		--color-diff-blob-expander-icon: #8b949e;
		--color-diff-blob-expander-hover-icon: #f0f6fc;
		--color-diff-blob-expander-hover-bg: #1f6feb;
		--color-diff-blob-comment-button-icon: #f0f6fc;
		--color-diff-blob-comment-button-bg: #1f6feb;
		--color-diff-blob-comment-button-gradient-bg: #367eed;
		--color-global-nav-logo: #f0f6fc;
		--color-global-nav-bg: #161b22;
		--color-global-nav-text: #c9d1d9;
		--color-global-nav-icon: #c9d1d9;
		--color-global-nav-input-bg: #0d1117;
		--color-global-nav-input-border: #21262d;
		--color-global-nav-input-icon: #21262d;
		--color-global-nav-input-placeholder: #484f58;
		--color-calendar-graph-day-bg: #161b22;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #003820;
		--color-calendar-graph-day-L2-bg: #00602d;
		--color-calendar-graph-day-L3-bg: #10983d;
		--color-calendar-graph-day-L4-bg: #27d545;
		--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
		--color-footer-invertocat-octicon: #30363d;
		--color-footer-invertocat-octicon-hover: #6e7681;
		--color-pr-state-draft-text: #8b949e;
		--color-pr-state-draft-bg: rgba(139, 148, 158, 0.1);
		--color-pr-state-draft-border: rgba(139, 148, 158, 0.4);
		--color-pr-state-open-text: #3fb950;
		--color-pr-state-open-bg: rgba(63, 185, 80, 0.1);
		--color-pr-state-open-border: rgba(63, 185, 80, 0.4);
		--color-pr-state-merged-text: #a371f7;
		--color-pr-state-merged-bg: rgba(188, 140, 255, 0.1);
		--color-pr-state-merged-border: rgba(188, 140, 255, 0.4);
		--color-pr-state-closed-text: #f85149;
		--color-pr-state-closed-bg: rgba(218, 54, 51, 0.1);
		--color-pr-state-closed-border: rgba(218, 54, 51, 0.4);
		--color-topic-tag-text: #58a6ff;
		--color-topic-tag-bg: rgba(56, 139, 253, 0.1);
		--color-topic-tag-hover-bg: rgba(56, 139, 253, 0.2);
		--color-topic-tag-active-bg: rgba(56, 139, 253, 0.15);
		--color-merge-box-success-icon-bg: rgba(46, 160, 67, 0.1);
		--color-merge-box-success-icon-text: #3fb950;
		--color-merge-box-success-icon-border: rgba(46, 160, 67, 0.4);
		--color-merge-box-success-indicator-bg: #238636;
		--color-merge-box-success-indicator-border: #2ea043;
		--color-merge-box-merged-icon-bg: rgba(188, 140, 255, 0.1);
		--color-merge-box-merged-icon-text: #a371f7;
		--color-merge-box-merged-icon-border: rgba(188, 140, 255, 0.4);
		--color-merge-box-merged-box-border: rgba(188, 140, 255, 0.4);
		--color-merge-box-neutral-icon-bg: rgba(201, 209, 217, 0.1);
		--color-merge-box-neutral-icon-text: #8b949e;
		--color-merge-box-neutral-icon-border: rgba(201, 209, 217, 0.4);
		--color-merge-box-neutral-indicator-bg: #484f58;
		--color-merge-box-neutral-indicator-border: #6e7681;
		--color-merge-box-warning-icon-bg: rgba(187, 128, 9, 0.1);
		--color-merge-box-warning-icon-text: #e3b341;
		--color-merge-box-warning-icon-border: rgba(187, 128, 9, 0.4);
		--color-merge-box-warning-box-border: rgba(187, 128, 9, 0.4);
		--color-merge-box-warning-merge-highlight: rgba(187, 128, 9, 0.1);
		--color-merge-box-error-icon-bg: rgba(248, 81, 73, 0.1);
		--color-merge-box-error-icon-text: #f85149;
		--color-merge-box-error-icon-border: rgba(248, 81, 73, 0.4);
		--color-merge-box-error-indicator-bg: #da3633;
		--color-merge-box-error-indicator-border: #f85149;
		--color-project-card-bg: #161b22;
		--color-project-header-bg: #0d1117;
		--color-project-sidebar-bg: #161b22;
		--color-project-gradient-in: #161b22;
		--color-project-gradient-out: rgba(22, 27, 34, 0);
		--color-checks-bg: #090c10;
		--color-checks-run-border-width: 1px;
		--color-checks-container-border-width: 1px;
		--color-checks-text-primary: #c9d1d9;
		--color-checks-text-secondary: #8b949e;
		--color-checks-text-link: #58a6ff;
		--color-checks-btn-icon: #6e7681;
		--color-checks-btn-hover-icon: #c9d1d9;
		--color-checks-btn-hover-bg: #30363d;
		--color-checks-input-text: #8b949e;
		--color-checks-input-placeholder-text: #484f58;
		--color-checks-input-focus-text: #c9d1d9;
		--color-checks-input-bg: #0d1117;
		--color-checks-input-shadow: 0 0 0 1px #21262d;
		--color-checks-dropdown-text: #c9d1d9;
		--color-checks-dropdown-bg: #21262d;
		--color-checks-dropdown-border: #30363d;
		--color-checks-dropdown-hover-text: #f0f6fc;
		--color-checks-dropdown-hover-bg: #1f6feb;
		--color-checks-dropdown-btn-hover-text: #f0f6fc;
		--color-checks-dropdown-btn-hover-bg: #161b22;
		--color-checks-scrollbar-thumb-bg: #30363d;
		--color-checks-header-label-text: #8b949e;
		--color-checks-header-label-open-text: #c9d1d9;
		--color-checks-header-border: #21262d;
		--color-checks-header-icon: #6e7681;
		--color-checks-line-text: #8b949e;
		--color-checks-line-num-text: #8b949e;
		--color-checks-line-timestamp-text: #8b949e;
		--color-checks-line-hover-bg: #161b22;
		--color-checks-line-selected-bg: rgba(56, 139, 253, 0.1);
		--color-checks-line-selected-num-text: #58a6ff;
		--color-checks-line-dt-fm-text: #0d1117;
		--color-checks-line-dt-fm-bg: #d29922;
		--color-checks-gate-bg: rgba(132, 83, 6, 0.15);
		--color-checks-gate-text: #8b949e;
		--color-checks-gate-waiting-text: #e3b341;
		--color-checks-step-header-open-bg: #161b22;
		--color-checks-step-error-text: #f85149;
		--color-checks-step-warning-text: #e3b341;
		--color-checks-logline-text: #6e7681;
		--color-checks-logline-num-text: #8b949e;
		--color-checks-logline-debug-text: #bc8cff;
		--color-checks-logline-error-text: #8b949e;
		--color-checks-logline-error-num-text: #8b949e;
		--color-checks-logline-error-bg: rgba(248, 81, 73, 0.1);
		--color-checks-logline-warning-text: #8b949e;
		--color-checks-logline-warning-num-text: #e3b341;
		--color-checks-logline-warning-bg: rgba(187, 128, 9, 0.1);
		--color-checks-logline-command-text: #58a6ff;
		--color-checks-logline-section-text: #56d364;
		--color-intro-shelf-gradient-left: rgba(56, 139, 253, 0.1);
		--color-intro-shelf-gradient-right: rgba(46, 160, 67, 0.1);
		--color-intro-shelf-gradient-in: #0d1117;
		--color-intro-shelf-gradient-out: rgba(13, 17, 23, 0);
		--color-marketing-icon-primary: #79c0ff;
		--color-marketing-icon-secondary: #1f6feb;
		--color-prettylights-syntax-comment: #8b949e;
		--color-prettylights-syntax-constant: #79c0ff;
		--color-prettylights-syntax-entity: #d2a8ff;
		--color-prettylights-syntax-storage-modifier-import: #c9d1d9;
		--color-prettylights-syntax-entity-tag: #7ee787;
		--color-prettylights-syntax-keyword: #ff7b72;
		--color-prettylights-syntax-string: #a5d6ff;
		--color-prettylights-syntax-variable: #ffa657;
		--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
		--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
		--color-prettylights-syntax-invalid-illegal-bg: #8e1519;
		--color-prettylights-syntax-carriage-return-text: #f0f6fc;
		--color-prettylights-syntax-carriage-return-bg: #b62324;
		--color-prettylights-syntax-string-regexp: #7ee787;
		--color-prettylights-syntax-markup-list: #f2cc60;
		--color-prettylights-syntax-markup-heading: #1f6feb;
		--color-prettylights-syntax-markup-italic: #c9d1d9;
		--color-prettylights-syntax-markup-bold: #c9d1d9;
		--color-prettylights-syntax-markup-deleted-text: #ffdcd7;
		--color-prettylights-syntax-markup-deleted-bg: #67060c;
		--color-prettylights-syntax-markup-inserted-text: #aff5b4;
		--color-prettylights-syntax-markup-inserted-bg: #033a16;
		--color-prettylights-syntax-markup-changed-text: #ffdfb6;
		--color-prettylights-syntax-markup-changed-bg: #5a1e02;
		--color-prettylights-syntax-markup-ignored-text: #c9d1d9;
		--color-prettylights-syntax-markup-ignored-bg: #1158c7;
		--color-prettylights-syntax-meta-diff-range: #d2a8ff;
		--color-prettylights-syntax-brackethighlighter-angle: #8b949e;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
		--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
		--color-codemirror-text: #c9d1d9;
		--color-codemirror-bg: #0d1117;
		--color-codemirror-gutters-bg: #0d1117;
		--color-codemirror-guttermarker-text: #0d1117;
		--color-codemirror-guttermarker-subtle-text: #6e7681;
		--color-codemirror-linenumber-text: #8b949e;
		--color-codemirror-cursor: #f0f6fc;
		--color-codemirror-selection-bg: rgba(121, 192, 255, 0.3);
		--color-codemirror-activeline-bg: #161b22;
		--color-codemirror-matchingbracket-text: #c9d1d9;
		--color-codemirror-lines-bg: #0d1117;
		--color-codemirror-syntax-comment: #8b949e;
		--color-codemirror-syntax-constant: #79c0ff;
		--color-codemirror-syntax-entity: #d2a8ff;
		--color-codemirror-syntax-keyword: #ff7b72;
		--color-codemirror-syntax-storage: #ff7b72;
		--color-codemirror-syntax-string: #a5d6ff;
		--color-codemirror-syntax-support: #79c0ff;
		--color-codemirror-syntax-variable: #ffa657;
		--color-ansi-black: #0d1117;
		--color-ansi-black-bright: #161b22;
		--color-ansi-white: #b1bac4;
		--color-ansi-white-bright: #b1bac4;
		--color-ansi-gray: #6e7681;
		--color-ansi-red: #ff7b72;
		--color-ansi-red-bright: #ffa198;
		--color-ansi-green: #3fb950;
		--color-ansi-green-bright: #56d364;
		--color-ansi-yellow: #d29922;
		--color-ansi-yellow-bright: #e3b341;
		--color-ansi-blue: #58a6ff;
		--color-ansi-blue-bright: #79c0ff;
		--color-ansi-magenta: #bc8cff;
		--color-ansi-magenta-bright: #d2a8ff;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
[data-color-mode="light"][data-light-theme="dark_dimmed"],
[data-color-mode="dark"][data-dark-theme="dark_dimmed"] {
	--color-scale-black: #1c2128;
	--color-scale-white: #cdd9e5;
	--color-scale-gray-0: #cdd9e5;
	--color-scale-gray-1: #adbac7;
	--color-scale-gray-2: #909dab;
	--color-scale-gray-3: #768390;
	--color-scale-gray-4: #636e7b;
	--color-scale-gray-5: #545d68;
	--color-scale-gray-6: #444c56;
	--color-scale-gray-7: #373e47;
	--color-scale-gray-8: #2d333b;
	--color-scale-gray-9: #22272e;
	--color-scale-blue-0: #c6e6ff;
	--color-scale-blue-1: #96d0ff;
	--color-scale-blue-2: #6cb6ff;
	--color-scale-blue-3: #539bf5;
	--color-scale-blue-4: #4184e4;
	--color-scale-blue-5: #316dca;
	--color-scale-blue-6: #255ab2;
	--color-scale-blue-7: #1b4b91;
	--color-scale-blue-8: #143d79;
	--color-scale-blue-9: #0f2d5c;
	--color-scale-green-0: #b4f1b4;
	--color-scale-green-1: #8ddb8c;
	--color-scale-green-2: #6bc46d;
	--color-scale-green-3: #57ab5a;
	--color-scale-green-4: #46954a;
	--color-scale-green-5: #347d39;
	--color-scale-green-6: #2b6a30;
	--color-scale-green-7: #245829;
	--color-scale-green-8: #1b4721;
	--color-scale-green-9: #113417;
	--color-scale-yellow-0: #fbe090;
	--color-scale-yellow-1: #eac55f;
	--color-scale-yellow-2: #daaa3f;
	--color-scale-yellow-3: #c69026;
	--color-scale-yellow-4: #ae7c14;
	--color-scale-yellow-5: #966600;
	--color-scale-yellow-6: #805400;
	--color-scale-yellow-7: #6c4400;
	--color-scale-yellow-8: #593600;
	--color-scale-yellow-9: #452700;
	--color-scale-orange-0: #ffddb0;
	--color-scale-orange-1: #ffbc6f;
	--color-scale-orange-2: #f69d50;
	--color-scale-orange-3: #e0823d;
	--color-scale-orange-4: #cc6b2c;
	--color-scale-orange-5: #ae5622;
	--color-scale-orange-6: #94471b;
	--color-scale-orange-7: #7f3913;
	--color-scale-orange-8: #682d0f;
	--color-scale-orange-9: #4d210c;
	--color-scale-red-0: #ffd8d3;
	--color-scale-red-1: #ffb8b0;
	--color-scale-red-2: #ff938a;
	--color-scale-red-3: #f47067;
	--color-scale-red-4: #e5534b;
	--color-scale-red-5: #c93c37;
	--color-scale-red-6: #ad2e2c;
	--color-scale-red-7: #922323;
	--color-scale-red-8: #78191b;
	--color-scale-red-9: #78191b;
	--color-scale-purple-0: #eedcff;
	--color-scale-purple-1: #dcbdfb;
	--color-scale-purple-2: #dcbdfb;
	--color-scale-purple-3: #b083f0;
	--color-scale-purple-4: #986ee2;
	--color-scale-purple-5: #8256d0;
	--color-scale-purple-6: #6b44bc;
	--color-scale-purple-7: #5936a2;
	--color-scale-purple-8: #472c82;
	--color-scale-purple-9: #352160;
	--color-scale-pink-0: #ffd7eb;
	--color-scale-pink-1: #ffb3d8;
	--color-scale-pink-2: #fc8dc7;
	--color-scale-pink-3: #e275ad;
	--color-scale-pink-4: #c96198;
	--color-scale-pink-5: #ae4c82;
	--color-scale-pink-6: #983b6e;
	--color-scale-pink-7: #7e325a;
	--color-scale-pink-8: #69264a;
	--color-scale-pink-9: #551639;
	--color-auto-black: #cdd9e5;
	--color-auto-white: #1c2128;
	--color-auto-gray-0: #22272e;
	--color-auto-gray-1: #2d333b;
	--color-auto-gray-2: #373e47;
	--color-auto-gray-3: #444c56;
	--color-auto-gray-4: #545d68;
	--color-auto-gray-5: #636e7b;
	--color-auto-gray-6: #768390;
	--color-auto-gray-7: #909dab;
	--color-auto-gray-8: #adbac7;
	--color-auto-gray-9: #cdd9e5;
	--color-auto-blue-0: #0f2d5c;
	--color-auto-blue-1: #143d79;
	--color-auto-blue-2: #1b4b91;
	--color-auto-blue-3: #255ab2;
	--color-auto-blue-4: #316dca;
	--color-auto-blue-5: #4184e4;
	--color-auto-blue-6: #539bf5;
	--color-auto-blue-7: #6cb6ff;
	--color-auto-blue-8: #96d0ff;
	--color-auto-blue-9: #c6e6ff;
	--color-auto-green-0: #113417;
	--color-auto-green-1: #1b4721;
	--color-auto-green-2: #245829;
	--color-auto-green-3: #2b6a30;
	--color-auto-green-4: #347d39;
	--color-auto-green-5: #46954a;
	--color-auto-green-6: #57ab5a;
	--color-auto-green-7: #6bc46d;
	--color-auto-green-8: #8ddb8c;
	--color-auto-green-9: #b4f1b4;
	--color-auto-yellow-0: #452700;
	--color-auto-yellow-1: #593600;
	--color-auto-yellow-2: #6c4400;
	--color-auto-yellow-3: #805400;
	--color-auto-yellow-4: #966600;
	--color-auto-yellow-5: #ae7c14;
	--color-auto-yellow-6: #c69026;
	--color-auto-yellow-7: #daaa3f;
	--color-auto-yellow-8: #eac55f;
	--color-auto-yellow-9: #fbe090;
	--color-auto-orange-0: #4d210c;
	--color-auto-orange-1: #682d0f;
	--color-auto-orange-2: #7f3913;
	--color-auto-orange-3: #94471b;
	--color-auto-orange-4: #ae5622;
	--color-auto-orange-5: #cc6b2c;
	--color-auto-orange-6: #e0823d;
	--color-auto-orange-7: #f69d50;
	--color-auto-orange-8: #ffbc6f;
	--color-auto-orange-9: #ffddb0;
	--color-auto-red-0: #78191b;
	--color-auto-red-1: #78191b;
	--color-auto-red-2: #922323;
	--color-auto-red-3: #ad2e2c;
	--color-auto-red-4: #c93c37;
	--color-auto-red-5: #e5534b;
	--color-auto-red-6: #f47067;
	--color-auto-red-7: #ff938a;
	--color-auto-red-8: #ffb8b0;
	--color-auto-red-9: #ffd8d3;
	--color-auto-purple-0: #352160;
	--color-auto-purple-1: #472c82;
	--color-auto-purple-2: #5936a2;
	--color-auto-purple-3: #6b44bc;
	--color-auto-purple-4: #8256d0;
	--color-auto-purple-5: #986ee2;
	--color-auto-purple-6: #b083f0;
	--color-auto-purple-7: #dcbdfb;
	--color-auto-purple-8: #dcbdfb;
	--color-auto-purple-9: #eedcff;
	--color-auto-pink-0: #551639;
	--color-auto-pink-1: #69264a;
	--color-auto-pink-2: #7e325a;
	--color-auto-pink-3: #983b6e;
	--color-auto-pink-4: #ae4c82;
	--color-auto-pink-5: #c96198;
	--color-auto-pink-6: #e275ad;
	--color-auto-pink-7: #fc8dc7;
	--color-auto-pink-8: #ffb3d8;
	--color-auto-pink-9: #ffd7eb;
	--color-text-primary: #adbac7;
	--color-text-secondary: #768390;
	--color-text-tertiary: #768390;
	--color-text-placeholder: #545d68;
	--color-text-disabled: #545d68;
	--color-text-inverse: #22272e;
	--color-text-link: #539bf5;
	--color-text-danger: #e5534b;
	--color-text-success: #6bc46d;
	--color-text-warning: #daaa3f;
	--color-text-white: #cdd9e5;
	--color-icon-primary: #adbac7;
	--color-icon-secondary: #636e7b;
	--color-icon-tertiary: #545d68;
	--color-icon-info: #6cb6ff;
	--color-icon-danger: #e5534b;
	--color-icon-success: #6bc46d;
	--color-icon-warning: #daaa3f;
	--color-border-primary: #444c56;
	--color-border-secondary: #373e47;
	--color-border-tertiary: #636e7b;
	--color-border-overlay: #444c56;
	--color-border-inverse: #cdd9e5;
	--color-border-info: rgba(65, 132, 228, 0.4);
	--color-border-danger: rgba(229, 83, 75, 0.4);
	--color-border-success: rgba(87, 171, 90, 0.4);
	--color-border-warning: rgba(174, 124, 20, 0.4);
	--color-bg-canvas: #22272e;
	--color-bg-canvas-mobile: #1c2128;
	--color-bg-canvas-inverse: #cdd9e5;
	--color-bg-canvas-inset: #1e2228;
	--color-bg-primary: #22272e;
	--color-bg-secondary: #22272e;
	--color-bg-tertiary: #2d333b;
	--color-bg-overlay: #373e47;
	--color-bg-backdrop: rgba(28, 33, 40, 0.8);
	--color-bg-info: rgba(65, 132, 228, 0.1);
	--color-bg-info-inverse: #4184e4;
	--color-bg-danger: rgba(229, 83, 75, 0.1);
	--color-bg-danger-inverse: #c93c37;
	--color-bg-success: rgba(70, 149, 74, 0.1);
	--color-bg-success-inverse: #46954a;
	--color-bg-warning: rgba(174, 124, 20, 0.1);
	--color-bg-warning-inverse: #ae7c14;
	--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
	--color-shadow-medium: 0 3px 6px #1c2128;
	--color-shadow-large: 0 8px 24px #1c2128;
	--color-shadow-extra-large: 0 12px 48px #1c2128;
	--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
	--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
	--color-state-hover-primary-bg: #316dca;
	--color-state-hover-primary-border: #4184e4;
	--color-state-hover-primary-text: #cdd9e5;
	--color-state-hover-primary-icon: #cdd9e5;
	--color-state-hover-secondary-bg: #2d333b;
	--color-state-hover-secondary-border: #2d333b;
	--color-state-selected-primary-bg: #316dca;
	--color-state-selected-primary-border: #4184e4;
	--color-state-selected-primary-text: #cdd9e5;
	--color-state-selected-primary-icon: #cdd9e5;
	--color-state-focus-border: #4184e4;
	--color-state-focus-shadow: 0 0 0 3px #143d79;
	--color-fade-fg-10: rgba(205, 217, 229, 0.1);
	--color-fade-fg-15: rgba(205, 217, 229, 0.15);
	--color-fade-fg-30: rgba(205, 217, 229, 0.3);
	--color-fade-fg-50: rgba(205, 217, 229, 0.5);
	--color-fade-fg-70: rgba(205, 217, 229, 0.7);
	--color-fade-fg-85: rgba(205, 217, 229, 0.85);
	--color-fade-black-10: rgba(28, 33, 40, 0.1);
	--color-fade-black-15: rgba(28, 33, 40, 0.15);
	--color-fade-black-30: rgba(28, 33, 40, 0.3);
	--color-fade-black-50: rgba(28, 33, 40, 0.5);
	--color-fade-black-70: rgba(28, 33, 40, 0.7);
	--color-fade-black-85: rgba(28, 33, 40, 0.85);
	--color-fade-white-10: rgba(205, 217, 229, 0.1);
	--color-fade-white-15: rgba(205, 217, 229, 0.15);
	--color-fade-white-30: rgba(205, 217, 229, 0.3);
	--color-fade-white-50: rgba(205, 217, 229, 0.5);
	--color-fade-white-70: rgba(205, 217, 229, 0.7);
	--color-fade-white-85: rgba(205, 217, 229, 0.85);
	--color-alert-info-text: #6cb6ff;
	--color-alert-info-icon: #6cb6ff;
	--color-alert-info-bg: rgba(65, 132, 228, 0.1);
	--color-alert-info-border: rgba(65, 132, 228, 0.4);
	--color-alert-warn-text: #daaa3f;
	--color-alert-warn-icon: #daaa3f;
	--color-alert-warn-bg: rgba(174, 124, 20, 0.1);
	--color-alert-warn-border: rgba(174, 124, 20, 0.4);
	--color-alert-error-text: #f47067;
	--color-alert-error-icon: #f47067;
	--color-alert-error-bg: rgba(229, 83, 75, 0.1);
	--color-alert-error-border: rgba(229, 83, 75, 0.4);
	--color-alert-success-text: #6bc46d;
	--color-alert-success-icon: #6bc46d;
	--color-alert-success-bg: rgba(70, 149, 74, 0.1);
	--color-alert-success-border: rgba(70, 149, 74, 0.4);
	--color-autocomplete-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
	--color-autocomplete-row-border: #444c56;
	--color-blankslate-icon: #5f6a76;
	--color-btn-text: #adbac7;
	--color-btn-bg: #373e47;
	--color-btn-border: #444c56;
	--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-hover-bg: #444c56;
	--color-btn-hover-border: #768390;
	--color-btn-selected-bg: #2d333b;
	--color-btn-focus-bg: #373e47;
	--color-btn-focus-border: #768390;
	--color-btn-focus-shadow: 0 0 0 3px rgba(118, 131, 144, 0.3);
	--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(28, 33, 40, 0.15);
	--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(49, 109, 202, 0.3);
	--color-btn-primary-text: #ffffff;
	--color-btn-primary-bg: #347d39;
	--color-btn-primary-border: #46954a;
	--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-hover-bg: #46954a;
	--color-btn-primary-hover-border: #57ab5a;
	--color-btn-primary-selected-bg: #347d39;
	--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
	--color-btn-primary-disabled-bg: rgba(52, 125, 57, 0.6);
	--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
	--color-btn-primary-focus-bg: #347d39;
	--color-btn-primary-focus-border: #57ab5a;
	--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
	--color-btn-primary-icon: #cdd9e5;
	--color-btn-primary-counter-bg: rgba(205, 217, 229, 0.2);
	--color-btn-outline-text: #539bf5;
	--color-btn-outline-hover-text: #539bf5;
	--color-btn-outline-hover-bg: #444c56;
	--color-btn-outline-hover-border: #539bf5;
	--color-btn-outline-hover-shadow: 0 1px 0 rgba(28, 33, 40, 0.1);
	--color-btn-outline-hover-inset-shadow: inset 0 1px 0
		rgba(205, 217, 229, 0.03);
	--color-btn-outline-hover-counter-bg: rgba(205, 217, 229, 0.2);
	--color-btn-outline-selected-text: #cdd9e5;
	--color-btn-outline-selected-bg: #1b4b91;
	--color-btn-outline-selected-border: rgba(205, 217, 229, 0.1);
	--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-outline-disabled-text: rgba(83, 155, 245, 0.5);
	--color-btn-outline-disabled-bg: #22272e;
	--color-btn-outline-disabled-counter-bg: rgba(49, 109, 202, 0.05);
	--color-btn-outline-focus-border: #539bf5;
	--color-btn-outline-focus-shadow: 0 0 0 3px rgba(37, 90, 178, 0.4);
	--color-btn-outline-counter-bg: rgba(49, 109, 202, 0.1);
	--color-btn-danger-text: #e5534b;
	--color-btn-danger-hover-text: #ffffff;
	--color-btn-danger-hover-bg: #c93c37;
	--color-btn-danger-hover-border: #e5534b;
	--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-danger-selected-text: #ffffff;
	--color-btn-danger-selected-bg: #ad2e2c;
	--color-btn-danger-selected-border: rgba(205, 217, 229, 0.1);
	--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-btn-danger-disabled-text: rgba(229, 83, 75, 0.5);
	--color-btn-danger-disabled-bg: #22272e;
	--color-btn-danger-disabled-counter-bg: rgba(201, 60, 55, 0.05);
	--color-btn-danger-focus-border: #e5534b;
	--color-btn-danger-focus-shadow: 0 0 0 3px rgba(173, 46, 44, 0.4);
	--color-btn-danger-counter-bg: rgba(201, 60, 55, 0.1);
	--color-btn-danger-icon: #e5534b;
	--color-btn-danger-hover-icon: #cdd9e5;
	--color-btn-counter-bg: #444c56;
	--color-counter-text: #adbac7;
	--color-counter-bg: #444c56;
	--color-counter-primary-text: #adbac7;
	--color-counter-primary-bg: #636e7b;
	--color-counter-secondary-text: #768390;
	--color-counter-secondary-bg: rgba(118, 131, 144, 0.2);
	--color-dropdown-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
	--color-label-border: #444c56;
	--color-label-primary-text: #909dab;
	--color-label-primary-border: #636e7b;
	--color-label-secondary-text: #768390;
	--color-label-secondary-border: #444c56;
	--color-label-info-text: #4184e4;
	--color-label-info-border: rgba(65, 132, 228, 0.4);
	--color-label-success-text: #57ab5a;
	--color-label-success-border: rgba(70, 149, 74, 0.4);
	--color-label-warning-text: #daaa3f;
	--color-label-warning-border: rgba(242, 211, 91, 0.4);
	--color-label-danger-text: #e5534b;
	--color-label-danger-border: rgba(229, 83, 75, 0.4);
	--color-label-orange-text: #cc6b2c;
	--color-label-orange-border: rgba(204, 107, 44, 0.4);
	--color-input-bg: #22272e;
	--color-input-contrast-bg: rgba(28, 33, 40, 0.5);
	--color-input-border: #373e47;
	--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
	--color-input-disabled-bg: #2d333b;
	--color-input-disabled-border: #444c56;
	--color-input-warning-border: #c69026;
	--color-input-error-border: #e5534b;
	--color-input-tooltip-success-text: #6bc46d;
	--color-input-tooltip-success-bg: #263231;
	--color-input-tooltip-success-border: #335a3b;
	--color-input-tooltip-warning-text: #daaa3f;
	--color-input-tooltip-warning-bg: #30302b;
	--color-input-tooltip-warning-border: #624e22;
	--color-input-tooltip-error-text: #f47067;
	--color-input-tooltip-error-bg: #362b31;
	--color-input-tooltip-error-border: #7c3b3b;
	--color-avatar-bg: rgba(205, 217, 229, 0.1);
	--color-avatar-border: rgba(205, 217, 229, 0.1);
	--color-avatar-stack-fade: #444c56;
	--color-avatar-stack-fade-more: #373e47;
	--color-avatar-child-shadow: -2px -2px 0 #22272e;
	--color-toast-text: #adbac7;
	--color-toast-bg: #444c56;
	--color-toast-border: #636e7b;
	--color-toast-shadow: 0 8px 24px #1c2128;
	--color-toast-icon: #cdd9e5;
	--color-toast-icon-bg: #316dca;
	--color-toast-icon-border: #4184e4;
	--color-toast-success-text: #adbac7;
	--color-toast-success-border: #636e7b;
	--color-toast-success-icon: #cdd9e5;
	--color-toast-success-icon-bg: #46954a;
	--color-toast-success-icon-border: #57ab5a;
	--color-toast-warning-text: #adbac7;
	--color-toast-warning-border: #636e7b;
	--color-toast-warning-icon: #cdd9e5;
	--color-toast-warning-icon-bg: #ae7c14;
	--color-toast-warning-icon-border: #c69026;
	--color-toast-danger-text: #adbac7;
	--color-toast-danger-border: #636e7b;
	--color-toast-danger-icon: #cdd9e5;
	--color-toast-danger-icon-bg: #c93c37;
	--color-toast-danger-icon-border: #e5534b;
	--color-toast-loading-text: #adbac7;
	--color-toast-loading-border: #636e7b;
	--color-toast-loading-icon: #cdd9e5;
	--color-toast-loading-icon-bg: #636e7b;
	--color-toast-loading-icon-border: #768390;
	--color-timeline-text: #909dab;
	--color-timeline-badge-bg: #22272e;
	--color-timeline-badge-success-border: #46954a;
	--color-timeline-target-badge-border: #316dca;
	--color-timeline-target-badge-shadow: #1b4b91;
	--color-select-menu-border-secondary: #444c56;
	--color-select-menu-shadow: 0 0 18px rgba(28, 33, 40, 0.4);
	--color-select-menu-backdrop-bg: rgba(28, 33, 40, 0.5);
	--color-select-menu-backdrop-border: #545d68;
	--color-select-menu-tap-highlight: rgba(68, 76, 86, 0.5);
	--color-select-menu-tap-focus-bg: #143d79;
	--color-box-blue-border: #1b4b91;
	--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
	--color-box-row-blue-bg: rgba(108, 182, 255, 0.1);
	--color-box-header-blue-bg: #22272e;
	--color-box-header-blue-border: #444c56;
	--color-box-border-info: rgba(65, 132, 228, 0.4);
	--color-box-bg-info: rgba(65, 132, 228, 0.1);
	--color-box-border-warning: rgba(174, 124, 20, 0.4);
	--color-box-bg-warning: rgba(174, 124, 20, 0.1);
	--color-branch-name-text: #adbac7;
	--color-branch-name-icon: #909dab;
	--color-branch-name-bg: rgba(83, 155, 245, 0.1);
	--color-branch-name-link-text: #539bf5;
	--color-branch-name-link-icon: #539bf5;
	--color-branch-name-link-bg: rgba(83, 155, 245, 0.1);
	--color-markdown-code-bg: rgba(205, 217, 229, 0.15);
	--color-markdown-frame-border: #4f5964;
	--color-markdown-blockquote-border: #4f5964;
	--color-markdown-table-border: #4f5964;
	--color-markdown-table-tr-border: #3b424b;
	--color-menu-heading-text: #768390;
	--color-menu-border-active: #f78166;
	--color-menu-bg-active: #2d333b;
	--color-sidenav-selected-bg: #373e47;
	--color-sidenav-border-active: #f78166;
	--color-header-text: rgba(205, 217, 229, 0.7);
	--color-header-bg: #2d333b;
	--color-header-logo: #cdd9e5;
	--color-filter-item-bar-bg: #292e35;
	--color-hidden-text-expander-bg: #373e47;
	--color-hidden-text-expander-bg-hover: #444c56;
	--color-drag-and-drop-border: #393f48;
	--color-upload-enabled-border: #4f5964;
	--color-upload-enabled-border-focused: #4f84d4;
	--color-previewable-comment-form-border: #393f48;
	--color-underlinenav-border: rgba(68, 76, 86, 0);
	--color-underlinenav-border-hover: #444c56;
	--color-underlinenav-border-active: #f78166;
	--color-underlinenav-text: #768390;
	--color-underlinenav-text-hover: #adbac7;
	--color-underlinenav-text-active: #adbac7;
	--color-underlinenav-icon: #636e7b;
	--color-underlinenav-icon-hover: #adbac7;
	--color-underlinenav-icon-active: #adbac7;
	--color-underlinenav-counter-text: #768390;
	--color-underlinenav-counter-bg: rgba(118, 131, 144, 0.2);
	--color-verified-badge-text: #57ab5a;
	--color-verified-badge-bg: rgba(87, 171, 90, 0.1);
	--color-verified-badge-border: rgba(87, 171, 90, 0.4);
	--color-social-count-bg: #373e47;
	--color-tooltip-text: #cdd9e5;
	--color-tooltip-bg: #636e7b;
	--color-header-search-bg: #22272e;
	--color-header-search-border: #373e47;
	--color-search-keyword-hl: rgba(174, 124, 20, 0.4);
	--color-diffstat-neutral-bg: #444c56;
	--color-diffstat-neutral-border: rgba(205, 217, 229, 0.1);
	--color-diffstat-deletion-bg: #c93c37;
	--color-diffstat-deletion-border: #e5534b;
	--color-diffstat-addition-bg: #347d39;
	--color-diffstat-addition-border: #46954a;
	--color-mktg-success: #3d8942;
	--color-mktg-info: #3877d5;
	--color-mktg-bg-shade-gradient-top: rgba(28, 33, 40, 0.065);
	--color-mktg-bg-shade-gradient-bottom: rgba(28, 33, 40, 0);
	--color-mktg-btn-bg: #316dca;
	--color-mktg-btn-border: #316dca;
	--color-mktg-btn-text: #cdd9e5;
	--color-mktg-btn-icon: #cdd9e5;
	--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(49, 109, 202, 0.3);
	--color-mktg-btn-hover-bg: #4184e4;
	--color-mktg-btn-hover-border: #4184e4;
	--color-mktg-btn-disabled-bg: rgba(65, 132, 228, 0.5);
	--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-disabled-text: rgba(205, 217, 229, 0.5);
	--color-mktg-btn-disabled-icon: rgba(205, 217, 229, 0.5);
	--color-mktg-btn-primary-bg: #347d39;
	--color-mktg-btn-primary-border: #347d39;
	--color-mktg-btn-primary-text: #cdd9e5;
	--color-mktg-btn-primary-icon: #cdd9e5;
	--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(52, 125, 57, 0.3);
	--color-mktg-btn-primary-hover-bg: #46954a;
	--color-mktg-btn-primary-hover-border: #46954a;
	--color-mktg-btn-primary-disabled-bg: rgba(70, 149, 74, 0.5);
	--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
	--color-mktg-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
	--color-mktg-btn-primary-disabled-icon: rgba(205, 217, 229, 0.5);
	--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-border: rgba(65, 132, 228, 0.5);
	--color-mktg-btn-outline-text: #4184e4;
	--color-mktg-btn-outline-icon: #4184e4;
	--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(65, 132, 228, 0.3);
	--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-hover-border: #4184e4;
	--color-mktg-btn-outline-hover-text: #539bf5;
	--color-mktg-btn-outline-hover-icon: #539bf5;
	--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-outline-disabled-border: rgba(65, 132, 228, 0.2);
	--color-mktg-btn-outline-disabled-text: rgba(65, 132, 228, 0.5);
	--color-mktg-btn-outline-disabled-icon: rgba(65, 132, 228, 0.5);
	--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-border: rgba(173, 186, 199, 0.5);
	--color-mktg-btn-dark-text: #adbac7;
	--color-mktg-btn-dark-icon: #adbac7;
	--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(173, 186, 199, 0.3);
	--color-mktg-btn-dark-hover-bg: rgba(173, 186, 199, 0.5);
	--color-mktg-btn-dark-hover-border: rgba(173, 186, 199, 0.5);
	--color-mktg-btn-dark-hover-text: #22272e;
	--color-mktg-btn-dark-hover-icon: #22272e;
	--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
	--color-mktg-btn-dark-disabled-border: rgba(173, 186, 199, 0.2);
	--color-mktg-btn-dark-disabled-text: rgba(173, 186, 199, 0.5);
	--color-mktg-btn-dark-disabled-icon: rgba(173, 186, 199, 0.5);
	--color-files-explorer-icon: #636e7b;
	--color-hl-author-bg: #0f2d5c;
	--color-hl-author-border: #1b4b91;
	--color-logo-subdued: #444c56;
	--color-discussion-border: #494c49;
	--color-discussion-bg-success: rgba(70, 149, 74, 0.1);
	--color-actions-workflow-table-sticky-bg: rgba(34, 39, 46, 0.95);
	--color-repo-language-color-border: rgba(205, 217, 229, 0.2);
	--color-code-selection-bg: rgba(108, 182, 255, 0.3);
	--color-highlight-text: #ffd467;
	--color-highlight-bg: rgba(204, 143, 44, 0.38);
	--color-blob-line-highlight-bg: rgba(198, 144, 38, 0.15);
	--color-blob-line-highlight-border: #daaa3f;
	--color-diff-addition-text: #6bc46d;
	--color-diff-addition-bg: rgba(70, 149, 74, 0.2);
	--color-diff-addition-border: #2b6a30;
	--color-diff-deletion-text: #e5534b;
	--color-diff-deletion-bg: rgba(201, 60, 55, 0.2);
	--color-diff-deletion-border: #ad2e2c;
	--color-diff-change-text: #daaa3f;
	--color-diff-change-bg: #452700;
	--color-diff-change-border: #966600;
	--color-diff-blob-num-text: rgba(205, 217, 229, 0.3);
	--color-diff-blob-num-hover-text: rgba(205, 217, 229, 0.6);
	--color-diff-blob-addition-num-text: #57ab5a;
	--color-diff-blob-addition-num-hover-text: #8ddb8c;
	--color-diff-blob-addition-num-bg: rgba(70, 149, 74, 0.1);
	--color-diff-blob-addition-line-bg: rgba(70, 149, 74, 0.2);
	--color-diff-blob-addition-word-bg: rgba(70, 149, 74, 0.55);
	--color-diff-blob-deletion-num-text: #e5534b;
	--color-diff-blob-deletion-num-hover-text: #ff938a;
	--color-diff-blob-deletion-num-bg: rgba(201, 60, 55, 0.1);
	--color-diff-blob-deletion-line-bg: rgba(201, 60, 55, 0.2);
	--color-diff-blob-deletion-word-bg: rgba(201, 60, 55, 0.5);
	--color-diff-blob-hunk-text: #768390;
	--color-diff-blob-hunk-num-bg: rgba(83, 155, 245, 0.15);
	--color-diff-blob-hunk-line-bg: rgba(83, 155, 245, 0.1);
	--color-diff-blob-empty-block-bg: #2d333b;
	--color-diff-blob-selected-line-highlight-bg: rgba(174, 124, 20, 0.1);
	--color-diff-blob-selected-line-highlight-border: #ae7c14;
	--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
	--color-diff-blob-expander-icon: #768390;
	--color-diff-blob-expander-hover-icon: #cdd9e5;
	--color-diff-blob-expander-hover-bg: #316dca;
	--color-diff-blob-comment-button-icon: #cdd9e5;
	--color-diff-blob-comment-button-bg: #316dca;
	--color-diff-blob-comment-button-gradient-bg: #437bd1;
	--color-global-nav-logo: #cdd9e5;
	--color-global-nav-bg: #2d333b;
	--color-global-nav-text: #adbac7;
	--color-global-nav-icon: #adbac7;
	--color-global-nav-input-bg: #22272e;
	--color-global-nav-input-border: #373e47;
	--color-global-nav-input-icon: #373e47;
	--color-global-nav-input-placeholder: #545d68;
	--color-calendar-graph-day-bg: #2d333b;
	--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
	--color-calendar-graph-day-L1-bg: #003820;
	--color-calendar-graph-day-L2-bg: #00602d;
	--color-calendar-graph-day-L3-bg: #10983d;
	--color-calendar-graph-day-L4-bg: #27d545;
	--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
	--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
	--color-footer-invertocat-octicon: #444c56;
	--color-footer-invertocat-octicon-hover: #636e7b;
	--color-pr-state-draft-text: #768390;
	--color-pr-state-draft-bg: rgba(118, 131, 144, 0.1);
	--color-pr-state-draft-border: rgba(118, 131, 144, 0.4);
	--color-pr-state-open-text: #57ab5a;
	--color-pr-state-open-bg: rgba(87, 171, 90, 0.1);
	--color-pr-state-open-border: rgba(87, 171, 90, 0.4);
	--color-pr-state-merged-text: #986ee2;
	--color-pr-state-merged-bg: rgba(176, 131, 240, 0.1);
	--color-pr-state-merged-border: rgba(176, 131, 240, 0.4);
	--color-pr-state-closed-text: #e5534b;
	--color-pr-state-closed-bg: rgba(201, 60, 55, 0.1);
	--color-pr-state-closed-border: rgba(201, 60, 55, 0.4);
	--color-topic-tag-text: #539bf5;
	--color-topic-tag-bg: rgba(65, 132, 228, 0.1);
	--color-topic-tag-hover-bg: rgba(65, 132, 228, 0.2);
	--color-topic-tag-active-bg: rgba(65, 132, 228, 0.15);
	--color-merge-box-success-icon-bg: rgba(70, 149, 74, 0.1);
	--color-merge-box-success-icon-text: #57ab5a;
	--color-merge-box-success-icon-border: rgba(70, 149, 74, 0.4);
	--color-merge-box-success-indicator-bg: #347d39;
	--color-merge-box-success-indicator-border: #46954a;
	--color-merge-box-merged-icon-bg: rgba(176, 131, 240, 0.1);
	--color-merge-box-merged-icon-text: #986ee2;
	--color-merge-box-merged-icon-border: rgba(176, 131, 240, 0.4);
	--color-merge-box-merged-box-border: rgba(176, 131, 240, 0.4);
	--color-merge-box-neutral-icon-bg: rgba(173, 186, 199, 0.1);
	--color-merge-box-neutral-icon-text: #768390;
	--color-merge-box-neutral-icon-border: rgba(173, 186, 199, 0.4);
	--color-merge-box-neutral-indicator-bg: #545d68;
	--color-merge-box-neutral-indicator-border: #636e7b;
	--color-merge-box-warning-icon-bg: rgba(174, 124, 20, 0.1);
	--color-merge-box-warning-icon-text: #daaa3f;
	--color-merge-box-warning-icon-border: rgba(174, 124, 20, 0.4);
	--color-merge-box-warning-box-border: rgba(174, 124, 20, 0.4);
	--color-merge-box-warning-merge-highlight: rgba(174, 124, 20, 0.1);
	--color-merge-box-error-icon-bg: rgba(229, 83, 75, 0.1);
	--color-merge-box-error-icon-text: #e5534b;
	--color-merge-box-error-icon-border: rgba(229, 83, 75, 0.4);
	--color-merge-box-error-indicator-bg: #c93c37;
	--color-merge-box-error-indicator-border: #e5534b;
	--color-project-card-bg: #2d333b;
	--color-project-header-bg: #22272e;
	--color-project-sidebar-bg: #2d333b;
	--color-project-gradient-in: #2d333b;
	--color-project-gradient-out: rgba(45, 51, 59, 0);
	--color-checks-bg: #1e2228;
	--color-checks-run-border-width: 1px;
	--color-checks-container-border-width: 1px;
	--color-checks-text-primary: #adbac7;
	--color-checks-text-secondary: #768390;
	--color-checks-text-link: #539bf5;
	--color-checks-btn-icon: #636e7b;
	--color-checks-btn-hover-icon: #adbac7;
	--color-checks-btn-hover-bg: #444c56;
	--color-checks-input-text: #768390;
	--color-checks-input-placeholder-text: #545d68;
	--color-checks-input-focus-text: #adbac7;
	--color-checks-input-bg: #22272e;
	--color-checks-input-shadow: 0 0 0 1px #373e47;
	--color-checks-dropdown-text: #adbac7;
	--color-checks-dropdown-bg: #373e47;
	--color-checks-dropdown-border: #444c56;
	--color-checks-dropdown-hover-text: #cdd9e5;
	--color-checks-dropdown-hover-bg: #316dca;
	--color-checks-dropdown-btn-hover-text: #cdd9e5;
	--color-checks-dropdown-btn-hover-bg: #2d333b;
	--color-checks-scrollbar-thumb-bg: #444c56;
	--color-checks-header-label-text: #768390;
	--color-checks-header-label-open-text: #adbac7;
	--color-checks-header-border: #373e47;
	--color-checks-header-icon: #636e7b;
	--color-checks-line-text: #768390;
	--color-checks-line-num-text: #768390;
	--color-checks-line-timestamp-text: #768390;
	--color-checks-line-hover-bg: #2d333b;
	--color-checks-line-selected-bg: rgba(65, 132, 228, 0.1);
	--color-checks-line-selected-num-text: #539bf5;
	--color-checks-line-dt-fm-text: #22272e;
	--color-checks-line-dt-fm-bg: #c69026;
	--color-checks-gate-bg: rgba(128, 84, 0, 0.15);
	--color-checks-gate-text: #768390;
	--color-checks-gate-waiting-text: #daaa3f;
	--color-checks-step-header-open-bg: #2d333b;
	--color-checks-step-error-text: #e5534b;
	--color-checks-step-warning-text: #daaa3f;
	--color-checks-logline-text: #636e7b;
	--color-checks-logline-num-text: #768390;
	--color-checks-logline-debug-text: #b083f0;
	--color-checks-logline-error-text: #768390;
	--color-checks-logline-error-num-text: #768390;
	--color-checks-logline-error-bg: rgba(229, 83, 75, 0.1);
	--color-checks-logline-warning-text: #768390;
	--color-checks-logline-warning-num-text: #daaa3f;
	--color-checks-logline-warning-bg: rgba(174, 124, 20, 0.1);
	--color-checks-logline-command-text: #539bf5;
	--color-checks-logline-section-text: #6bc46d;
	--color-intro-shelf-gradient-left: rgba(65, 132, 228, 0.1);
	--color-intro-shelf-gradient-right: rgba(70, 149, 74, 0.1);
	--color-intro-shelf-gradient-in: #22272e;
	--color-intro-shelf-gradient-out: rgba(34, 39, 46, 0);
	--color-marketing-icon-primary: #6cb6ff;
	--color-marketing-icon-secondary: #316dca;
	--color-prettylights-syntax-comment: #768390;
	--color-prettylights-syntax-constant: #6cb6ff;
	--color-prettylights-syntax-entity: #dcbdfb;
	--color-prettylights-syntax-storage-modifier-import: #adbac7;
	--color-prettylights-syntax-entity-tag: #8ddb8c;
	--color-prettylights-syntax-keyword: #f47067;
	--color-prettylights-syntax-string: #96d0ff;
	--color-prettylights-syntax-variable: #f69d50;
	--color-prettylights-syntax-brackethighlighter-unmatched: #e5534b;
	--color-prettylights-syntax-invalid-illegal-text: #cdd9e5;
	--color-prettylights-syntax-invalid-illegal-bg: #922323;
	--color-prettylights-syntax-carriage-return-text: #cdd9e5;
	--color-prettylights-syntax-carriage-return-bg: #ad2e2c;
	--color-prettylights-syntax-string-regexp: #8ddb8c;
	--color-prettylights-syntax-markup-list: #eac55f;
	--color-prettylights-syntax-markup-heading: #316dca;
	--color-prettylights-syntax-markup-italic: #adbac7;
	--color-prettylights-syntax-markup-bold: #adbac7;
	--color-prettylights-syntax-markup-deleted-text: #ffd8d3;
	--color-prettylights-syntax-markup-deleted-bg: #78191b;
	--color-prettylights-syntax-markup-inserted-text: #b4f1b4;
	--color-prettylights-syntax-markup-inserted-bg: #1b4721;
	--color-prettylights-syntax-markup-changed-text: #ffddb0;
	--color-prettylights-syntax-markup-changed-bg: #682d0f;
	--color-prettylights-syntax-markup-ignored-text: #adbac7;
	--color-prettylights-syntax-markup-ignored-bg: #255ab2;
	--color-prettylights-syntax-meta-diff-range: #dcbdfb;
	--color-prettylights-syntax-brackethighlighter-angle: #768390;
	--color-prettylights-syntax-sublimelinter-gutter-mark: #545d68;
	--color-prettylights-syntax-constant-other-reference-link: #96d0ff;
	--color-codemirror-text: #adbac7;
	--color-codemirror-bg: #22272e;
	--color-codemirror-gutters-bg: #22272e;
	--color-codemirror-guttermarker-text: #22272e;
	--color-codemirror-guttermarker-subtle-text: #636e7b;
	--color-codemirror-linenumber-text: #768390;
	--color-codemirror-cursor: #cdd9e5;
	--color-codemirror-selection-bg: rgba(108, 182, 255, 0.3);
	--color-codemirror-activeline-bg: #2d333b;
	--color-codemirror-matchingbracket-text: #adbac7;
	--color-codemirror-lines-bg: #22272e;
	--color-codemirror-syntax-comment: #768390;
	--color-codemirror-syntax-constant: #6cb6ff;
	--color-codemirror-syntax-entity: #dcbdfb;
	--color-codemirror-syntax-keyword: #f47067;
	--color-codemirror-syntax-storage: #f47067;
	--color-codemirror-syntax-string: #96d0ff;
	--color-codemirror-syntax-support: #6cb6ff;
	--color-codemirror-syntax-variable: #f69d50;
	--color-ansi-black: #22272e;
	--color-ansi-black-bright: #2d333b;
	--color-ansi-white: #909dab;
	--color-ansi-white-bright: #909dab;
	--color-ansi-gray: #636e7b;
	--color-ansi-red: #f47067;
	--color-ansi-red-bright: #ff938a;
	--color-ansi-green: #57ab5a;
	--color-ansi-green-bright: #6bc46d;
	--color-ansi-yellow: #c69026;
	--color-ansi-yellow-bright: #daaa3f;
	--color-ansi-blue: #539bf5;
	--color-ansi-blue-bright: #6cb6ff;
	--color-ansi-magenta: #b083f0;
	--color-ansi-magenta-bright: #dcbdfb;
	--color-ansi-cyan: #76e3ea;
	--color-ansi-cyan-bright: #b3f0ff;
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme="dark_dimmed"] {
		--color-scale-black: #1c2128;
		--color-scale-white: #cdd9e5;
		--color-scale-gray-0: #cdd9e5;
		--color-scale-gray-1: #adbac7;
		--color-scale-gray-2: #909dab;
		--color-scale-gray-3: #768390;
		--color-scale-gray-4: #636e7b;
		--color-scale-gray-5: #545d68;
		--color-scale-gray-6: #444c56;
		--color-scale-gray-7: #373e47;
		--color-scale-gray-8: #2d333b;
		--color-scale-gray-9: #22272e;
		--color-scale-blue-0: #c6e6ff;
		--color-scale-blue-1: #96d0ff;
		--color-scale-blue-2: #6cb6ff;
		--color-scale-blue-3: #539bf5;
		--color-scale-blue-4: #4184e4;
		--color-scale-blue-5: #316dca;
		--color-scale-blue-6: #255ab2;
		--color-scale-blue-7: #1b4b91;
		--color-scale-blue-8: #143d79;
		--color-scale-blue-9: #0f2d5c;
		--color-scale-green-0: #b4f1b4;
		--color-scale-green-1: #8ddb8c;
		--color-scale-green-2: #6bc46d;
		--color-scale-green-3: #57ab5a;
		--color-scale-green-4: #46954a;
		--color-scale-green-5: #347d39;
		--color-scale-green-6: #2b6a30;
		--color-scale-green-7: #245829;
		--color-scale-green-8: #1b4721;
		--color-scale-green-9: #113417;
		--color-scale-yellow-0: #fbe090;
		--color-scale-yellow-1: #eac55f;
		--color-scale-yellow-2: #daaa3f;
		--color-scale-yellow-3: #c69026;
		--color-scale-yellow-4: #ae7c14;
		--color-scale-yellow-5: #966600;
		--color-scale-yellow-6: #805400;
		--color-scale-yellow-7: #6c4400;
		--color-scale-yellow-8: #593600;
		--color-scale-yellow-9: #452700;
		--color-scale-orange-0: #ffddb0;
		--color-scale-orange-1: #ffbc6f;
		--color-scale-orange-2: #f69d50;
		--color-scale-orange-3: #e0823d;
		--color-scale-orange-4: #cc6b2c;
		--color-scale-orange-5: #ae5622;
		--color-scale-orange-6: #94471b;
		--color-scale-orange-7: #7f3913;
		--color-scale-orange-8: #682d0f;
		--color-scale-orange-9: #4d210c;
		--color-scale-red-0: #ffd8d3;
		--color-scale-red-1: #ffb8b0;
		--color-scale-red-2: #ff938a;
		--color-scale-red-3: #f47067;
		--color-scale-red-4: #e5534b;
		--color-scale-red-5: #c93c37;
		--color-scale-red-6: #ad2e2c;
		--color-scale-red-7: #922323;
		--color-scale-red-8: #78191b;
		--color-scale-red-9: #78191b;
		--color-scale-purple-0: #eedcff;
		--color-scale-purple-1: #dcbdfb;
		--color-scale-purple-2: #dcbdfb;
		--color-scale-purple-3: #b083f0;
		--color-scale-purple-4: #986ee2;
		--color-scale-purple-5: #8256d0;
		--color-scale-purple-6: #6b44bc;
		--color-scale-purple-7: #5936a2;
		--color-scale-purple-8: #472c82;
		--color-scale-purple-9: #352160;
		--color-scale-pink-0: #ffd7eb;
		--color-scale-pink-1: #ffb3d8;
		--color-scale-pink-2: #fc8dc7;
		--color-scale-pink-3: #e275ad;
		--color-scale-pink-4: #c96198;
		--color-scale-pink-5: #ae4c82;
		--color-scale-pink-6: #983b6e;
		--color-scale-pink-7: #7e325a;
		--color-scale-pink-8: #69264a;
		--color-scale-pink-9: #551639;
		--color-auto-black: #cdd9e5;
		--color-auto-white: #1c2128;
		--color-auto-gray-0: #22272e;
		--color-auto-gray-1: #2d333b;
		--color-auto-gray-2: #373e47;
		--color-auto-gray-3: #444c56;
		--color-auto-gray-4: #545d68;
		--color-auto-gray-5: #636e7b;
		--color-auto-gray-6: #768390;
		--color-auto-gray-7: #909dab;
		--color-auto-gray-8: #adbac7;
		--color-auto-gray-9: #cdd9e5;
		--color-auto-blue-0: #0f2d5c;
		--color-auto-blue-1: #143d79;
		--color-auto-blue-2: #1b4b91;
		--color-auto-blue-3: #255ab2;
		--color-auto-blue-4: #316dca;
		--color-auto-blue-5: #4184e4;
		--color-auto-blue-6: #539bf5;
		--color-auto-blue-7: #6cb6ff;
		--color-auto-blue-8: #96d0ff;
		--color-auto-blue-9: #c6e6ff;
		--color-auto-green-0: #113417;
		--color-auto-green-1: #1b4721;
		--color-auto-green-2: #245829;
		--color-auto-green-3: #2b6a30;
		--color-auto-green-4: #347d39;
		--color-auto-green-5: #46954a;
		--color-auto-green-6: #57ab5a;
		--color-auto-green-7: #6bc46d;
		--color-auto-green-8: #8ddb8c;
		--color-auto-green-9: #b4f1b4;
		--color-auto-yellow-0: #452700;
		--color-auto-yellow-1: #593600;
		--color-auto-yellow-2: #6c4400;
		--color-auto-yellow-3: #805400;
		--color-auto-yellow-4: #966600;
		--color-auto-yellow-5: #ae7c14;
		--color-auto-yellow-6: #c69026;
		--color-auto-yellow-7: #daaa3f;
		--color-auto-yellow-8: #eac55f;
		--color-auto-yellow-9: #fbe090;
		--color-auto-orange-0: #4d210c;
		--color-auto-orange-1: #682d0f;
		--color-auto-orange-2: #7f3913;
		--color-auto-orange-3: #94471b;
		--color-auto-orange-4: #ae5622;
		--color-auto-orange-5: #cc6b2c;
		--color-auto-orange-6: #e0823d;
		--color-auto-orange-7: #f69d50;
		--color-auto-orange-8: #ffbc6f;
		--color-auto-orange-9: #ffddb0;
		--color-auto-red-0: #78191b;
		--color-auto-red-1: #78191b;
		--color-auto-red-2: #922323;
		--color-auto-red-3: #ad2e2c;
		--color-auto-red-4: #c93c37;
		--color-auto-red-5: #e5534b;
		--color-auto-red-6: #f47067;
		--color-auto-red-7: #ff938a;
		--color-auto-red-8: #ffb8b0;
		--color-auto-red-9: #ffd8d3;
		--color-auto-purple-0: #352160;
		--color-auto-purple-1: #472c82;
		--color-auto-purple-2: #5936a2;
		--color-auto-purple-3: #6b44bc;
		--color-auto-purple-4: #8256d0;
		--color-auto-purple-5: #986ee2;
		--color-auto-purple-6: #b083f0;
		--color-auto-purple-7: #dcbdfb;
		--color-auto-purple-8: #dcbdfb;
		--color-auto-purple-9: #eedcff;
		--color-auto-pink-0: #551639;
		--color-auto-pink-1: #69264a;
		--color-auto-pink-2: #7e325a;
		--color-auto-pink-3: #983b6e;
		--color-auto-pink-4: #ae4c82;
		--color-auto-pink-5: #c96198;
		--color-auto-pink-6: #e275ad;
		--color-auto-pink-7: #fc8dc7;
		--color-auto-pink-8: #ffb3d8;
		--color-auto-pink-9: #ffd7eb;
		--color-text-primary: #adbac7;
		--color-text-secondary: #768390;
		--color-text-tertiary: #768390;
		--color-text-placeholder: #545d68;
		--color-text-disabled: #545d68;
		--color-text-inverse: #22272e;
		--color-text-link: #539bf5;
		--color-text-danger: #e5534b;
		--color-text-success: #6bc46d;
		--color-text-warning: #daaa3f;
		--color-text-white: #cdd9e5;
		--color-icon-primary: #adbac7;
		--color-icon-secondary: #636e7b;
		--color-icon-tertiary: #545d68;
		--color-icon-info: #6cb6ff;
		--color-icon-danger: #e5534b;
		--color-icon-success: #6bc46d;
		--color-icon-warning: #daaa3f;
		--color-border-primary: #444c56;
		--color-border-secondary: #373e47;
		--color-border-tertiary: #636e7b;
		--color-border-overlay: #444c56;
		--color-border-inverse: #cdd9e5;
		--color-border-info: rgba(65, 132, 228, 0.4);
		--color-border-danger: rgba(229, 83, 75, 0.4);
		--color-border-success: rgba(87, 171, 90, 0.4);
		--color-border-warning: rgba(174, 124, 20, 0.4);
		--color-bg-canvas: #22272e;
		--color-bg-canvas-mobile: #1c2128;
		--color-bg-canvas-inverse: #cdd9e5;
		--color-bg-canvas-inset: #1e2228;
		--color-bg-primary: #22272e;
		--color-bg-secondary: #22272e;
		--color-bg-tertiary: #2d333b;
		--color-bg-overlay: #373e47;
		--color-bg-backdrop: rgba(28, 33, 40, 0.8);
		--color-bg-info: rgba(65, 132, 228, 0.1);
		--color-bg-info-inverse: #4184e4;
		--color-bg-danger: rgba(229, 83, 75, 0.1);
		--color-bg-danger-inverse: #c93c37;
		--color-bg-success: rgba(70, 149, 74, 0.1);
		--color-bg-success-inverse: #46954a;
		--color-bg-warning: rgba(174, 124, 20, 0.1);
		--color-bg-warning-inverse: #ae7c14;
		--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-medium: 0 3px 6px #1c2128;
		--color-shadow-large: 0 8px 24px #1c2128;
		--color-shadow-extra-large: 0 12px 48px #1c2128;
		--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
		--color-state-hover-primary-bg: #316dca;
		--color-state-hover-primary-border: #4184e4;
		--color-state-hover-primary-text: #cdd9e5;
		--color-state-hover-primary-icon: #cdd9e5;
		--color-state-hover-secondary-bg: #2d333b;
		--color-state-hover-secondary-border: #2d333b;
		--color-state-selected-primary-bg: #316dca;
		--color-state-selected-primary-border: #4184e4;
		--color-state-selected-primary-text: #cdd9e5;
		--color-state-selected-primary-icon: #cdd9e5;
		--color-state-focus-border: #4184e4;
		--color-state-focus-shadow: 0 0 0 3px #143d79;
		--color-fade-fg-10: rgba(205, 217, 229, 0.1);
		--color-fade-fg-15: rgba(205, 217, 229, 0.15);
		--color-fade-fg-30: rgba(205, 217, 229, 0.3);
		--color-fade-fg-50: rgba(205, 217, 229, 0.5);
		--color-fade-fg-70: rgba(205, 217, 229, 0.7);
		--color-fade-fg-85: rgba(205, 217, 229, 0.85);
		--color-fade-black-10: rgba(28, 33, 40, 0.1);
		--color-fade-black-15: rgba(28, 33, 40, 0.15);
		--color-fade-black-30: rgba(28, 33, 40, 0.3);
		--color-fade-black-50: rgba(28, 33, 40, 0.5);
		--color-fade-black-70: rgba(28, 33, 40, 0.7);
		--color-fade-black-85: rgba(28, 33, 40, 0.85);
		--color-fade-white-10: rgba(205, 217, 229, 0.1);
		--color-fade-white-15: rgba(205, 217, 229, 0.15);
		--color-fade-white-30: rgba(205, 217, 229, 0.3);
		--color-fade-white-50: rgba(205, 217, 229, 0.5);
		--color-fade-white-70: rgba(205, 217, 229, 0.7);
		--color-fade-white-85: rgba(205, 217, 229, 0.85);
		--color-alert-info-text: #6cb6ff;
		--color-alert-info-icon: #6cb6ff;
		--color-alert-info-bg: rgba(65, 132, 228, 0.1);
		--color-alert-info-border: rgba(65, 132, 228, 0.4);
		--color-alert-warn-text: #daaa3f;
		--color-alert-warn-icon: #daaa3f;
		--color-alert-warn-bg: rgba(174, 124, 20, 0.1);
		--color-alert-warn-border: rgba(174, 124, 20, 0.4);
		--color-alert-error-text: #f47067;
		--color-alert-error-icon: #f47067;
		--color-alert-error-bg: rgba(229, 83, 75, 0.1);
		--color-alert-error-border: rgba(229, 83, 75, 0.4);
		--color-alert-success-text: #6bc46d;
		--color-alert-success-icon: #6bc46d;
		--color-alert-success-bg: rgba(70, 149, 74, 0.1);
		--color-alert-success-border: rgba(70, 149, 74, 0.4);
		--color-autocomplete-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
		--color-autocomplete-row-border: #444c56;
		--color-blankslate-icon: #5f6a76;
		--color-btn-text: #adbac7;
		--color-btn-bg: #373e47;
		--color-btn-border: #444c56;
		--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-hover-bg: #444c56;
		--color-btn-hover-border: #768390;
		--color-btn-selected-bg: #2d333b;
		--color-btn-focus-bg: #373e47;
		--color-btn-focus-border: #768390;
		--color-btn-focus-shadow: 0 0 0 3px rgba(118, 131, 144, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(28, 33, 40, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(49, 109, 202, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #347d39;
		--color-btn-primary-border: #46954a;
		--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-hover-bg: #46954a;
		--color-btn-primary-hover-border: #57ab5a;
		--color-btn-primary-selected-bg: #347d39;
		--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
		--color-btn-primary-disabled-bg: rgba(52, 125, 57, 0.6);
		--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-btn-primary-focus-bg: #347d39;
		--color-btn-primary-focus-border: #57ab5a;
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: #cdd9e5;
		--color-btn-primary-counter-bg: rgba(205, 217, 229, 0.2);
		--color-btn-outline-text: #539bf5;
		--color-btn-outline-hover-text: #539bf5;
		--color-btn-outline-hover-bg: #444c56;
		--color-btn-outline-hover-border: #539bf5;
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(28, 33, 40, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(205, 217, 229, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(205, 217, 229, 0.2);
		--color-btn-outline-selected-text: #cdd9e5;
		--color-btn-outline-selected-bg: #1b4b91;
		--color-btn-outline-selected-border: rgba(205, 217, 229, 0.1);
		--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-outline-disabled-text: rgba(83, 155, 245, 0.5);
		--color-btn-outline-disabled-bg: #22272e;
		--color-btn-outline-disabled-counter-bg: rgba(49, 109, 202, 0.05);
		--color-btn-outline-focus-border: #539bf5;
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(37, 90, 178, 0.4);
		--color-btn-outline-counter-bg: rgba(49, 109, 202, 0.1);
		--color-btn-danger-text: #e5534b;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #c93c37;
		--color-btn-danger-hover-border: #e5534b;
		--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #ad2e2c;
		--color-btn-danger-selected-border: rgba(205, 217, 229, 0.1);
		--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-disabled-text: rgba(229, 83, 75, 0.5);
		--color-btn-danger-disabled-bg: #22272e;
		--color-btn-danger-disabled-counter-bg: rgba(201, 60, 55, 0.05);
		--color-btn-danger-focus-border: #e5534b;
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(173, 46, 44, 0.4);
		--color-btn-danger-counter-bg: rgba(201, 60, 55, 0.1);
		--color-btn-danger-icon: #e5534b;
		--color-btn-danger-hover-icon: #cdd9e5;
		--color-btn-counter-bg: #444c56;
		--color-counter-text: #adbac7;
		--color-counter-bg: #444c56;
		--color-counter-primary-text: #adbac7;
		--color-counter-primary-bg: #636e7b;
		--color-counter-secondary-text: #768390;
		--color-counter-secondary-bg: rgba(118, 131, 144, 0.2);
		--color-dropdown-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
		--color-label-border: #444c56;
		--color-label-primary-text: #909dab;
		--color-label-primary-border: #636e7b;
		--color-label-secondary-text: #768390;
		--color-label-secondary-border: #444c56;
		--color-label-info-text: #4184e4;
		--color-label-info-border: rgba(65, 132, 228, 0.4);
		--color-label-success-text: #57ab5a;
		--color-label-success-border: rgba(70, 149, 74, 0.4);
		--color-label-warning-text: #daaa3f;
		--color-label-warning-border: rgba(242, 211, 91, 0.4);
		--color-label-danger-text: #e5534b;
		--color-label-danger-border: rgba(229, 83, 75, 0.4);
		--color-label-orange-text: #cc6b2c;
		--color-label-orange-border: rgba(204, 107, 44, 0.4);
		--color-input-bg: #22272e;
		--color-input-contrast-bg: rgba(28, 33, 40, 0.5);
		--color-input-border: #373e47;
		--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-input-disabled-bg: #2d333b;
		--color-input-disabled-border: #444c56;
		--color-input-warning-border: #c69026;
		--color-input-error-border: #e5534b;
		--color-input-tooltip-success-text: #6bc46d;
		--color-input-tooltip-success-bg: #263231;
		--color-input-tooltip-success-border: #335a3b;
		--color-input-tooltip-warning-text: #daaa3f;
		--color-input-tooltip-warning-bg: #30302b;
		--color-input-tooltip-warning-border: #624e22;
		--color-input-tooltip-error-text: #f47067;
		--color-input-tooltip-error-bg: #362b31;
		--color-input-tooltip-error-border: #7c3b3b;
		--color-avatar-bg: rgba(205, 217, 229, 0.1);
		--color-avatar-border: rgba(205, 217, 229, 0.1);
		--color-avatar-stack-fade: #444c56;
		--color-avatar-stack-fade-more: #373e47;
		--color-avatar-child-shadow: -2px -2px 0 #22272e;
		--color-toast-text: #adbac7;
		--color-toast-bg: #444c56;
		--color-toast-border: #636e7b;
		--color-toast-shadow: 0 8px 24px #1c2128;
		--color-toast-icon: #cdd9e5;
		--color-toast-icon-bg: #316dca;
		--color-toast-icon-border: #4184e4;
		--color-toast-success-text: #adbac7;
		--color-toast-success-border: #636e7b;
		--color-toast-success-icon: #cdd9e5;
		--color-toast-success-icon-bg: #46954a;
		--color-toast-success-icon-border: #57ab5a;
		--color-toast-warning-text: #adbac7;
		--color-toast-warning-border: #636e7b;
		--color-toast-warning-icon: #cdd9e5;
		--color-toast-warning-icon-bg: #ae7c14;
		--color-toast-warning-icon-border: #c69026;
		--color-toast-danger-text: #adbac7;
		--color-toast-danger-border: #636e7b;
		--color-toast-danger-icon: #cdd9e5;
		--color-toast-danger-icon-bg: #c93c37;
		--color-toast-danger-icon-border: #e5534b;
		--color-toast-loading-text: #adbac7;
		--color-toast-loading-border: #636e7b;
		--color-toast-loading-icon: #cdd9e5;
		--color-toast-loading-icon-bg: #636e7b;
		--color-toast-loading-icon-border: #768390;
		--color-timeline-text: #909dab;
		--color-timeline-badge-bg: #22272e;
		--color-timeline-badge-success-border: #46954a;
		--color-timeline-target-badge-border: #316dca;
		--color-timeline-target-badge-shadow: #1b4b91;
		--color-select-menu-border-secondary: #444c56;
		--color-select-menu-shadow: 0 0 18px rgba(28, 33, 40, 0.4);
		--color-select-menu-backdrop-bg: rgba(28, 33, 40, 0.5);
		--color-select-menu-backdrop-border: #545d68;
		--color-select-menu-tap-highlight: rgba(68, 76, 86, 0.5);
		--color-select-menu-tap-focus-bg: #143d79;
		--color-box-blue-border: #1b4b91;
		--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
		--color-box-row-blue-bg: rgba(108, 182, 255, 0.1);
		--color-box-header-blue-bg: #22272e;
		--color-box-header-blue-border: #444c56;
		--color-box-border-info: rgba(65, 132, 228, 0.4);
		--color-box-bg-info: rgba(65, 132, 228, 0.1);
		--color-box-border-warning: rgba(174, 124, 20, 0.4);
		--color-box-bg-warning: rgba(174, 124, 20, 0.1);
		--color-branch-name-text: #adbac7;
		--color-branch-name-icon: #909dab;
		--color-branch-name-bg: rgba(83, 155, 245, 0.1);
		--color-branch-name-link-text: #539bf5;
		--color-branch-name-link-icon: #539bf5;
		--color-branch-name-link-bg: rgba(83, 155, 245, 0.1);
		--color-markdown-code-bg: rgba(205, 217, 229, 0.15);
		--color-markdown-frame-border: #4f5964;
		--color-markdown-blockquote-border: #4f5964;
		--color-markdown-table-border: #4f5964;
		--color-markdown-table-tr-border: #3b424b;
		--color-menu-heading-text: #768390;
		--color-menu-border-active: #f78166;
		--color-menu-bg-active: #2d333b;
		--color-sidenav-selected-bg: #373e47;
		--color-sidenav-border-active: #f78166;
		--color-header-text: rgba(205, 217, 229, 0.7);
		--color-header-bg: #2d333b;
		--color-header-logo: #cdd9e5;
		--color-filter-item-bar-bg: #292e35;
		--color-hidden-text-expander-bg: #373e47;
		--color-hidden-text-expander-bg-hover: #444c56;
		--color-drag-and-drop-border: #393f48;
		--color-upload-enabled-border: #4f5964;
		--color-upload-enabled-border-focused: #4f84d4;
		--color-previewable-comment-form-border: #393f48;
		--color-underlinenav-border: rgba(68, 76, 86, 0);
		--color-underlinenav-border-hover: #444c56;
		--color-underlinenav-border-active: #f78166;
		--color-underlinenav-text: #768390;
		--color-underlinenav-text-hover: #adbac7;
		--color-underlinenav-text-active: #adbac7;
		--color-underlinenav-icon: #636e7b;
		--color-underlinenav-icon-hover: #adbac7;
		--color-underlinenav-icon-active: #adbac7;
		--color-underlinenav-counter-text: #768390;
		--color-underlinenav-counter-bg: rgba(118, 131, 144, 0.2);
		--color-verified-badge-text: #57ab5a;
		--color-verified-badge-bg: rgba(87, 171, 90, 0.1);
		--color-verified-badge-border: rgba(87, 171, 90, 0.4);
		--color-social-count-bg: #373e47;
		--color-tooltip-text: #cdd9e5;
		--color-tooltip-bg: #636e7b;
		--color-header-search-bg: #22272e;
		--color-header-search-border: #373e47;
		--color-search-keyword-hl: rgba(174, 124, 20, 0.4);
		--color-diffstat-neutral-bg: #444c56;
		--color-diffstat-neutral-border: rgba(205, 217, 229, 0.1);
		--color-diffstat-deletion-bg: #c93c37;
		--color-diffstat-deletion-border: #e5534b;
		--color-diffstat-addition-bg: #347d39;
		--color-diffstat-addition-border: #46954a;
		--color-mktg-success: #3d8942;
		--color-mktg-info: #3877d5;
		--color-mktg-bg-shade-gradient-top: rgba(28, 33, 40, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(28, 33, 40, 0);
		--color-mktg-btn-bg: #316dca;
		--color-mktg-btn-border: #316dca;
		--color-mktg-btn-text: #cdd9e5;
		--color-mktg-btn-icon: #cdd9e5;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(49, 109, 202, 0.3);
		--color-mktg-btn-hover-bg: #4184e4;
		--color-mktg-btn-hover-border: #4184e4;
		--color-mktg-btn-disabled-bg: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-disabled-icon: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-primary-bg: #347d39;
		--color-mktg-btn-primary-border: #347d39;
		--color-mktg-btn-primary-text: #cdd9e5;
		--color-mktg-btn-primary-icon: #cdd9e5;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(52, 125, 57, 0.3);
		--color-mktg-btn-primary-hover-bg: #46954a;
		--color-mktg-btn-primary-hover-border: #46954a;
		--color-mktg-btn-primary-disabled-bg: rgba(70, 149, 74, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-primary-disabled-icon: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-outline-text: #4184e4;
		--color-mktg-btn-outline-icon: #4184e4;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(65, 132, 228, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #4184e4;
		--color-mktg-btn-outline-hover-text: #539bf5;
		--color-mktg-btn-outline-hover-icon: #539bf5;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(65, 132, 228, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-text: #adbac7;
		--color-mktg-btn-dark-icon: #adbac7;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(173, 186, 199, 0.3);
		--color-mktg-btn-dark-hover-bg: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-hover-border: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-hover-text: #22272e;
		--color-mktg-btn-dark-hover-icon: #22272e;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(173, 186, 199, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(173, 186, 199, 0.5);
		--color-files-explorer-icon: #636e7b;
		--color-hl-author-bg: #0f2d5c;
		--color-hl-author-border: #1b4b91;
		--color-logo-subdued: #444c56;
		--color-discussion-border: #494c49;
		--color-discussion-bg-success: rgba(70, 149, 74, 0.1);
		--color-actions-workflow-table-sticky-bg: rgba(34, 39, 46, 0.95);
		--color-repo-language-color-border: rgba(205, 217, 229, 0.2);
		--color-code-selection-bg: rgba(108, 182, 255, 0.3);
		--color-highlight-text: #ffd467;
		--color-highlight-bg: rgba(204, 143, 44, 0.38);
		--color-blob-line-highlight-bg: rgba(198, 144, 38, 0.15);
		--color-blob-line-highlight-border: #daaa3f;
		--color-diff-addition-text: #6bc46d;
		--color-diff-addition-bg: rgba(70, 149, 74, 0.2);
		--color-diff-addition-border: #2b6a30;
		--color-diff-deletion-text: #e5534b;
		--color-diff-deletion-bg: rgba(201, 60, 55, 0.2);
		--color-diff-deletion-border: #ad2e2c;
		--color-diff-change-text: #daaa3f;
		--color-diff-change-bg: #452700;
		--color-diff-change-border: #966600;
		--color-diff-blob-num-text: rgba(205, 217, 229, 0.3);
		--color-diff-blob-num-hover-text: rgba(205, 217, 229, 0.6);
		--color-diff-blob-addition-num-text: #57ab5a;
		--color-diff-blob-addition-num-hover-text: #8ddb8c;
		--color-diff-blob-addition-num-bg: rgba(70, 149, 74, 0.1);
		--color-diff-blob-addition-line-bg: rgba(70, 149, 74, 0.2);
		--color-diff-blob-addition-word-bg: rgba(70, 149, 74, 0.55);
		--color-diff-blob-deletion-num-text: #e5534b;
		--color-diff-blob-deletion-num-hover-text: #ff938a;
		--color-diff-blob-deletion-num-bg: rgba(201, 60, 55, 0.1);
		--color-diff-blob-deletion-line-bg: rgba(201, 60, 55, 0.2);
		--color-diff-blob-deletion-word-bg: rgba(201, 60, 55, 0.5);
		--color-diff-blob-hunk-text: #768390;
		--color-diff-blob-hunk-num-bg: rgba(83, 155, 245, 0.15);
		--color-diff-blob-hunk-line-bg: rgba(83, 155, 245, 0.1);
		--color-diff-blob-empty-block-bg: #2d333b;
		--color-diff-blob-selected-line-highlight-bg: rgba(174, 124, 20, 0.1);
		--color-diff-blob-selected-line-highlight-border: #ae7c14;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
		--color-diff-blob-expander-icon: #768390;
		--color-diff-blob-expander-hover-icon: #cdd9e5;
		--color-diff-blob-expander-hover-bg: #316dca;
		--color-diff-blob-comment-button-icon: #cdd9e5;
		--color-diff-blob-comment-button-bg: #316dca;
		--color-diff-blob-comment-button-gradient-bg: #437bd1;
		--color-global-nav-logo: #cdd9e5;
		--color-global-nav-bg: #2d333b;
		--color-global-nav-text: #adbac7;
		--color-global-nav-icon: #adbac7;
		--color-global-nav-input-bg: #22272e;
		--color-global-nav-input-border: #373e47;
		--color-global-nav-input-icon: #373e47;
		--color-global-nav-input-placeholder: #545d68;
		--color-calendar-graph-day-bg: #2d333b;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #003820;
		--color-calendar-graph-day-L2-bg: #00602d;
		--color-calendar-graph-day-L3-bg: #10983d;
		--color-calendar-graph-day-L4-bg: #27d545;
		--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
		--color-footer-invertocat-octicon: #444c56;
		--color-footer-invertocat-octicon-hover: #636e7b;
		--color-pr-state-draft-text: #768390;
		--color-pr-state-draft-bg: rgba(118, 131, 144, 0.1);
		--color-pr-state-draft-border: rgba(118, 131, 144, 0.4);
		--color-pr-state-open-text: #57ab5a;
		--color-pr-state-open-bg: rgba(87, 171, 90, 0.1);
		--color-pr-state-open-border: rgba(87, 171, 90, 0.4);
		--color-pr-state-merged-text: #986ee2;
		--color-pr-state-merged-bg: rgba(176, 131, 240, 0.1);
		--color-pr-state-merged-border: rgba(176, 131, 240, 0.4);
		--color-pr-state-closed-text: #e5534b;
		--color-pr-state-closed-bg: rgba(201, 60, 55, 0.1);
		--color-pr-state-closed-border: rgba(201, 60, 55, 0.4);
		--color-topic-tag-text: #539bf5;
		--color-topic-tag-bg: rgba(65, 132, 228, 0.1);
		--color-topic-tag-hover-bg: rgba(65, 132, 228, 0.2);
		--color-topic-tag-active-bg: rgba(65, 132, 228, 0.15);
		--color-merge-box-success-icon-bg: rgba(70, 149, 74, 0.1);
		--color-merge-box-success-icon-text: #57ab5a;
		--color-merge-box-success-icon-border: rgba(70, 149, 74, 0.4);
		--color-merge-box-success-indicator-bg: #347d39;
		--color-merge-box-success-indicator-border: #46954a;
		--color-merge-box-merged-icon-bg: rgba(176, 131, 240, 0.1);
		--color-merge-box-merged-icon-text: #986ee2;
		--color-merge-box-merged-icon-border: rgba(176, 131, 240, 0.4);
		--color-merge-box-merged-box-border: rgba(176, 131, 240, 0.4);
		--color-merge-box-neutral-icon-bg: rgba(173, 186, 199, 0.1);
		--color-merge-box-neutral-icon-text: #768390;
		--color-merge-box-neutral-icon-border: rgba(173, 186, 199, 0.4);
		--color-merge-box-neutral-indicator-bg: #545d68;
		--color-merge-box-neutral-indicator-border: #636e7b;
		--color-merge-box-warning-icon-bg: rgba(174, 124, 20, 0.1);
		--color-merge-box-warning-icon-text: #daaa3f;
		--color-merge-box-warning-icon-border: rgba(174, 124, 20, 0.4);
		--color-merge-box-warning-box-border: rgba(174, 124, 20, 0.4);
		--color-merge-box-warning-merge-highlight: rgba(174, 124, 20, 0.1);
		--color-merge-box-error-icon-bg: rgba(229, 83, 75, 0.1);
		--color-merge-box-error-icon-text: #e5534b;
		--color-merge-box-error-icon-border: rgba(229, 83, 75, 0.4);
		--color-merge-box-error-indicator-bg: #c93c37;
		--color-merge-box-error-indicator-border: #e5534b;
		--color-project-card-bg: #2d333b;
		--color-project-header-bg: #22272e;
		--color-project-sidebar-bg: #2d333b;
		--color-project-gradient-in: #2d333b;
		--color-project-gradient-out: rgba(45, 51, 59, 0);
		--color-checks-bg: #1e2228;
		--color-checks-run-border-width: 1px;
		--color-checks-container-border-width: 1px;
		--color-checks-text-primary: #adbac7;
		--color-checks-text-secondary: #768390;
		--color-checks-text-link: #539bf5;
		--color-checks-btn-icon: #636e7b;
		--color-checks-btn-hover-icon: #adbac7;
		--color-checks-btn-hover-bg: #444c56;
		--color-checks-input-text: #768390;
		--color-checks-input-placeholder-text: #545d68;
		--color-checks-input-focus-text: #adbac7;
		--color-checks-input-bg: #22272e;
		--color-checks-input-shadow: 0 0 0 1px #373e47;
		--color-checks-dropdown-text: #adbac7;
		--color-checks-dropdown-bg: #373e47;
		--color-checks-dropdown-border: #444c56;
		--color-checks-dropdown-hover-text: #cdd9e5;
		--color-checks-dropdown-hover-bg: #316dca;
		--color-checks-dropdown-btn-hover-text: #cdd9e5;
		--color-checks-dropdown-btn-hover-bg: #2d333b;
		--color-checks-scrollbar-thumb-bg: #444c56;
		--color-checks-header-label-text: #768390;
		--color-checks-header-label-open-text: #adbac7;
		--color-checks-header-border: #373e47;
		--color-checks-header-icon: #636e7b;
		--color-checks-line-text: #768390;
		--color-checks-line-num-text: #768390;
		--color-checks-line-timestamp-text: #768390;
		--color-checks-line-hover-bg: #2d333b;
		--color-checks-line-selected-bg: rgba(65, 132, 228, 0.1);
		--color-checks-line-selected-num-text: #539bf5;
		--color-checks-line-dt-fm-text: #22272e;
		--color-checks-line-dt-fm-bg: #c69026;
		--color-checks-gate-bg: rgba(128, 84, 0, 0.15);
		--color-checks-gate-text: #768390;
		--color-checks-gate-waiting-text: #daaa3f;
		--color-checks-step-header-open-bg: #2d333b;
		--color-checks-step-error-text: #e5534b;
		--color-checks-step-warning-text: #daaa3f;
		--color-checks-logline-text: #636e7b;
		--color-checks-logline-num-text: #768390;
		--color-checks-logline-debug-text: #b083f0;
		--color-checks-logline-error-text: #768390;
		--color-checks-logline-error-num-text: #768390;
		--color-checks-logline-error-bg: rgba(229, 83, 75, 0.1);
		--color-checks-logline-warning-text: #768390;
		--color-checks-logline-warning-num-text: #daaa3f;
		--color-checks-logline-warning-bg: rgba(174, 124, 20, 0.1);
		--color-checks-logline-command-text: #539bf5;
		--color-checks-logline-section-text: #6bc46d;
		--color-intro-shelf-gradient-left: rgba(65, 132, 228, 0.1);
		--color-intro-shelf-gradient-right: rgba(70, 149, 74, 0.1);
		--color-intro-shelf-gradient-in: #22272e;
		--color-intro-shelf-gradient-out: rgba(34, 39, 46, 0);
		--color-marketing-icon-primary: #6cb6ff;
		--color-marketing-icon-secondary: #316dca;
		--color-prettylights-syntax-comment: #768390;
		--color-prettylights-syntax-constant: #6cb6ff;
		--color-prettylights-syntax-entity: #dcbdfb;
		--color-prettylights-syntax-storage-modifier-import: #adbac7;
		--color-prettylights-syntax-entity-tag: #8ddb8c;
		--color-prettylights-syntax-keyword: #f47067;
		--color-prettylights-syntax-string: #96d0ff;
		--color-prettylights-syntax-variable: #f69d50;
		--color-prettylights-syntax-brackethighlighter-unmatched: #e5534b;
		--color-prettylights-syntax-invalid-illegal-text: #cdd9e5;
		--color-prettylights-syntax-invalid-illegal-bg: #922323;
		--color-prettylights-syntax-carriage-return-text: #cdd9e5;
		--color-prettylights-syntax-carriage-return-bg: #ad2e2c;
		--color-prettylights-syntax-string-regexp: #8ddb8c;
		--color-prettylights-syntax-markup-list: #eac55f;
		--color-prettylights-syntax-markup-heading: #316dca;
		--color-prettylights-syntax-markup-italic: #adbac7;
		--color-prettylights-syntax-markup-bold: #adbac7;
		--color-prettylights-syntax-markup-deleted-text: #ffd8d3;
		--color-prettylights-syntax-markup-deleted-bg: #78191b;
		--color-prettylights-syntax-markup-inserted-text: #b4f1b4;
		--color-prettylights-syntax-markup-inserted-bg: #1b4721;
		--color-prettylights-syntax-markup-changed-text: #ffddb0;
		--color-prettylights-syntax-markup-changed-bg: #682d0f;
		--color-prettylights-syntax-markup-ignored-text: #adbac7;
		--color-prettylights-syntax-markup-ignored-bg: #255ab2;
		--color-prettylights-syntax-meta-diff-range: #dcbdfb;
		--color-prettylights-syntax-brackethighlighter-angle: #768390;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #545d68;
		--color-prettylights-syntax-constant-other-reference-link: #96d0ff;
		--color-codemirror-text: #adbac7;
		--color-codemirror-bg: #22272e;
		--color-codemirror-gutters-bg: #22272e;
		--color-codemirror-guttermarker-text: #22272e;
		--color-codemirror-guttermarker-subtle-text: #636e7b;
		--color-codemirror-linenumber-text: #768390;
		--color-codemirror-cursor: #cdd9e5;
		--color-codemirror-selection-bg: rgba(108, 182, 255, 0.3);
		--color-codemirror-activeline-bg: #2d333b;
		--color-codemirror-matchingbracket-text: #adbac7;
		--color-codemirror-lines-bg: #22272e;
		--color-codemirror-syntax-comment: #768390;
		--color-codemirror-syntax-constant: #6cb6ff;
		--color-codemirror-syntax-entity: #dcbdfb;
		--color-codemirror-syntax-keyword: #f47067;
		--color-codemirror-syntax-storage: #f47067;
		--color-codemirror-syntax-string: #96d0ff;
		--color-codemirror-syntax-support: #6cb6ff;
		--color-codemirror-syntax-variable: #f69d50;
		--color-ansi-black: #22272e;
		--color-ansi-black-bright: #2d333b;
		--color-ansi-white: #909dab;
		--color-ansi-white-bright: #909dab;
		--color-ansi-gray: #636e7b;
		--color-ansi-red: #f47067;
		--color-ansi-red-bright: #ff938a;
		--color-ansi-green: #57ab5a;
		--color-ansi-green-bright: #6bc46d;
		--color-ansi-yellow: #c69026;
		--color-ansi-yellow-bright: #daaa3f;
		--color-ansi-blue: #539bf5;
		--color-ansi-blue-bright: #6cb6ff;
		--color-ansi-magenta: #b083f0;
		--color-ansi-magenta-bright: #dcbdfb;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme="dark_dimmed"] {
		--color-scale-black: #1c2128;
		--color-scale-white: #cdd9e5;
		--color-scale-gray-0: #cdd9e5;
		--color-scale-gray-1: #adbac7;
		--color-scale-gray-2: #909dab;
		--color-scale-gray-3: #768390;
		--color-scale-gray-4: #636e7b;
		--color-scale-gray-5: #545d68;
		--color-scale-gray-6: #444c56;
		--color-scale-gray-7: #373e47;
		--color-scale-gray-8: #2d333b;
		--color-scale-gray-9: #22272e;
		--color-scale-blue-0: #c6e6ff;
		--color-scale-blue-1: #96d0ff;
		--color-scale-blue-2: #6cb6ff;
		--color-scale-blue-3: #539bf5;
		--color-scale-blue-4: #4184e4;
		--color-scale-blue-5: #316dca;
		--color-scale-blue-6: #255ab2;
		--color-scale-blue-7: #1b4b91;
		--color-scale-blue-8: #143d79;
		--color-scale-blue-9: #0f2d5c;
		--color-scale-green-0: #b4f1b4;
		--color-scale-green-1: #8ddb8c;
		--color-scale-green-2: #6bc46d;
		--color-scale-green-3: #57ab5a;
		--color-scale-green-4: #46954a;
		--color-scale-green-5: #347d39;
		--color-scale-green-6: #2b6a30;
		--color-scale-green-7: #245829;
		--color-scale-green-8: #1b4721;
		--color-scale-green-9: #113417;
		--color-scale-yellow-0: #fbe090;
		--color-scale-yellow-1: #eac55f;
		--color-scale-yellow-2: #daaa3f;
		--color-scale-yellow-3: #c69026;
		--color-scale-yellow-4: #ae7c14;
		--color-scale-yellow-5: #966600;
		--color-scale-yellow-6: #805400;
		--color-scale-yellow-7: #6c4400;
		--color-scale-yellow-8: #593600;
		--color-scale-yellow-9: #452700;
		--color-scale-orange-0: #ffddb0;
		--color-scale-orange-1: #ffbc6f;
		--color-scale-orange-2: #f69d50;
		--color-scale-orange-3: #e0823d;
		--color-scale-orange-4: #cc6b2c;
		--color-scale-orange-5: #ae5622;
		--color-scale-orange-6: #94471b;
		--color-scale-orange-7: #7f3913;
		--color-scale-orange-8: #682d0f;
		--color-scale-orange-9: #4d210c;
		--color-scale-red-0: #ffd8d3;
		--color-scale-red-1: #ffb8b0;
		--color-scale-red-2: #ff938a;
		--color-scale-red-3: #f47067;
		--color-scale-red-4: #e5534b;
		--color-scale-red-5: #c93c37;
		--color-scale-red-6: #ad2e2c;
		--color-scale-red-7: #922323;
		--color-scale-red-8: #78191b;
		--color-scale-red-9: #78191b;
		--color-scale-purple-0: #eedcff;
		--color-scale-purple-1: #dcbdfb;
		--color-scale-purple-2: #dcbdfb;
		--color-scale-purple-3: #b083f0;
		--color-scale-purple-4: #986ee2;
		--color-scale-purple-5: #8256d0;
		--color-scale-purple-6: #6b44bc;
		--color-scale-purple-7: #5936a2;
		--color-scale-purple-8: #472c82;
		--color-scale-purple-9: #352160;
		--color-scale-pink-0: #ffd7eb;
		--color-scale-pink-1: #ffb3d8;
		--color-scale-pink-2: #fc8dc7;
		--color-scale-pink-3: #e275ad;
		--color-scale-pink-4: #c96198;
		--color-scale-pink-5: #ae4c82;
		--color-scale-pink-6: #983b6e;
		--color-scale-pink-7: #7e325a;
		--color-scale-pink-8: #69264a;
		--color-scale-pink-9: #551639;
		--color-auto-black: #cdd9e5;
		--color-auto-white: #1c2128;
		--color-auto-gray-0: #22272e;
		--color-auto-gray-1: #2d333b;
		--color-auto-gray-2: #373e47;
		--color-auto-gray-3: #444c56;
		--color-auto-gray-4: #545d68;
		--color-auto-gray-5: #636e7b;
		--color-auto-gray-6: #768390;
		--color-auto-gray-7: #909dab;
		--color-auto-gray-8: #adbac7;
		--color-auto-gray-9: #cdd9e5;
		--color-auto-blue-0: #0f2d5c;
		--color-auto-blue-1: #143d79;
		--color-auto-blue-2: #1b4b91;
		--color-auto-blue-3: #255ab2;
		--color-auto-blue-4: #316dca;
		--color-auto-blue-5: #4184e4;
		--color-auto-blue-6: #539bf5;
		--color-auto-blue-7: #6cb6ff;
		--color-auto-blue-8: #96d0ff;
		--color-auto-blue-9: #c6e6ff;
		--color-auto-green-0: #113417;
		--color-auto-green-1: #1b4721;
		--color-auto-green-2: #245829;
		--color-auto-green-3: #2b6a30;
		--color-auto-green-4: #347d39;
		--color-auto-green-5: #46954a;
		--color-auto-green-6: #57ab5a;
		--color-auto-green-7: #6bc46d;
		--color-auto-green-8: #8ddb8c;
		--color-auto-green-9: #b4f1b4;
		--color-auto-yellow-0: #452700;
		--color-auto-yellow-1: #593600;
		--color-auto-yellow-2: #6c4400;
		--color-auto-yellow-3: #805400;
		--color-auto-yellow-4: #966600;
		--color-auto-yellow-5: #ae7c14;
		--color-auto-yellow-6: #c69026;
		--color-auto-yellow-7: #daaa3f;
		--color-auto-yellow-8: #eac55f;
		--color-auto-yellow-9: #fbe090;
		--color-auto-orange-0: #4d210c;
		--color-auto-orange-1: #682d0f;
		--color-auto-orange-2: #7f3913;
		--color-auto-orange-3: #94471b;
		--color-auto-orange-4: #ae5622;
		--color-auto-orange-5: #cc6b2c;
		--color-auto-orange-6: #e0823d;
		--color-auto-orange-7: #f69d50;
		--color-auto-orange-8: #ffbc6f;
		--color-auto-orange-9: #ffddb0;
		--color-auto-red-0: #78191b;
		--color-auto-red-1: #78191b;
		--color-auto-red-2: #922323;
		--color-auto-red-3: #ad2e2c;
		--color-auto-red-4: #c93c37;
		--color-auto-red-5: #e5534b;
		--color-auto-red-6: #f47067;
		--color-auto-red-7: #ff938a;
		--color-auto-red-8: #ffb8b0;
		--color-auto-red-9: #ffd8d3;
		--color-auto-purple-0: #352160;
		--color-auto-purple-1: #472c82;
		--color-auto-purple-2: #5936a2;
		--color-auto-purple-3: #6b44bc;
		--color-auto-purple-4: #8256d0;
		--color-auto-purple-5: #986ee2;
		--color-auto-purple-6: #b083f0;
		--color-auto-purple-7: #dcbdfb;
		--color-auto-purple-8: #dcbdfb;
		--color-auto-purple-9: #eedcff;
		--color-auto-pink-0: #551639;
		--color-auto-pink-1: #69264a;
		--color-auto-pink-2: #7e325a;
		--color-auto-pink-3: #983b6e;
		--color-auto-pink-4: #ae4c82;
		--color-auto-pink-5: #c96198;
		--color-auto-pink-6: #e275ad;
		--color-auto-pink-7: #fc8dc7;
		--color-auto-pink-8: #ffb3d8;
		--color-auto-pink-9: #ffd7eb;
		--color-text-primary: #adbac7;
		--color-text-secondary: #768390;
		--color-text-tertiary: #768390;
		--color-text-placeholder: #545d68;
		--color-text-disabled: #545d68;
		--color-text-inverse: #22272e;
		--color-text-link: #539bf5;
		--color-text-danger: #e5534b;
		--color-text-success: #6bc46d;
		--color-text-warning: #daaa3f;
		--color-text-white: #cdd9e5;
		--color-icon-primary: #adbac7;
		--color-icon-secondary: #636e7b;
		--color-icon-tertiary: #545d68;
		--color-icon-info: #6cb6ff;
		--color-icon-danger: #e5534b;
		--color-icon-success: #6bc46d;
		--color-icon-warning: #daaa3f;
		--color-border-primary: #444c56;
		--color-border-secondary: #373e47;
		--color-border-tertiary: #636e7b;
		--color-border-overlay: #444c56;
		--color-border-inverse: #cdd9e5;
		--color-border-info: rgba(65, 132, 228, 0.4);
		--color-border-danger: rgba(229, 83, 75, 0.4);
		--color-border-success: rgba(87, 171, 90, 0.4);
		--color-border-warning: rgba(174, 124, 20, 0.4);
		--color-bg-canvas: #22272e;
		--color-bg-canvas-mobile: #1c2128;
		--color-bg-canvas-inverse: #cdd9e5;
		--color-bg-canvas-inset: #1e2228;
		--color-bg-primary: #22272e;
		--color-bg-secondary: #22272e;
		--color-bg-tertiary: #2d333b;
		--color-bg-overlay: #373e47;
		--color-bg-backdrop: rgba(28, 33, 40, 0.8);
		--color-bg-info: rgba(65, 132, 228, 0.1);
		--color-bg-info-inverse: #4184e4;
		--color-bg-danger: rgba(229, 83, 75, 0.1);
		--color-bg-danger-inverse: #c93c37;
		--color-bg-success: rgba(70, 149, 74, 0.1);
		--color-bg-success-inverse: #46954a;
		--color-bg-warning: rgba(174, 124, 20, 0.1);
		--color-bg-warning-inverse: #ae7c14;
		--color-shadow-small: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-medium: 0 3px 6px #1c2128;
		--color-shadow-large: 0 8px 24px #1c2128;
		--color-shadow-extra-large: 0 12px 48px #1c2128;
		--color-shadow-highlight: 0 0 rgba(0, 0, 0, 0);
		--color-shadow-inset: 0 0 rgba(0, 0, 0, 0);
		--color-state-hover-primary-bg: #316dca;
		--color-state-hover-primary-border: #4184e4;
		--color-state-hover-primary-text: #cdd9e5;
		--color-state-hover-primary-icon: #cdd9e5;
		--color-state-hover-secondary-bg: #2d333b;
		--color-state-hover-secondary-border: #2d333b;
		--color-state-selected-primary-bg: #316dca;
		--color-state-selected-primary-border: #4184e4;
		--color-state-selected-primary-text: #cdd9e5;
		--color-state-selected-primary-icon: #cdd9e5;
		--color-state-focus-border: #4184e4;
		--color-state-focus-shadow: 0 0 0 3px #143d79;
		--color-fade-fg-10: rgba(205, 217, 229, 0.1);
		--color-fade-fg-15: rgba(205, 217, 229, 0.15);
		--color-fade-fg-30: rgba(205, 217, 229, 0.3);
		--color-fade-fg-50: rgba(205, 217, 229, 0.5);
		--color-fade-fg-70: rgba(205, 217, 229, 0.7);
		--color-fade-fg-85: rgba(205, 217, 229, 0.85);
		--color-fade-black-10: rgba(28, 33, 40, 0.1);
		--color-fade-black-15: rgba(28, 33, 40, 0.15);
		--color-fade-black-30: rgba(28, 33, 40, 0.3);
		--color-fade-black-50: rgba(28, 33, 40, 0.5);
		--color-fade-black-70: rgba(28, 33, 40, 0.7);
		--color-fade-black-85: rgba(28, 33, 40, 0.85);
		--color-fade-white-10: rgba(205, 217, 229, 0.1);
		--color-fade-white-15: rgba(205, 217, 229, 0.15);
		--color-fade-white-30: rgba(205, 217, 229, 0.3);
		--color-fade-white-50: rgba(205, 217, 229, 0.5);
		--color-fade-white-70: rgba(205, 217, 229, 0.7);
		--color-fade-white-85: rgba(205, 217, 229, 0.85);
		--color-alert-info-text: #6cb6ff;
		--color-alert-info-icon: #6cb6ff;
		--color-alert-info-bg: rgba(65, 132, 228, 0.1);
		--color-alert-info-border: rgba(65, 132, 228, 0.4);
		--color-alert-warn-text: #daaa3f;
		--color-alert-warn-icon: #daaa3f;
		--color-alert-warn-bg: rgba(174, 124, 20, 0.1);
		--color-alert-warn-border: rgba(174, 124, 20, 0.4);
		--color-alert-error-text: #f47067;
		--color-alert-error-icon: #f47067;
		--color-alert-error-bg: rgba(229, 83, 75, 0.1);
		--color-alert-error-border: rgba(229, 83, 75, 0.4);
		--color-alert-success-text: #6bc46d;
		--color-alert-success-icon: #6bc46d;
		--color-alert-success-bg: rgba(70, 149, 74, 0.1);
		--color-alert-success-border: rgba(70, 149, 74, 0.4);
		--color-autocomplete-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
		--color-autocomplete-row-border: #444c56;
		--color-blankslate-icon: #5f6a76;
		--color-btn-text: #adbac7;
		--color-btn-bg: #373e47;
		--color-btn-border: #444c56;
		--color-btn-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-hover-bg: #444c56;
		--color-btn-hover-border: #768390;
		--color-btn-selected-bg: #2d333b;
		--color-btn-focus-bg: #373e47;
		--color-btn-focus-border: #768390;
		--color-btn-focus-shadow: 0 0 0 3px rgba(118, 131, 144, 0.3);
		--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(28, 33, 40, 0.15);
		--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(49, 109, 202, 0.3);
		--color-btn-primary-text: #ffffff;
		--color-btn-primary-bg: #347d39;
		--color-btn-primary-border: #46954a;
		--color-btn-primary-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-hover-bg: #46954a;
		--color-btn-primary-hover-border: #57ab5a;
		--color-btn-primary-selected-bg: #347d39;
		--color-btn-primary-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
		--color-btn-primary-disabled-bg: rgba(52, 125, 57, 0.6);
		--color-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-btn-primary-focus-bg: #347d39;
		--color-btn-primary-focus-border: #57ab5a;
		--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
		--color-btn-primary-icon: #cdd9e5;
		--color-btn-primary-counter-bg: rgba(205, 217, 229, 0.2);
		--color-btn-outline-text: #539bf5;
		--color-btn-outline-hover-text: #539bf5;
		--color-btn-outline-hover-bg: #444c56;
		--color-btn-outline-hover-border: #539bf5;
		--color-btn-outline-hover-shadow: 0 1px 0 rgba(28, 33, 40, 0.1);
		--color-btn-outline-hover-inset-shadow: inset 0 1px 0
			rgba(205, 217, 229, 0.03);
		--color-btn-outline-hover-counter-bg: rgba(205, 217, 229, 0.2);
		--color-btn-outline-selected-text: #cdd9e5;
		--color-btn-outline-selected-bg: #1b4b91;
		--color-btn-outline-selected-border: rgba(205, 217, 229, 0.1);
		--color-btn-outline-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-outline-disabled-text: rgba(83, 155, 245, 0.5);
		--color-btn-outline-disabled-bg: #22272e;
		--color-btn-outline-disabled-counter-bg: rgba(49, 109, 202, 0.05);
		--color-btn-outline-focus-border: #539bf5;
		--color-btn-outline-focus-shadow: 0 0 0 3px rgba(37, 90, 178, 0.4);
		--color-btn-outline-counter-bg: rgba(49, 109, 202, 0.1);
		--color-btn-danger-text: #e5534b;
		--color-btn-danger-hover-text: #ffffff;
		--color-btn-danger-hover-bg: #c93c37;
		--color-btn-danger-hover-border: #e5534b;
		--color-btn-danger-hover-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-inset-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-hover-counter-bg: rgba(255, 255, 255, 0.2);
		--color-btn-danger-selected-text: #ffffff;
		--color-btn-danger-selected-bg: #ad2e2c;
		--color-btn-danger-selected-border: rgba(205, 217, 229, 0.1);
		--color-btn-danger-selected-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-btn-danger-disabled-text: rgba(229, 83, 75, 0.5);
		--color-btn-danger-disabled-bg: #22272e;
		--color-btn-danger-disabled-counter-bg: rgba(201, 60, 55, 0.05);
		--color-btn-danger-focus-border: #e5534b;
		--color-btn-danger-focus-shadow: 0 0 0 3px rgba(173, 46, 44, 0.4);
		--color-btn-danger-counter-bg: rgba(201, 60, 55, 0.1);
		--color-btn-danger-icon: #e5534b;
		--color-btn-danger-hover-icon: #cdd9e5;
		--color-btn-counter-bg: #444c56;
		--color-counter-text: #adbac7;
		--color-counter-bg: #444c56;
		--color-counter-primary-text: #adbac7;
		--color-counter-primary-bg: #636e7b;
		--color-counter-secondary-text: #768390;
		--color-counter-secondary-bg: rgba(118, 131, 144, 0.2);
		--color-dropdown-shadow: 0 16px 32px rgba(28, 33, 40, 0.85);
		--color-label-border: #444c56;
		--color-label-primary-text: #909dab;
		--color-label-primary-border: #636e7b;
		--color-label-secondary-text: #768390;
		--color-label-secondary-border: #444c56;
		--color-label-info-text: #4184e4;
		--color-label-info-border: rgba(65, 132, 228, 0.4);
		--color-label-success-text: #57ab5a;
		--color-label-success-border: rgba(70, 149, 74, 0.4);
		--color-label-warning-text: #daaa3f;
		--color-label-warning-border: rgba(242, 211, 91, 0.4);
		--color-label-danger-text: #e5534b;
		--color-label-danger-border: rgba(229, 83, 75, 0.4);
		--color-label-orange-text: #cc6b2c;
		--color-label-orange-border: rgba(204, 107, 44, 0.4);
		--color-input-bg: #22272e;
		--color-input-contrast-bg: rgba(28, 33, 40, 0.5);
		--color-input-border: #373e47;
		--color-input-shadow: 0 0 rgba(0, 0, 0, 0);
		--color-input-disabled-bg: #2d333b;
		--color-input-disabled-border: #444c56;
		--color-input-warning-border: #c69026;
		--color-input-error-border: #e5534b;
		--color-input-tooltip-success-text: #6bc46d;
		--color-input-tooltip-success-bg: #263231;
		--color-input-tooltip-success-border: #335a3b;
		--color-input-tooltip-warning-text: #daaa3f;
		--color-input-tooltip-warning-bg: #30302b;
		--color-input-tooltip-warning-border: #624e22;
		--color-input-tooltip-error-text: #f47067;
		--color-input-tooltip-error-bg: #362b31;
		--color-input-tooltip-error-border: #7c3b3b;
		--color-avatar-bg: rgba(205, 217, 229, 0.1);
		--color-avatar-border: rgba(205, 217, 229, 0.1);
		--color-avatar-stack-fade: #444c56;
		--color-avatar-stack-fade-more: #373e47;
		--color-avatar-child-shadow: -2px -2px 0 #22272e;
		--color-toast-text: #adbac7;
		--color-toast-bg: #444c56;
		--color-toast-border: #636e7b;
		--color-toast-shadow: 0 8px 24px #1c2128;
		--color-toast-icon: #cdd9e5;
		--color-toast-icon-bg: #316dca;
		--color-toast-icon-border: #4184e4;
		--color-toast-success-text: #adbac7;
		--color-toast-success-border: #636e7b;
		--color-toast-success-icon: #cdd9e5;
		--color-toast-success-icon-bg: #46954a;
		--color-toast-success-icon-border: #57ab5a;
		--color-toast-warning-text: #adbac7;
		--color-toast-warning-border: #636e7b;
		--color-toast-warning-icon: #cdd9e5;
		--color-toast-warning-icon-bg: #ae7c14;
		--color-toast-warning-icon-border: #c69026;
		--color-toast-danger-text: #adbac7;
		--color-toast-danger-border: #636e7b;
		--color-toast-danger-icon: #cdd9e5;
		--color-toast-danger-icon-bg: #c93c37;
		--color-toast-danger-icon-border: #e5534b;
		--color-toast-loading-text: #adbac7;
		--color-toast-loading-border: #636e7b;
		--color-toast-loading-icon: #cdd9e5;
		--color-toast-loading-icon-bg: #636e7b;
		--color-toast-loading-icon-border: #768390;
		--color-timeline-text: #909dab;
		--color-timeline-badge-bg: #22272e;
		--color-timeline-badge-success-border: #46954a;
		--color-timeline-target-badge-border: #316dca;
		--color-timeline-target-badge-shadow: #1b4b91;
		--color-select-menu-border-secondary: #444c56;
		--color-select-menu-shadow: 0 0 18px rgba(28, 33, 40, 0.4);
		--color-select-menu-backdrop-bg: rgba(28, 33, 40, 0.5);
		--color-select-menu-backdrop-border: #545d68;
		--color-select-menu-tap-highlight: rgba(68, 76, 86, 0.5);
		--color-select-menu-tap-focus-bg: #143d79;
		--color-box-blue-border: #1b4b91;
		--color-box-row-yellow-bg: rgba(235, 196, 64, 0.1);
		--color-box-row-blue-bg: rgba(108, 182, 255, 0.1);
		--color-box-header-blue-bg: #22272e;
		--color-box-header-blue-border: #444c56;
		--color-box-border-info: rgba(65, 132, 228, 0.4);
		--color-box-bg-info: rgba(65, 132, 228, 0.1);
		--color-box-border-warning: rgba(174, 124, 20, 0.4);
		--color-box-bg-warning: rgba(174, 124, 20, 0.1);
		--color-branch-name-text: #adbac7;
		--color-branch-name-icon: #909dab;
		--color-branch-name-bg: rgba(83, 155, 245, 0.1);
		--color-branch-name-link-text: #539bf5;
		--color-branch-name-link-icon: #539bf5;
		--color-branch-name-link-bg: rgba(83, 155, 245, 0.1);
		--color-markdown-code-bg: rgba(205, 217, 229, 0.15);
		--color-markdown-frame-border: #4f5964;
		--color-markdown-blockquote-border: #4f5964;
		--color-markdown-table-border: #4f5964;
		--color-markdown-table-tr-border: #3b424b;
		--color-menu-heading-text: #768390;
		--color-menu-border-active: #f78166;
		--color-menu-bg-active: #2d333b;
		--color-sidenav-selected-bg: #373e47;
		--color-sidenav-border-active: #f78166;
		--color-header-text: rgba(205, 217, 229, 0.7);
		--color-header-bg: #2d333b;
		--color-header-logo: #cdd9e5;
		--color-filter-item-bar-bg: #292e35;
		--color-hidden-text-expander-bg: #373e47;
		--color-hidden-text-expander-bg-hover: #444c56;
		--color-drag-and-drop-border: #393f48;
		--color-upload-enabled-border: #4f5964;
		--color-upload-enabled-border-focused: #4f84d4;
		--color-previewable-comment-form-border: #393f48;
		--color-underlinenav-border: rgba(68, 76, 86, 0);
		--color-underlinenav-border-hover: #444c56;
		--color-underlinenav-border-active: #f78166;
		--color-underlinenav-text: #768390;
		--color-underlinenav-text-hover: #adbac7;
		--color-underlinenav-text-active: #adbac7;
		--color-underlinenav-icon: #636e7b;
		--color-underlinenav-icon-hover: #adbac7;
		--color-underlinenav-icon-active: #adbac7;
		--color-underlinenav-counter-text: #768390;
		--color-underlinenav-counter-bg: rgba(118, 131, 144, 0.2);
		--color-verified-badge-text: #57ab5a;
		--color-verified-badge-bg: rgba(87, 171, 90, 0.1);
		--color-verified-badge-border: rgba(87, 171, 90, 0.4);
		--color-social-count-bg: #373e47;
		--color-tooltip-text: #cdd9e5;
		--color-tooltip-bg: #636e7b;
		--color-header-search-bg: #22272e;
		--color-header-search-border: #373e47;
		--color-search-keyword-hl: rgba(174, 124, 20, 0.4);
		--color-diffstat-neutral-bg: #444c56;
		--color-diffstat-neutral-border: rgba(205, 217, 229, 0.1);
		--color-diffstat-deletion-bg: #c93c37;
		--color-diffstat-deletion-border: #e5534b;
		--color-diffstat-addition-bg: #347d39;
		--color-diffstat-addition-border: #46954a;
		--color-mktg-success: #3d8942;
		--color-mktg-info: #3877d5;
		--color-mktg-bg-shade-gradient-top: rgba(28, 33, 40, 0.065);
		--color-mktg-bg-shade-gradient-bottom: rgba(28, 33, 40, 0);
		--color-mktg-btn-bg: #316dca;
		--color-mktg-btn-border: #316dca;
		--color-mktg-btn-text: #cdd9e5;
		--color-mktg-btn-icon: #cdd9e5;
		--color-mktg-btn-focus-shadow: 0 0 0 3px rgba(49, 109, 202, 0.3);
		--color-mktg-btn-hover-bg: #4184e4;
		--color-mktg-btn-hover-border: #4184e4;
		--color-mktg-btn-disabled-bg: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-disabled-text: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-disabled-icon: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-primary-bg: #347d39;
		--color-mktg-btn-primary-border: #347d39;
		--color-mktg-btn-primary-text: #cdd9e5;
		--color-mktg-btn-primary-icon: #cdd9e5;
		--color-mktg-btn-primary-focus-shadow: 0 0 0 3px rgba(52, 125, 57, 0.3);
		--color-mktg-btn-primary-hover-bg: #46954a;
		--color-mktg-btn-primary-hover-border: #46954a;
		--color-mktg-btn-primary-disabled-bg: rgba(70, 149, 74, 0.5);
		--color-mktg-btn-primary-disabled-border: rgba(0, 0, 0, 0);
		--color-mktg-btn-primary-disabled-text: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-primary-disabled-icon: rgba(205, 217, 229, 0.5);
		--color-mktg-btn-outline-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-border: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-outline-text: #4184e4;
		--color-mktg-btn-outline-icon: #4184e4;
		--color-mktg-btn-outline-focus-shadow: 0 0 0 3px rgba(65, 132, 228, 0.3);
		--color-mktg-btn-outline-hover-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-hover-border: #4184e4;
		--color-mktg-btn-outline-hover-text: #539bf5;
		--color-mktg-btn-outline-hover-icon: #539bf5;
		--color-mktg-btn-outline-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-outline-disabled-border: rgba(65, 132, 228, 0.2);
		--color-mktg-btn-outline-disabled-text: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-outline-disabled-icon: rgba(65, 132, 228, 0.5);
		--color-mktg-btn-dark-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-border: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-text: #adbac7;
		--color-mktg-btn-dark-icon: #adbac7;
		--color-mktg-btn-dark-focus-shadow: 0 0 0 3px rgba(173, 186, 199, 0.3);
		--color-mktg-btn-dark-hover-bg: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-hover-border: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-hover-text: #22272e;
		--color-mktg-btn-dark-hover-icon: #22272e;
		--color-mktg-btn-dark-disabled-bg: rgba(0, 0, 0, 0);
		--color-mktg-btn-dark-disabled-border: rgba(173, 186, 199, 0.2);
		--color-mktg-btn-dark-disabled-text: rgba(173, 186, 199, 0.5);
		--color-mktg-btn-dark-disabled-icon: rgba(173, 186, 199, 0.5);
		--color-files-explorer-icon: #636e7b;
		--color-hl-author-bg: #0f2d5c;
		--color-hl-author-border: #1b4b91;
		--color-logo-subdued: #444c56;
		--color-discussion-border: #494c49;
		--color-discussion-bg-success: rgba(70, 149, 74, 0.1);
		--color-actions-workflow-table-sticky-bg: rgba(34, 39, 46, 0.95);
		--color-repo-language-color-border: rgba(205, 217, 229, 0.2);
		--color-code-selection-bg: rgba(108, 182, 255, 0.3);
		--color-highlight-text: #ffd467;
		--color-highlight-bg: rgba(204, 143, 44, 0.38);
		--color-blob-line-highlight-bg: rgba(198, 144, 38, 0.15);
		--color-blob-line-highlight-border: #daaa3f;
		--color-diff-addition-text: #6bc46d;
		--color-diff-addition-bg: rgba(70, 149, 74, 0.2);
		--color-diff-addition-border: #2b6a30;
		--color-diff-deletion-text: #e5534b;
		--color-diff-deletion-bg: rgba(201, 60, 55, 0.2);
		--color-diff-deletion-border: #ad2e2c;
		--color-diff-change-text: #daaa3f;
		--color-diff-change-bg: #452700;
		--color-diff-change-border: #966600;
		--color-diff-blob-num-text: rgba(205, 217, 229, 0.3);
		--color-diff-blob-num-hover-text: rgba(205, 217, 229, 0.6);
		--color-diff-blob-addition-num-text: #57ab5a;
		--color-diff-blob-addition-num-hover-text: #8ddb8c;
		--color-diff-blob-addition-num-bg: rgba(70, 149, 74, 0.1);
		--color-diff-blob-addition-line-bg: rgba(70, 149, 74, 0.2);
		--color-diff-blob-addition-word-bg: rgba(70, 149, 74, 0.55);
		--color-diff-blob-deletion-num-text: #e5534b;
		--color-diff-blob-deletion-num-hover-text: #ff938a;
		--color-diff-blob-deletion-num-bg: rgba(201, 60, 55, 0.1);
		--color-diff-blob-deletion-line-bg: rgba(201, 60, 55, 0.2);
		--color-diff-blob-deletion-word-bg: rgba(201, 60, 55, 0.5);
		--color-diff-blob-hunk-text: #768390;
		--color-diff-blob-hunk-num-bg: rgba(83, 155, 245, 0.15);
		--color-diff-blob-hunk-line-bg: rgba(83, 155, 245, 0.1);
		--color-diff-blob-empty-block-bg: #2d333b;
		--color-diff-blob-selected-line-highlight-bg: rgba(174, 124, 20, 0.1);
		--color-diff-blob-selected-line-highlight-border: #ae7c14;
		--color-diff-blob-selected-line-highlight-mix-blend-mode: normal;
		--color-diff-blob-expander-icon: #768390;
		--color-diff-blob-expander-hover-icon: #cdd9e5;
		--color-diff-blob-expander-hover-bg: #316dca;
		--color-diff-blob-comment-button-icon: #cdd9e5;
		--color-diff-blob-comment-button-bg: #316dca;
		--color-diff-blob-comment-button-gradient-bg: #437bd1;
		--color-global-nav-logo: #cdd9e5;
		--color-global-nav-bg: #2d333b;
		--color-global-nav-text: #adbac7;
		--color-global-nav-icon: #adbac7;
		--color-global-nav-input-bg: #22272e;
		--color-global-nav-input-border: #373e47;
		--color-global-nav-input-icon: #373e47;
		--color-global-nav-input-placeholder: #545d68;
		--color-calendar-graph-day-bg: #2d333b;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
		--color-calendar-graph-day-L1-bg: #003820;
		--color-calendar-graph-day-L2-bg: #00602d;
		--color-calendar-graph-day-L3-bg: #10983d;
		--color-calendar-graph-day-L4-bg: #27d545;
		--color-calendar-graph-day-L4-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L3-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L2-border: rgba(255, 255, 255, 0.05);
		--color-calendar-graph-day-L1-border: rgba(255, 255, 255, 0.05);
		--color-footer-invertocat-octicon: #444c56;
		--color-footer-invertocat-octicon-hover: #636e7b;
		--color-pr-state-draft-text: #768390;
		--color-pr-state-draft-bg: rgba(118, 131, 144, 0.1);
		--color-pr-state-draft-border: rgba(118, 131, 144, 0.4);
		--color-pr-state-open-text: #57ab5a;
		--color-pr-state-open-bg: rgba(87, 171, 90, 0.1);
		--color-pr-state-open-border: rgba(87, 171, 90, 0.4);
		--color-pr-state-merged-text: #986ee2;
		--color-pr-state-merged-bg: rgba(176, 131, 240, 0.1);
		--color-pr-state-merged-border: rgba(176, 131, 240, 0.4);
		--color-pr-state-closed-text: #e5534b;
		--color-pr-state-closed-bg: rgba(201, 60, 55, 0.1);
		--color-pr-state-closed-border: rgba(201, 60, 55, 0.4);
		--color-topic-tag-text: #539bf5;
		--color-topic-tag-bg: rgba(65, 132, 228, 0.1);
		--color-topic-tag-hover-bg: rgba(65, 132, 228, 0.2);
		--color-topic-tag-active-bg: rgba(65, 132, 228, 0.15);
		--color-merge-box-success-icon-bg: rgba(70, 149, 74, 0.1);
		--color-merge-box-success-icon-text: #57ab5a;
		--color-merge-box-success-icon-border: rgba(70, 149, 74, 0.4);
		--color-merge-box-success-indicator-bg: #347d39;
		--color-merge-box-success-indicator-border: #46954a;
		--color-merge-box-merged-icon-bg: rgba(176, 131, 240, 0.1);
		--color-merge-box-merged-icon-text: #986ee2;
		--color-merge-box-merged-icon-border: rgba(176, 131, 240, 0.4);
		--color-merge-box-merged-box-border: rgba(176, 131, 240, 0.4);
		--color-merge-box-neutral-icon-bg: rgba(173, 186, 199, 0.1);
		--color-merge-box-neutral-icon-text: #768390;
		--color-merge-box-neutral-icon-border: rgba(173, 186, 199, 0.4);
		--color-merge-box-neutral-indicator-bg: #545d68;
		--color-merge-box-neutral-indicator-border: #636e7b;
		--color-merge-box-warning-icon-bg: rgba(174, 124, 20, 0.1);
		--color-merge-box-warning-icon-text: #daaa3f;
		--color-merge-box-warning-icon-border: rgba(174, 124, 20, 0.4);
		--color-merge-box-warning-box-border: rgba(174, 124, 20, 0.4);
		--color-merge-box-warning-merge-highlight: rgba(174, 124, 20, 0.1);
		--color-merge-box-error-icon-bg: rgba(229, 83, 75, 0.1);
		--color-merge-box-error-icon-text: #e5534b;
		--color-merge-box-error-icon-border: rgba(229, 83, 75, 0.4);
		--color-merge-box-error-indicator-bg: #c93c37;
		--color-merge-box-error-indicator-border: #e5534b;
		--color-project-card-bg: #2d333b;
		--color-project-header-bg: #22272e;
		--color-project-sidebar-bg: #2d333b;
		--color-project-gradient-in: #2d333b;
		--color-project-gradient-out: rgba(45, 51, 59, 0);
		--color-checks-bg: #1e2228;
		--color-checks-run-border-width: 1px;
		--color-checks-container-border-width: 1px;
		--color-checks-text-primary: #adbac7;
		--color-checks-text-secondary: #768390;
		--color-checks-text-link: #539bf5;
		--color-checks-btn-icon: #636e7b;
		--color-checks-btn-hover-icon: #adbac7;
		--color-checks-btn-hover-bg: #444c56;
		--color-checks-input-text: #768390;
		--color-checks-input-placeholder-text: #545d68;
		--color-checks-input-focus-text: #adbac7;
		--color-checks-input-bg: #22272e;
		--color-checks-input-shadow: 0 0 0 1px #373e47;
		--color-checks-dropdown-text: #adbac7;
		--color-checks-dropdown-bg: #373e47;
		--color-checks-dropdown-border: #444c56;
		--color-checks-dropdown-hover-text: #cdd9e5;
		--color-checks-dropdown-hover-bg: #316dca;
		--color-checks-dropdown-btn-hover-text: #cdd9e5;
		--color-checks-dropdown-btn-hover-bg: #2d333b;
		--color-checks-scrollbar-thumb-bg: #444c56;
		--color-checks-header-label-text: #768390;
		--color-checks-header-label-open-text: #adbac7;
		--color-checks-header-border: #373e47;
		--color-checks-header-icon: #636e7b;
		--color-checks-line-text: #768390;
		--color-checks-line-num-text: #768390;
		--color-checks-line-timestamp-text: #768390;
		--color-checks-line-hover-bg: #2d333b;
		--color-checks-line-selected-bg: rgba(65, 132, 228, 0.1);
		--color-checks-line-selected-num-text: #539bf5;
		--color-checks-line-dt-fm-text: #22272e;
		--color-checks-line-dt-fm-bg: #c69026;
		--color-checks-gate-bg: rgba(128, 84, 0, 0.15);
		--color-checks-gate-text: #768390;
		--color-checks-gate-waiting-text: #daaa3f;
		--color-checks-step-header-open-bg: #2d333b;
		--color-checks-step-error-text: #e5534b;
		--color-checks-step-warning-text: #daaa3f;
		--color-checks-logline-text: #636e7b;
		--color-checks-logline-num-text: #768390;
		--color-checks-logline-debug-text: #b083f0;
		--color-checks-logline-error-text: #768390;
		--color-checks-logline-error-num-text: #768390;
		--color-checks-logline-error-bg: rgba(229, 83, 75, 0.1);
		--color-checks-logline-warning-text: #768390;
		--color-checks-logline-warning-num-text: #daaa3f;
		--color-checks-logline-warning-bg: rgba(174, 124, 20, 0.1);
		--color-checks-logline-command-text: #539bf5;
		--color-checks-logline-section-text: #6bc46d;
		--color-intro-shelf-gradient-left: rgba(65, 132, 228, 0.1);
		--color-intro-shelf-gradient-right: rgba(70, 149, 74, 0.1);
		--color-intro-shelf-gradient-in: #22272e;
		--color-intro-shelf-gradient-out: rgba(34, 39, 46, 0);
		--color-marketing-icon-primary: #6cb6ff;
		--color-marketing-icon-secondary: #316dca;
		--color-prettylights-syntax-comment: #768390;
		--color-prettylights-syntax-constant: #6cb6ff;
		--color-prettylights-syntax-entity: #dcbdfb;
		--color-prettylights-syntax-storage-modifier-import: #adbac7;
		--color-prettylights-syntax-entity-tag: #8ddb8c;
		--color-prettylights-syntax-keyword: #f47067;
		--color-prettylights-syntax-string: #96d0ff;
		--color-prettylights-syntax-variable: #f69d50;
		--color-prettylights-syntax-brackethighlighter-unmatched: #e5534b;
		--color-prettylights-syntax-invalid-illegal-text: #cdd9e5;
		--color-prettylights-syntax-invalid-illegal-bg: #922323;
		--color-prettylights-syntax-carriage-return-text: #cdd9e5;
		--color-prettylights-syntax-carriage-return-bg: #ad2e2c;
		--color-prettylights-syntax-string-regexp: #8ddb8c;
		--color-prettylights-syntax-markup-list: #eac55f;
		--color-prettylights-syntax-markup-heading: #316dca;
		--color-prettylights-syntax-markup-italic: #adbac7;
		--color-prettylights-syntax-markup-bold: #adbac7;
		--color-prettylights-syntax-markup-deleted-text: #ffd8d3;
		--color-prettylights-syntax-markup-deleted-bg: #78191b;
		--color-prettylights-syntax-markup-inserted-text: #b4f1b4;
		--color-prettylights-syntax-markup-inserted-bg: #1b4721;
		--color-prettylights-syntax-markup-changed-text: #ffddb0;
		--color-prettylights-syntax-markup-changed-bg: #682d0f;
		--color-prettylights-syntax-markup-ignored-text: #adbac7;
		--color-prettylights-syntax-markup-ignored-bg: #255ab2;
		--color-prettylights-syntax-meta-diff-range: #dcbdfb;
		--color-prettylights-syntax-brackethighlighter-angle: #768390;
		--color-prettylights-syntax-sublimelinter-gutter-mark: #545d68;
		--color-prettylights-syntax-constant-other-reference-link: #96d0ff;
		--color-codemirror-text: #adbac7;
		--color-codemirror-bg: #22272e;
		--color-codemirror-gutters-bg: #22272e;
		--color-codemirror-guttermarker-text: #22272e;
		--color-codemirror-guttermarker-subtle-text: #636e7b;
		--color-codemirror-linenumber-text: #768390;
		--color-codemirror-cursor: #cdd9e5;
		--color-codemirror-selection-bg: rgba(108, 182, 255, 0.3);
		--color-codemirror-activeline-bg: #2d333b;
		--color-codemirror-matchingbracket-text: #adbac7;
		--color-codemirror-lines-bg: #22272e;
		--color-codemirror-syntax-comment: #768390;
		--color-codemirror-syntax-constant: #6cb6ff;
		--color-codemirror-syntax-entity: #dcbdfb;
		--color-codemirror-syntax-keyword: #f47067;
		--color-codemirror-syntax-storage: #f47067;
		--color-codemirror-syntax-string: #96d0ff;
		--color-codemirror-syntax-support: #6cb6ff;
		--color-codemirror-syntax-variable: #f69d50;
		--color-ansi-black: #22272e;
		--color-ansi-black-bright: #2d333b;
		--color-ansi-white: #909dab;
		--color-ansi-white-bright: #909dab;
		--color-ansi-gray: #636e7b;
		--color-ansi-red: #f47067;
		--color-ansi-red-bright: #ff938a;
		--color-ansi-green: #57ab5a;
		--color-ansi-green-bright: #6bc46d;
		--color-ansi-yellow: #c69026;
		--color-ansi-yellow-bright: #daaa3f;
		--color-ansi-blue: #539bf5;
		--color-ansi-blue-bright: #6cb6ff;
		--color-ansi-magenta: #b083f0;
		--color-ansi-magenta-bright: #dcbdfb;
		--color-ansi-cyan: #76e3ea;
		--color-ansi-cyan-bright: #b3f0ff;
	}
}
[data-color-mode] {
	color: var(--color-text-primary);
	background-color: var(--color-bg-canvas);
}
:root,
[data-color-mode="light"][data-light-theme*="light"],
[data-color-mode="dark"][data-dark-theme*="light"] {
	color-scheme: light;
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme*="light"] {
		color-scheme: light;
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme*="light"] {
		color-scheme: light;
	}
}
[data-color-mode="light"][data-light-theme*="dark"],
[data-color-mode="dark"][data-dark-theme*="dark"] {
	color-scheme: dark;
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme*="dark"] {
		color-scheme: dark;
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme*="dark"] {
		color-scheme: dark;
	}
}
* {
	box-sizing: border-box;
}
input,
select,
textarea,
button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}
.body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
	font-size: 14px;
	line-height: 1.5;
	color: var(--color-text-primary);
	background-color: var(--color-bg-canvas);
}
a {
	color: var(--color-text-link);
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
b,
strong {
	font-weight: 600;
}
hr,
.rule {
	height: 0;
	margin: 15px 0;
	overflow: hidden;
	background: transparent;
	border: 0;
	border-bottom: 1px solid var(--color-border-secondary);
}
hr::before,
.rule::before {
	display: table;
	content: "";
}
hr::after,
.rule::after {
	display: table;
	clear: both;
	content: "";
}
table {
	border-spacing: 0;
	border-collapse: collapse;
}
td,
th {
	padding: 0;
}
button {
	cursor: pointer;
	border-radius: 0;
}
[hidden][hidden] {
	display: none !important;
}
details summary {
	cursor: pointer;
}
details:not([open]) > *:not(summary) {
	display: none !important;
}
kbd {
	display: inline-block;
	padding: 3px 5px;
	font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	line-height: 10px;
	color: var(--color-auto-gray-7);
	vertical-align: middle;
	background-color: var(--color-bg-secondary);
	border: solid 1px var(--color-border-tertiary);
	border-bottom-color: var(--color-border-tertiary);
	border-radius: 6px;
	box-shadow: inset 0 -1px 0 var(--color-border-tertiary);
}
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: 0;
}
h1 {
	font-size: 32px;
	font-weight: 600;
}
h2 {
	font-size: 24px;
	font-weight: 600;
}
h3 {
	font-size: 20px;
	font-weight: 600;
}
h4 {
	font-size: 16px;
	font-weight: 600;
}
h5 {
	font-size: 14px;
	font-weight: 600;
}
h6 {
	font-size: 12px;
	font-weight: 600;
}
p {
	margin-top: 0;
	margin-bottom: 10px;
}
small {
	font-size: 90%;
}
blockquote {
	margin: 0;
}
ul,
ol {
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
}
ol ol,
ul ol {
	list-style-type: lower-roman;
}
ul ul ol,
ul ol ol,
ol ul ol,
ol ol ol {
	list-style-type: lower-alpha;
}
dd {
	margin-left: 0;
}
tt,
code {
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	font-size: 12px;
}
pre {
	margin-top: 0;
	margin-bottom: 0;
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	font-size: 12px;
}
.octicon {
	vertical-align: text-bottom;
}
.Box {
	background-color: var(--color-bg-primary);
	border-color: var(--color-border-primary);
	border-style: solid;
	border-width: 1px;
	border-radius: 6px;
}
.Box--condensed {
	line-height: 1.25;
}
.Box--condensed .Box-header {
	padding: 8px 16px;
}
.Box--condensed .Box-body {
	padding: 8px 16px;
}
.Box--condensed .Box-footer {
	padding: 8px 16px;
}
.Box--condensed .Box-btn-octicon.btn-octicon {
	padding: 8px 16px;
	margin: -8px -16px;
	line-height: 1.25;
}
.Box--condensed .Box-row {
	padding: 8px 16px;
}
.Box--spacious .Box-header {
	padding: 24px;
	line-height: 1.25;
}
.Box--spacious .Box-title {
	font-size: 20px;
}
.Box--spacious .Box-body {
	padding: 24px;
}
.Box--spacious .Box-footer {
	padding: 24px;
}
.Box--spacious .Box-btn-octicon.btn-octicon {
	padding: 24px;
	margin: -24px -24px;
}
.Box--spacious .Box-row {
	padding: 24px;
}
.Box-header {
	padding: 16px;
	margin: -1px -1px 0;
	background-color: var(--color-bg-tertiary);
	border-color: var(--color-border-primary);
	border-style: solid;
	border-width: 1px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.Box-title {
	font-size: 14px;
	font-weight: 600;
}
.Box-body {
	padding: 16px;
	border-bottom: 1px solid var(--color-border-primary);
}
.Box-body:last-of-type {
	margin-bottom: -1px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.Box-row {
	padding: 16px;
	margin-top: -1px;
	list-style-type: none;
	border-top-color: var(--color-border-secondary);
	border-top-style: solid;
	border-top-width: 1px;
}
.Box-row:first-of-type {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.Box-row:last-of-type {
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.Box-row.Box-row--unread,
.Box-row.unread {
	box-shadow: inset 2px 0 0 var(--color-border-info);
}
.Box-row.navigation-focus .Box-row--drag-button {
	color: var(--color-text-link);
	cursor: grab;
	opacity: 100;
}
.Box-row.navigation-focus.is-dragging .Box-row--drag-button {
	cursor: grabbing;
}
.Box-row.navigation-focus.sortable-chosen {
	background-color: var(--color-bg-secondary);
}
.Box-row.navigation-focus.sortable-ghost {
	background-color: var(--color-bg-tertiary);
}
.Box-row.navigation-focus.sortable-ghost .Box-row--drag-hide {
	opacity: 0;
}
.Box-row--focus-gray.navigation-focus {
	background-color: var(--color-bg-tertiary);
}
.Box-row--focus-blue.navigation-focus {
	background-color: var(--color-box-row-blue-bg);
}
.Box-row--hover-gray:hover {
	background-color: var(--color-bg-tertiary);
}
.Box-row--hover-blue:hover {
	background-color: var(--color-box-row-blue-bg);
}
@media (min-width: 768px) {
	.Box-row-link {
		color: var(--color-text-primary);
		text-decoration: none;
	}
	.Box-row-link:hover {
		color: var(--color-text-link);
		text-decoration: none;
	}
}
.Box-row--drag-button {
	opacity: 0;
}
.Box-footer {
	padding: 16px;
	margin-top: -1px;
	border-top-color: var(--color-border-primary);
	border-top-style: solid;
	border-top-width: 1px;
	border-radius: 0 0 6px 6px;
}
.Box--scrollable {
	max-height: 324px;
	overflow: scroll;
}
.Box--blue {
	border-color: var(--color-box-blue-border);
}
.Box--blue .Box-header {
	background-color: var(--color-bg-info);
	border-color: var(--color-box-blue-border);
}
.Box--blue .Box-body {
	border-color: var(--color-box-blue-border);
}
.Box--blue .Box-row {
	border-color: var(--color-box-blue-border);
}
.Box--blue .Box-footer {
	border-color: var(--color-box-blue-border);
}
.Box--danger {
	border-color: var(--color-border-danger);
}
.Box--danger .Box-row:first-of-type {
	border-color: var(--color-border-danger);
}
.Box--danger .Box-body:last-of-type {
	border-color: var(--color-border-danger);
}
.Box-header--blue {
	background-color: var(--color-box-header-blue-bg);
	border-color: var(--color-box-header-blue-border);
}
.Box-row--yellow {
	background-color: var(--color-box-row-yellow-bg);
}
.Box-row--blue {
	background-color: var(--color-box-row-blue-bg);
}
.Box-row--gray {
	background-color: var(--color-bg-tertiary);
}
.Box-btn-octicon.btn-octicon {
	padding: 16px 16px;
	margin: -16px -16px;
	line-height: 1.5;
}
.breadcrumb-item {
	display: inline-block;
	margin-left: -0.35em;
	white-space: nowrap;
	list-style: none;
}
.breadcrumb-item::after {
	padding-right: 0.5em;
	padding-left: 0.5em;
	color: var(--color-text-disabled);
	content: "/";
}
.breadcrumb-item:first-child {
	margin-left: 0;
}
.breadcrumb-item-selected,
.breadcrumb-item[aria-current]:not([aria-current="false"]) {
	color: var(--color-text-primary);
}
.breadcrumb-item-selected::after,
.breadcrumb-item[aria-current]:not([aria-current="false"])::after {
	content: none;
}
.btn {
	position: relative;
	display: inline-block;
	padding: 5px 16px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid;
	border-radius: 6px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.btn:hover {
	text-decoration: none;
}
.btn:disabled,
.btn.disabled,
.btn[aria-disabled="true"] {
	cursor: default;
}
.btn:disabled .octicon,
.btn.disabled .octicon,
.btn[aria-disabled="true"] .octicon {
	color: var(--color-icon-tertiary);
}
.btn i {
	font-style: normal;
	font-weight: 500;
	opacity: 0.75;
}
.btn .octicon {
	margin-right: 4px;
	color: var(--color-text-tertiary);
	vertical-align: text-bottom;
}
.btn .octicon:only-child {
	margin-right: 0;
}
.btn .Counter {
	margin-left: 2px;
	color: inherit;
	text-shadow: none;
	vertical-align: top;
	background-color: var(--color-btn-counter-bg);
}
.btn .dropdown-caret {
	margin-left: 4px;
	opacity: 0.8;
}
.btn {
	color: var(--color-btn-text);
	background-color: var(--color-btn-bg);
	border-color: var(--color-btn-border);
	box-shadow: var(--color-btn-shadow), var(--color-btn-inset-shadow);
	transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
	transition-property: color, background-color, border-color;
}
.btn:hover,
.btn.hover,
[open] > .btn {
	background-color: var(--color-btn-hover-bg);
	border-color: var(--color-btn-hover-border);
	transition-duration: 0.1s;
}
.btn:active,
.btn.selected,
.btn[aria-selected="true"] {
	background-color: var(--color-btn-selected-bg);
	box-shadow: var(--color-shadow-inset);
	transition: none;
}
.btn:disabled,
.btn.disabled,
.btn[aria-disabled="true"] {
	color: var(--color-text-disabled);
	background-color: var(--color-btn-bg);
	border-color: var(--color-btn-border);
}
.btn:focus,
.btn.focus {
	border-color: var(--color-btn-focus-border);
	outline: none;
	box-shadow: var(--color-btn-focus-shadow);
}
.btn-primary {
	color: var(--color-btn-primary-text);
	background-color: var(--color-btn-primary-bg);
	border-color: var(--color-btn-primary-border);
	box-shadow: var(--color-btn-primary-shadow),
		var(--color-btn-primary-inset-shadow);
}
.btn-primary:hover,
.btn-primary.hover,
[open] > .btn-primary {
	background-color: var(--color-btn-primary-hover-bg);
	border-color: var(--color-btn-primary-hover-border);
}
.btn-primary:active,
.btn-primary.selected,
.btn-primary[aria-selected="true"] {
	background-color: var(--color-btn-primary-selected-bg);
	box-shadow: var(--color-btn-primary-selected-shadow);
}
.btn-primary:disabled,
.btn-primary.disabled,
.btn-primary[aria-disabled="true"] {
	color: var(--color-btn-primary-disabled-text);
	background-color: var(--color-btn-primary-disabled-bg);
	border-color: var(--color-btn-primary-disabled-border);
}
.btn-primary:focus,
.btn-primary.focus {
	background-color: var(--color-btn-primary-focus-bg);
	border-color: var(--color-btn-primary-focus-border);
	box-shadow: var(--color-btn-primary-focus-shadow);
}
.btn-primary .Counter {
	color: inherit;
	background-color: var(--color-btn-primary-counter-bg);
}
.btn-primary .octicon {
	color: var(--color-btn-primary-icon);
}
.btn-outline {
	color: var(--color-btn-outline-text);
}
.btn-outline:hover,
[open] > .btn-outline {
	color: var(--color-btn-outline-hover-text);
	background-color: var(--color-btn-outline-hover-bg);
	border-color: var(--color-btn-outline-hover-border);
	box-shadow: var(--color-btn-outline-hover-shadow),
		var(--color-btn-outline-hover-inset-shadow);
}
.btn-outline:hover .Counter,
[open] > .btn-outline .Counter {
	background-color: var(--color-btn-outline-hover-counter-bg);
}
.btn-outline:hover .octicon,
[open] > .btn-outline .octicon {
	color: inherit;
}
.btn-outline:active,
.btn-outline.selected,
.btn-outline[aria-selected="true"] {
	color: var(--color-btn-outline-selected-text);
	background-color: var(--color-btn-outline-selected-bg);
	border-color: var(--color-btn-outline-selected-border);
	box-shadow: var(--color-btn-outline-selected-shadow);
}
.btn-outline:disabled,
.btn-outline.disabled,
.btn-outline[aria-disabled="true"] {
	color: var(--color-btn-outline-disabled-text);
	background-color: var(--color-btn-outline-disabled-bg);
	border-color: var(--color-btn-border);
	box-shadow: none;
}
.btn-outline:disabled .Counter,
.btn-outline.disabled .Counter,
.btn-outline[aria-disabled="true"] .Counter {
	background-color: var(--color-btn-outline-disabled-counter-bg);
}
.btn-outline:focus {
	border-color: var(--color-btn-outline-focus-border);
	box-shadow: var(--color-btn-outline-focus-shadow);
}
.btn-outline .Counter {
	color: inherit;
	background-color: var(--color-btn-outline-counter-bg);
}
.btn-danger {
	color: var(--color-btn-danger-text);
}
.btn-danger .octicon {
	color: var(--color-btn-danger-icon);
}
.btn-danger:hover,
[open] > .btn-danger {
	color: var(--color-btn-danger-hover-text);
	background-color: var(--color-btn-danger-hover-bg);
	border-color: var(--color-btn-danger-hover-border);
	box-shadow: var(--color-btn-danger-hover-shadow),
		var(--color-btn-danger-hover-inset-shadow);
}
.btn-danger:hover .Counter,
[open] > .btn-danger .Counter {
	background-color: var(--color-btn-danger-hover-counter-bg);
}
.btn-danger:hover .octicon,
[open] > .btn-danger .octicon {
	color: var(--color-btn-danger-hover-icon);
}
.btn-danger:active,
.btn-danger.selected,
.btn-danger[aria-selected="true"] {
	color: var(--color-btn-danger-selected-text);
	background-color: var(--color-btn-danger-selected-bg);
	border-color: var(--color-btn-danger-selected-border);
	box-shadow: var(--color-btn-danger-selected-shadow);
}
.btn-danger:disabled,
.btn-danger.disabled,
.btn-danger[aria-disabled="true"] {
	color: var(--color-btn-danger-disabled-text);
	background-color: var(--color-btn-danger-disabled-bg);
	border-color: var(--color-btn-border);
	box-shadow: none;
}
.btn-danger:disabled .Counter,
.btn-danger.disabled .Counter,
.btn-danger[aria-disabled="true"] .Counter {
	background-color: var(--color-btn-danger-disabled-counter-bg);
}
.btn-danger:focus {
	border-color: var(--color-btn-danger-focus-border);
	box-shadow: var(--color-btn-danger-focus-shadow);
}
.btn-danger .Counter {
	color: inherit;
	background-color: var(--color-btn-danger-counter-bg);
}
.btn-sm {
	padding: 3px 12px;
	font-size: 12px;
	line-height: 20px;
}
.btn-sm .octicon {
	vertical-align: text-top;
}
.btn-large {
	padding: 0.75em 1.5em;
	font-size: inherit;
	line-height: 1.5;
	border-radius: 0.5em;
}
.btn-block {
	display: block;
	width: 100%;
	text-align: center;
}
.BtnGroup {
	display: inline-block;
	vertical-align: middle;
}
.BtnGroup::before {
	display: table;
	content: "";
}
.BtnGroup::after {
	display: table;
	clear: both;
	content: "";
}
.BtnGroup + .BtnGroup,
.BtnGroup + .btn {
	margin-left: 4px;
}
.BtnGroup-item {
	position: relative;
	float: left;
	border-right-width: 0;
	border-radius: 0;
}
.BtnGroup-item:first-child {
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}
.BtnGroup-item:last-child {
	border-right-width: 1px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
.BtnGroup-item.selected,
.BtnGroup-item[aria-selected="true"],
.BtnGroup-item:focus,
.BtnGroup-item:active,
.BtnGroup-item:hover {
	border-right-width: 1px;
}
.BtnGroup-item.selected + .BtnGroup-item,
.BtnGroup-item.selected + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-item[aria-selected="true"] + .BtnGroup-item,
.BtnGroup-item[aria-selected="true"] + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-item:focus + .BtnGroup-item,
.BtnGroup-item:focus + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-item:active + .BtnGroup-item,
.BtnGroup-item:active + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-item:hover + .BtnGroup-item,
.BtnGroup-item:hover + .BtnGroup-parent .BtnGroup-item {
	border-left-width: 0;
}
.BtnGroup-parent {
	float: left;
}
.BtnGroup-parent:first-child .BtnGroup-item {
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}
.BtnGroup-parent:last-child .BtnGroup-item {
	border-right-width: 1px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
.BtnGroup-parent .BtnGroup-item {
	border-right-width: 0;
	border-radius: 0;
}
.BtnGroup-parent.selected .BtnGroup-item,
.BtnGroup-parent[aria-selected="true"] .BtnGroup-item,
.BtnGroup-parent:focus .BtnGroup-item,
.BtnGroup-parent:active .BtnGroup-item,
.BtnGroup-parent:hover .BtnGroup-item {
	border-right-width: 1px;
}
.BtnGroup-parent.selected + .BtnGroup-item,
.BtnGroup-parent.selected + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-parent[aria-selected="true"] + .BtnGroup-item,
.BtnGroup-parent[aria-selected="true"] + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-parent:focus + .BtnGroup-item,
.BtnGroup-parent:focus + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-parent:active + .BtnGroup-item,
.BtnGroup-parent:active + .BtnGroup-parent .BtnGroup-item,
.BtnGroup-parent:hover + .BtnGroup-item,
.BtnGroup-parent:hover + .BtnGroup-parent .BtnGroup-item {
	border-left-width: 0;
}
.BtnGroup-item:focus,
.BtnGroup-item:active,
.BtnGroup-parent:focus,
.BtnGroup-parent:active {
	z-index: 1;
}
.btn-link {
	display: inline-block;
	padding: 0;
	font-size: inherit;
	color: var(--color-text-link);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.btn-link:hover {
	text-decoration: underline;
}
.btn-link:disabled,
.btn-link:disabled:hover,
.btn-link[aria-disabled="true"],
.btn-link[aria-disabled="true"]:hover {
	color: var(--color-text-disabled);
	cursor: default;
}
.btn-invisible {
	color: var(--color-text-link);
	background-color: transparent;
	border: 0;
	border-radius: 0;
	box-shadow: none;
}
.btn-invisible:hover,
.btn-invisible:active,
.btn-invisible:focus,
.btn-invisible.selected,
.btn-invisible[aria-selected="true"],
.btn-invisible.zeroclipboard-is-hover,
.btn-invisible.zeroclipboard-is-active {
	color: var(--color-text-link);
	background: none;
	outline: none;
	box-shadow: none;
}
.btn-invisible:disabled,
.btn-invisible.disabled,
.btn-invisible[aria-disabled="true"] {
	background-color: transparent;
}
.btn-octicon {
	display: inline-block;
	padding: 5px;
	margin-left: 5px;
	line-height: 1;
	color: var(--color-text-secondary);
	vertical-align: middle;
	background: transparent;
	border: 0;
}
.btn-octicon:hover {
	color: var(--color-text-link);
}
.btn-octicon.disabled,
.btn-octicon[aria-disabled="true"] {
	color: var(--color-text-disabled);
	cursor: default;
}
.btn-octicon.disabled:hover,
.btn-octicon[aria-disabled="true"]:hover {
	color: var(--color-text-disabled);
}
.btn-octicon-danger:hover {
	color: var(--color-text-danger);
}
.close-button {
	padding: 0;
	color: var(--color-text-secondary);
	background: transparent;
	border: 0;
	outline: none;
}
.close-button:hover {
	color: var(--color-text-primary);
}
.close-button:active {
	color: var(--color-text-tertiary);
}
.hidden-text-expander {
	display: block;
}
.hidden-text-expander.inline {
	position: relative;
	top: -1px;
	display: inline-block;
	margin-left: 5px;
	line-height: 0;
}
.hidden-text-expander a,
.ellipsis-expander {
	display: inline-block;
	height: 12px;
	padding: 0 5px 5px;
	font-size: 12px;
	font-weight: 600;
	line-height: 6px;
	color: var(--color-auto-gray-7);
	text-decoration: none;
	vertical-align: middle;
	background: var(--color-hidden-text-expander-bg);
	border: 0;
	border-radius: 1px;
}
.hidden-text-expander a:hover,
.ellipsis-expander:hover {
	text-decoration: none;
	background-color: var(--color-hidden-text-expander-bg-hover);
}
.hidden-text-expander a:active,
.ellipsis-expander:active {
	color: var(--color-text-inverse);
	background-color: var(--color-bg-info-inverse);
}
.btn-with-count {
	float: left;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.btn-with-count:focus {
	z-index: 1;
}
.social-count {
	position: relative;
	float: left;
	padding: 3px 12px;
	font-size: 12px;
	font-weight: 600;
	line-height: 20px;
	color: var(--color-text-primary);
	vertical-align: middle;
	background-color: var(--color-social-count-bg);
	border: 1px solid var(--color-btn-border);
	border-left: 0;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	box-shadow: var(--color-shadow-small), var(--color-shadow-highlight);
}
.social-count:hover,
.social-count:active {
	text-decoration: none;
}
.social-count:hover {
	color: var(--color-text-link);
	cursor: pointer;
}
.social-count:focus {
	z-index: 1;
	outline: 0;
	box-shadow: var(--color-state-focus-shadow);
}
.TableObject {
	display: table;
}
.TableObject-item {
	display: table-cell;
	width: 1%;
	white-space: nowrap;
	vertical-align: middle;
}
.TableObject-item--primary {
	width: 99%;
}
fieldset {
	padding: 0;
	margin: 0;
	border: 0;
}
label {
	font-weight: 600;
}
.form-control,
.form-select {
	padding: 5px 12px;
	font-size: 14px;
	line-height: 20px;
	color: var(--color-text-primary);
	vertical-align: middle;
	background-color: var(--color-input-bg);
	background-repeat: no-repeat;
	background-position: right 8px center;
	border: 1px solid var(--color-input-border);
	border-radius: 6px;
	outline: none;
	box-shadow: var(--color-shadow-inset);
}
.form-control.focus,
.form-control:focus,
.form-select.focus,
.form-select:focus {
	border-color: var(--color-state-focus-border);
	outline: none;
	box-shadow: var(--color-state-focus-shadow);
}
.form-control[disabled],
.form-select[disabled] {
	color: var(--color-text-disabled);
	background-color: var(--color-input-disabled-bg);
	border-color: var(--color-input-disabled-border);
}
@supports (-webkit-touch-callout: none) {
	.form-control,
	.form-select {
		font-size: 16px;
	}
	@media (min-width: 768px) {
		.form-control,
		.form-select {
			font-size: 14px;
		}
	}
}
textarea.form-control {
	padding-top: 8px;
	padding-bottom: 8px;
	line-height: 1.5;
}
.input-contrast {
	background-color: var(--color-input-contrast-bg);
}
.input-contrast:focus {
	background-color: var(--color-input-bg);
}
:-ms-input-placeholder {
	color: var(--color-text-placeholder);
	opacity: 1;
}
::placeholder {
	color: var(--color-text-placeholder);
	opacity: 1;
}
.input-sm {
	padding-top: 3px;
	padding-bottom: 3px;
	font-size: 12px;
	line-height: 20px;
}
.input-lg {
	font-size: 16px;
}
.input-block {
	display: block;
	width: 100%;
}
.input-monospace {
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
.input-hide-webkit-autofill::-webkit-contacts-auto-fill-button {
	position: absolute;
	right: 0;
	display: none !important;
	pointer-events: none;
	visibility: hidden;
}
.form-checkbox {
	padding-left: 20px;
	margin: 15px 0;
	vertical-align: middle;
}
.form-checkbox label em.highlight {
	position: relative;
	left: -4px;
	padding: 2px 4px;
	font-style: normal;
	background: var(--color-auto-yellow-1);
	border-radius: 6px;
}
.form-checkbox input[type="checkbox"],
.form-checkbox input[type="radio"] {
	float: left;
	margin: 5px 0 0 -20px;
	vertical-align: middle;
}
.form-checkbox .note {
	display: block;
	margin: 0;
	font-size: 12px;
	font-weight: 400;
	color: var(--color-text-secondary);
}
.form-checkbox-details {
	display: none;
}
.form-checkbox-details-trigger:checked ~ * .form-checkbox-details,
.form-checkbox-details-trigger:checked ~ .form-checkbox-details {
	display: block;
}
.hfields {
	margin: 15px 0;
}
.hfields::before {
	display: table;
	content: "";
}
.hfields::after {
	display: table;
	clear: both;
	content: "";
}
.hfields .form-group {
	float: left;
	margin: 0 30px 0 0;
}
.hfields .form-group dt label,
.hfields .form-group .form-group-header label {
	display: inline-block;
	margin: 5px 0 0;
	color: var(--color-text-secondary);
}
.hfields .form-group dt img,
.hfields .form-group .form-group-header img {
	position: relative;
	top: -2px;
}
.hfields .btn {
	float: left;
	margin: 28px 25px 0 -20px;
}
.hfields .form-select {
	margin-top: 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	margin: 0;
	-webkit-appearance: none;
	appearance: none;
}
.form-actions::before {
	display: table;
	content: "";
}
.form-actions::after {
	display: table;
	clear: both;
	content: "";
}
.form-actions .btn {
	float: right;
}
.form-actions .btn + .btn {
	margin-right: 5px;
}
.form-warning {
	padding: 8px 10px;
	margin: 10px 0;
	font-size: 14px;
	color: var(--color-text-warning);
	background: var(--color-bg-warning);
	border: 1px solid var(--color-border-warning);
	border-radius: 6px;
}
.form-warning p {
	margin: 0;
	line-height: 1.5;
}
.form-warning a {
	font-weight: 600;
}
.form-select {
	display: inline-block;
	max-width: 100%;
	height: 32px;
	padding-right: 24px;
	background-color: var(--color-bg-primary);
	background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzU4NjA2OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=");
	background-repeat: no-repeat;
	background-position: right 4px center;
	background-size: 16px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.form-select::-ms-expand {
	opacity: 0;
}
.form-select[multiple] {
	height: auto;
}
[data-color-mode="light"][data-light-theme*="dark"] .form-select,
[data-color-mode="dark"][data-dark-theme*="dark"] .form-select {
	background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=");
}
@media (prefers-color-scheme: light) {
	[data-color-mode="auto"][data-light-theme*="dark"] .form-select {
		background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=");
	}
}
@media (prefers-color-scheme: dark) {
	[data-color-mode="auto"][data-dark-theme*="dark"] .form-select {
		background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=");
	}
}
.select-sm {
	height: 28px;
	padding-top: 3px;
	padding-bottom: 3px;
	font-size: 12px;
}
.select-sm[multiple] {
	height: auto;
	min-height: 0;
}
.form-group {
	margin: 15px 0;
}
.form-group .form-control {
	width: 440px;
	max-width: 100%;
	margin-right: 5px;
	background-color: var(--color-input-contrast-bg);
}
.form-group .form-control:focus {
	background-color: var(--color-input-bg);
}
.form-group .form-control.shorter {
	width: 130px;
}
.form-group .form-control.short {
	width: 250px;
}
.form-group .form-control.long {
	width: 100%;
}
.form-group textarea.form-control {
	width: 100%;
	height: 200px;
	min-height: 200px;
}
.form-group textarea.form-control.short {
	height: 50px;
	min-height: 50px;
}
.form-group dt,
.form-group .form-group-header {
	margin: 0 0 6px;
}
.form-group label {
	position: relative;
}
.form-group.flattened dt,
.form-group.flattened .form-group-header {
	float: left;
	margin: 0;
	line-height: 32px;
}
.form-group.flattened dd,
.form-group.flattened .form-group-body {
	line-height: 32px;
}
.form-group dd h4,
.form-group .form-group-body h4 {
	margin: 4px 0 0;
}
.form-group dd h4.is-error,
.form-group .form-group-body h4.is-error {
	color: var(--color-text-danger);
}
.form-group dd h4.is-success,
.form-group .form-group-body h4.is-success {
	color: var(--color-text-success);
}
.form-group dd h4 + .note,
.form-group .form-group-body h4 + .note {
	margin-top: 0;
}
.form-group.required dt label::after,
.form-group.required .form-group-header label::after {
	padding-left: 5px;
	color: var(--color-text-danger);
	content: "*";
}
.form-group .success,
.form-group .error,
.form-group .indicator {
	display: none;
	font-size: 12px;
	font-weight: 600;
}
.form-group.loading {
	opacity: 0.5;
}
.form-group.loading .indicator {
	display: inline;
}
.form-group.loading .spinner {
	display: inline-block;
	vertical-align: middle;
}
.form-group.successful .success {
	display: inline;
	color: var(--color-text-success);
}
.form-group.successed .success,
.form-group.successed .warning,
.form-group.successed .error,
.form-group.warn .success,
.form-group.warn .warning,
.form-group.warn .error,
.form-group.errored .success,
.form-group.errored .warning,
.form-group.errored .error {
	position: absolute;
	z-index: 10;
	display: block;
	max-width: 450px;
	padding: 4px 8px;
	margin: 8px 0 0;
	font-size: 12px;
	font-weight: 400;
	border-style: solid;
	border-width: 1px;
	border-radius: 6px;
}
.form-group.successed .success::after,
.form-group.successed .success::before,
.form-group.successed .warning::after,
.form-group.successed .warning::before,
.form-group.successed .error::after,
.form-group.successed .error::before,
.form-group.warn .success::after,
.form-group.warn .success::before,
.form-group.warn .warning::after,
.form-group.warn .warning::before,
.form-group.warn .error::after,
.form-group.warn .error::before,
.form-group.errored .success::after,
.form-group.errored .success::before,
.form-group.errored .warning::after,
.form-group.errored .warning::before,
.form-group.errored .error::after,
.form-group.errored .error::before {
	position: absolute;
	bottom: 100%;
	left: 10px;
	z-index: 15;
	width: 0;
	height: 0;
	pointer-events: none;
	content: " ";
	border: solid transparent;
}
.form-group.successed .success::after,
.form-group.successed .warning::after,
.form-group.successed .error::after,
.form-group.warn .success::after,
.form-group.warn .warning::after,
.form-group.warn .error::after,
.form-group.errored .success::after,
.form-group.errored .warning::after,
.form-group.errored .error::after {
	border-width: 5px;
}
.form-group.successed .success::before,
.form-group.successed .warning::before,
.form-group.successed .error::before,
.form-group.warn .success::before,
.form-group.warn .warning::before,
.form-group.warn .error::before,
.form-group.errored .success::before,
.form-group.errored .warning::before,
.form-group.errored .error::before {
	margin-left: -1px;
	border-width: 6px;
}
.form-group.successed .success {
	color: var(--color-input-tooltip-success-text);
	background-color: var(--color-input-tooltip-success-bg);
	border-color: var(--color-input-tooltip-success-border);
}
.form-group.successed .success::after {
	border-bottom-color: var(--color-input-tooltip-success-bg);
}
.form-group.successed .success::before {
	border-bottom-color: var(--color-input-tooltip-success-border);
}
.form-group.warn .form-control {
	border-color: var(--color-input-warning-border);
}
.form-group.warn .warning {
	color: var(--color-input-tooltip-warning-text);
	background-color: var(--color-input-tooltip-warning-bg);
	border-color: var(--color-input-tooltip-warning-border);
}
.form-group.warn .warning::after {
	border-bottom-color: var(--color-input-tooltip-warning-bg);
}
.form-group.warn .warning::before {
	border-bottom-color: var(--color-input-tooltip-warning-border);
}
.form-group.errored .form-control {
	border-color: var(--color-input-error-border);
}
.form-group.errored label {
	color: var(--color-text-danger);
}
.form-group.errored .error {
	color: var(--color-input-tooltip-error-text);
	background-color: var(--color-input-tooltip-error-bg);
	border-color: var(--color-input-tooltip-error-border);
}
.form-group.errored .error::after {
	border-bottom-color: var(--color-input-tooltip-error-bg);
}
.form-group.errored .error::before {
	border-bottom-color: var(--color-input-tooltip-error-border);
}
.note {
	min-height: 17px;
	margin: 4px 0 2px;
	font-size: 12px;
	color: var(--color-text-secondary);
}
.note .spinner {
	margin-right: 3px;
	vertical-align: middle;
}
dl.form-group > dd .form-control.is-autocheck-loading,
dl.form-group > dd .form-control.is-autocheck-successful,
dl.form-group > dd .form-control.is-autocheck-errored,
.form-group > .form-group-body .form-control.is-autocheck-loading,
.form-group > .form-group-body .form-control.is-autocheck-successful,
.form-group > .form-group-body .form-control.is-autocheck-errored {
	padding-right: 30px;
}
dl.form-group > dd .form-control.is-autocheck-loading,
.form-group > .form-group-body .form-control.is-autocheck-loading {
	background-image: url("/images/spinners/octocat-spinner-16px.gif");
}
dl.form-group > dd .form-control.is-autocheck-successful,
.form-group > .form-group-body .form-control.is-autocheck-successful {
	background-image: url("/images/modules/ajax/success.png");
}
dl.form-group > dd .form-control.is-autocheck-errored,
.form-group > .form-group-body .form-control.is-autocheck-errored {
	background-image: url("/images/modules/ajax/error.png");
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
	only screen and (-moz-min-device-pixel-ratio: 2),
	only screen and (min-device-pixel-ratio: 2),
	only screen and (min-resolution: 192dpi),
	only screen and (min-resolution: 2dppx) {
	dl.form-group > dd .form-control.is-autocheck-loading,
	dl.form-group > dd .form-control.is-autocheck-successful,
	dl.form-group > dd .form-control.is-autocheck-errored,
	.form-group > .form-group-body .form-control.is-autocheck-loading,
	.form-group > .form-group-body .form-control.is-autocheck-successful,
	.form-group > .form-group-body .form-control.is-autocheck-errored {
		background-size: 16px 16px;
	}
	dl.form-group > dd .form-control.is-autocheck-loading,
	.form-group > .form-group-body .form-control.is-autocheck-loading {
		background-image: url("/images/spinners/octocat-spinner-32.gif");
	}
	dl.form-group > dd .form-control.is-autocheck-successful,
	.form-group > .form-group-body .form-control.is-autocheck-successful {
		background-image: url("/images/modules/ajax/success@2x.png");
	}
	dl.form-group > dd .form-control.is-autocheck-errored,
	.form-group > .form-group-body .form-control.is-autocheck-errored {
		background-image: url("/images/modules/ajax/error@2x.png");
	}
}
.status-indicator {
	display: inline-block;
	width: 16px;
	height: 16px;
	margin-left: 5px;
}
.status-indicator .octicon {
	display: none;
}
.status-indicator-success::before {
	content: "";
}
.status-indicator-success .octicon-check {
	display: inline-block;
	color: var(--color-text-success);
	fill: var(--color-icon-success);
}
.status-indicator-success .octicon-x {
	display: none;
}
.status-indicator-failed::before {
	content: "";
}
.status-indicator-failed .octicon-check {
	display: none;
}
.status-indicator-failed .octicon-x {
	display: inline-block;
	color: var(--color-text-danger);
	fill: var(--color-icon-danger);
}
.status-indicator-loading {
	width: 16px;
	background-image: url("/images/spinners/octocat-spinner-32-EAF2F5.gif");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 16px;
}
.inline-form {
	display: inline-block;
}
.inline-form .btn-plain {
	background-color: transparent;
	border: 0;
}
.drag-and-drop {
	padding: 7px 10px;
	margin: 0;
	font-size: 13px;
	line-height: 16px;
	color: var(--color-text-secondary);
	background-color: var(--color-bg-secondary);
	border: 1px solid var(--color-drag-and-drop-border);
	border-top: 0;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.drag-and-drop .default,
.drag-and-drop .loading,
.drag-and-drop .error {
	display: none;
}
.drag-and-drop .error {
	color: var(--color-text-danger);
}
.drag-and-drop img {
	vertical-align: top;
}
.is-default .drag-and-drop .default {
	display: inline-block;
}
.is-uploading .drag-and-drop .loading {
	display: inline-block;
}
.is-bad-file .drag-and-drop .bad-file {
	display: inline-block;
}
.is-duplicate-filename .drag-and-drop .duplicate-filename {
	display: inline-block;
}
.is-too-big .drag-and-drop .too-big {
	display: inline-block;
}
.is-hidden-file .drag-and-drop .hidden-file {
	display: inline-block;
}
.is-empty .drag-and-drop .empty {
	display: inline-block;
}
.is-bad-permissions .drag-and-drop .bad-permissions {
	display: inline-block;
}
.is-repository-required .drag-and-drop .repository-required {
	display: inline-block;
}
.drag-and-drop-error-info {
	font-weight: 400;
	color: var(--color-text-secondary);
}
.drag-and-drop-error-info a {
	color: var(--color-text-link);
}
.is-failed .drag-and-drop .failed-request {
	display: inline-block;
}
.manual-file-chooser {
	position: absolute;
	width: 240px;
	padding: 5px;
	margin-left: -80px;
	cursor: pointer;
	opacity: 0.0001;
}
.manual-file-chooser:hover + .manual-file-chooser-text {
	text-decoration: underline;
}
.btn .manual-file-chooser {
	top: 0;
	padding: 0;
	line-height: 34px;
}
.upload-enabled textarea {
	display: block;
	border-bottom: 1px dashed var(--color-upload-enabled-border);
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
.upload-enabled.focused {
	border-radius: 6px;
	box-shadow: var(--color-input-shadow), var(--color-state-focus-shadow);
}
.upload-enabled.focused .form-control {
	box-shadow: none;
}
.upload-enabled.focused .drag-and-drop {
	border-color: var(--color-upload-enabled-border-focused);
}
.dragover textarea,
.dragover .drag-and-drop {
	box-shadow: #c9ff00 0 0 3px;
}
.write-content {
	position: relative;
}
.previewable-comment-form {
	position: relative;
}
.previewable-comment-form .tabnav {
	position: relative;
	padding: 8px 8px 0;
}
.previewable-comment-form .comment {
	border: 1px solid var(--color-previewable-comment-form-border);
}
.previewable-comment-form .comment-form-error {
	margin-bottom: 8px;
}
.previewable-comment-form .write-content,
.previewable-comment-form .preview-content {
	display: none;
	margin: 0 8px 8px;
}
.previewable-comment-form.write-selected .write-content,
.previewable-comment-form.preview-selected .preview-content {
	display: block;
}
.previewable-comment-form textarea {
	display: block;
	width: 100%;
	min-height: 100px;
	max-height: 500px;
	padding: 8px;
	resize: vertical;
}
.form-action-spacious {
	margin-top: 10px;
}
div.composer {
	margin-top: 0;
	border: 0;
}
.composer .comment-form-textarea {
	height: 200px;
	min-height: 200px;
}
.composer .tabnav {
	margin: 0 0 10px;
}
h2.account {
	margin: 15px 0 0;
	font-size: 18px;
	font-weight: 400;
	color: var(--color-text-secondary);
}
p.explain {
	position: relative;
	font-size: 12px;
	color: var(--color-text-secondary);
}
p.explain strong {
	color: var(--color-text-primary);
}
p.explain .octicon {
	margin-right: 5px;
	color: var(--color-icon-tertiary);
}
p.explain .minibutton {
	top: -4px;
	float: right;
}
.form-group label {
	position: static;
}
.input-group {
	display: table;
}
.input-group .form-control {
	position: relative;
	width: 100%;
}
.input-group .form-control:focus {
	z-index: 2;
}
.input-group .form-control + .btn {
	margin-left: 0;
}
.input-group.inline {
	display: inline-table;
}
.input-group .form-control,
.input-group-button {
	display: table-cell;
}
.input-group-button {
	width: 1%;
	vertical-align: middle;
}
.input-group .form-control:first-child,
.input-group-button:first-child .btn {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.input-group-button:first-child .btn {
	margin-right: -1px;
}
.input-group .form-control:last-child,
.input-group-button:last-child .btn {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.input-group-button:last-child .btn {
	margin-left: -1px;
}
.radio-group::before {
	display: table;
	content: "";
}
.radio-group::after {
	display: table;
	clear: both;
	content: "";
}
.radio-label {
	float: left;
	padding: 6px 16px 6px 36px;
	margin-left: -1px;
	font-size: 14px;
	line-height: 20px;
	color: var(--color-text-primary);
	cursor: pointer;
	border: 1px solid var(--color-border-primary);
}
:checked + .radio-label {
	position: relative;
	z-index: 1;
	border-color: var(--color-border-info);
}
.radio-label:first-of-type {
	margin-left: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}
.radio-label:last-of-type {
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
.radio-input {
	z-index: 3;
	float: left;
	margin: 10px -32px 0 16px;
}
.container-sm {
	max-width: 544px;
	margin-right: auto;
	margin-left: auto;
}
.container-md {
	max-width: 768px;
	margin-right: auto;
	margin-left: auto;
}
.container-lg {
	max-width: 1012px;
	margin-right: auto;
	margin-left: auto;
}
.container-xl {
	max-width: 1280px;
	margin-right: auto;
	margin-left: auto;
}
.col-1 {
	width: 8.33333%;
}
.col-2 {
	width: 16.66667%;
}
.col-3 {
	width: 25%;
}
.col-4 {
	width: 33.33333%;
}
.col-5 {
	width: 41.66667%;
}
.col-6 {
	width: 50%;
}
.col-7 {
	width: 58.33333%;
}
.col-8 {
	width: 66.66667%;
}
.col-9 {
	width: 75%;
}
.col-10 {
	width: 83.33333%;
}
.col-11 {
	width: 91.66667%;
}
.col-12 {
	width: 100%;
}
@media (min-width: 544px) {
	.col-sm-1 {
		width: 8.33333%;
	}
	.col-sm-2 {
		width: 16.66667%;
	}
	.col-sm-3 {
		width: 25%;
	}
	.col-sm-4 {
		width: 33.33333%;
	}
	.col-sm-5 {
		width: 41.66667%;
	}
	.col-sm-6 {
		width: 50%;
	}
	.col-sm-7 {
		width: 58.33333%;
	}
	.col-sm-8 {
		width: 66.66667%;
	}
	.col-sm-9 {
		width: 75%;
	}
	.col-sm-10 {
		width: 83.33333%;
	}
	.col-sm-11 {
		width: 91.66667%;
	}
	.col-sm-12 {
		width: 100%;
	}
}
@media (min-width: 768px) {
	.col-md-1 {
		width: 8.33333%;
	}
	.col-md-2 {
		width: 16.66667%;
	}
	.col-md-3 {
		width: 25%;
	}
	.col-md-4 {
		width: 33.33333%;
	}
	.col-md-5 {
		width: 41.66667%;
	}
	.col-md-6 {
		width: 50%;
	}
	.col-md-7 {
		width: 58.33333%;
	}
	.col-md-8 {
		width: 66.66667%;
	}
	.col-md-9 {
		width: 75%;
	}
	.col-md-10 {
		width: 83.33333%;
	}
	.col-md-11 {
		width: 91.66667%;
	}
	.col-md-12 {
		width: 100%;
	}
}
@media (min-width: 1012px) {
	.col-lg-1 {
		width: 8.33333%;
	}
	.col-lg-2 {
		width: 16.66667%;
	}
	.col-lg-3 {
		width: 25%;
	}
	.col-lg-4 {
		width: 33.33333%;
	}
	.col-lg-5 {
		width: 41.66667%;
	}
	.col-lg-6 {
		width: 50%;
	}
	.col-lg-7 {
		width: 58.33333%;
	}
	.col-lg-8 {
		width: 66.66667%;
	}
	.col-lg-9 {
		width: 75%;
	}
	.col-lg-10 {
		width: 83.33333%;
	}
	.col-lg-11 {
		width: 91.66667%;
	}
	.col-lg-12 {
		width: 100%;
	}
}
@media (min-width: 1280px) {
	.col-xl-1 {
		width: 8.33333%;
	}
	.col-xl-2 {
		width: 16.66667%;
	}
	.col-xl-3 {
		width: 25%;
	}
	.col-xl-4 {
		width: 33.33333%;
	}
	.col-xl-5 {
		width: 41.66667%;
	}
	.col-xl-6 {
		width: 50%;
	}
	.col-xl-7 {
		width: 58.33333%;
	}
	.col-xl-8 {
		width: 66.66667%;
	}
	.col-xl-9 {
		width: 75%;
	}
	.col-xl-10 {
		width: 83.33333%;
	}
	.col-xl-11 {
		width: 91.66667%;
	}
	.col-xl-12 {
		width: 100%;
	}
}
.gutter {
	margin-right: -16px;
	margin-left: -16px;
}
.gutter > [class*="col-"] {
	padding-right: 16px !important;
	padding-left: 16px !important;
}
.gutter-condensed {
	margin-right: -8px;
	margin-left: -8px;
}
.gutter-condensed > [class*="col-"] {
	padding-right: 8px !important;
	padding-left: 8px !important;
}
.gutter-spacious {
	margin-right: -24px;
	margin-left: -24px;
}
.gutter-spacious > [class*="col-"] {
	padding-right: 24px !important;
	padding-left: 24px !important;
}
@media (min-width: 544px) {
	.gutter-sm {
		margin-right: -16px;
		margin-left: -16px;
	}
	.gutter-sm > [class*="col-"] {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.gutter-sm-condensed {
		margin-right: -8px;
		margin-left: -8px;
	}
	.gutter-sm-condensed > [class*="col-"] {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.gutter-sm-spacious {
		margin-right: -24px;
		margin-left: -24px;
	}
	.gutter-sm-spacious > [class*="col-"] {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
}
@media (min-width: 768px) {
	.gutter-md {
		margin-right: -16px;
		margin-left: -16px;
	}
	.gutter-md > [class*="col-"] {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.gutter-md-condensed {
		margin-right: -8px;
		margin-left: -8px;
	}
	.gutter-md-condensed > [class*="col-"] {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.gutter-md-spacious {
		margin-right: -24px;
		margin-left: -24px;
	}
	.gutter-md-spacious > [class*="col-"] {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
}
@media (min-width: 1012px) {
	.gutter-lg {
		margin-right: -16px;
		margin-left: -16px;
	}
	.gutter-lg > [class*="col-"] {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.gutter-lg-condensed {
		margin-right: -8px;
		margin-left: -8px;
	}
	.gutter-lg-condensed > [class*="col-"] {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.gutter-lg-spacious {
		margin-right: -24px;
		margin-left: -24px;
	}
	.gutter-lg-spacious > [class*="col-"] {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
}
@media (min-width: 1280px) {
	.gutter-xl {
		margin-right: -16px;
		margin-left: -16px;
	}
	.gutter-xl > [class*="col-"] {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.gutter-xl-condensed {
		margin-right: -8px;
		margin-left: -8px;
	}
	.gutter-xl-condensed > [class*="col-"] {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.gutter-xl-spacious {
		margin-right: -24px;
		margin-left: -24px;
	}
	.gutter-xl-spacious > [class*="col-"] {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
}
.offset-1 {
	margin-left: 8.33333% !important;
}
.offset-2 {
	margin-left: 16.66667% !important;
}
.offset-3 {
	margin-left: 25% !important;
}
.offset-4 {
	margin-left: 33.33333% !important;
}
.offset-5 {
	margin-left: 41.66667% !important;
}
.offset-6 {
	margin-left: 50% !important;
}
.offset-7 {
	margin-left: 58.33333% !important;
}
.offset-8 {
	margin-left: 66.66667% !important;
}
.offset-9 {
	margin-left: 75% !important;
}
.offset-10 {
	margin-left: 83.33333% !important;
}
.offset-11 {
	margin-left: 91.66667% !important;
}
@media (min-width: 544px) {
	.offset-sm-1 {
		margin-left: 8.33333% !important;
	}
	.offset-sm-2 {
		margin-left: 16.66667% !important;
	}
	.offset-sm-3 {
		margin-left: 25% !important;
	}
	.offset-sm-4 {
		margin-left: 33.33333% !important;
	}
	.offset-sm-5 {
		margin-left: 41.66667% !important;
	}
	.offset-sm-6 {
		margin-left: 50% !important;
	}
	.offset-sm-7 {
		margin-left: 58.33333% !important;
	}
	.offset-sm-8 {
		margin-left: 66.66667% !important;
	}
	.offset-sm-9 {
		margin-left: 75% !important;
	}
	.offset-sm-10 {
		margin-left: 83.33333% !important;
	}
	.offset-sm-11 {
		margin-left: 91.66667% !important;
	}
}
@media (min-width: 768px) {
	.offset-md-1 {
		margin-left: 8.33333% !important;
	}
	.offset-md-2 {
		margin-left: 16.66667% !important;
	}
	.offset-md-3 {
		margin-left: 25% !important;
	}
	.offset-md-4 {
		margin-left: 33.33333% !important;
	}
	.offset-md-5 {
		margin-left: 41.66667% !important;
	}
	.offset-md-6 {
		margin-left: 50% !important;
	}
	.offset-md-7 {
		margin-left: 58.33333% !important;
	}
	.offset-md-8 {
		margin-left: 66.66667% !important;
	}
	.offset-md-9 {
		margin-left: 75% !important;
	}
	.offset-md-10 {
		margin-left: 83.33333% !important;
	}
	.offset-md-11 {
		margin-left: 91.66667% !important;
	}
}
@media (min-width: 1012px) {
	.offset-lg-1 {
		margin-left: 8.33333% !important;
	}
	.offset-lg-2 {
		margin-left: 16.66667% !important;
	}
	.offset-lg-3 {
		margin-left: 25% !important;
	}
	.offset-lg-4 {
		margin-left: 33.33333% !important;
	}
	.offset-lg-5 {
		margin-left: 41.66667% !important;
	}
	.offset-lg-6 {
		margin-left: 50% !important;
	}
	.offset-lg-7 {
		margin-left: 58.33333% !important;
	}
	.offset-lg-8 {
		margin-left: 66.66667% !important;
	}
	.offset-lg-9 {
		margin-left: 75% !important;
	}
	.offset-lg-10 {
		margin-left: 83.33333% !important;
	}
	.offset-lg-11 {
		margin-left: 91.66667% !important;
	}
}
@media (min-width: 1280px) {
	.offset-xl-1 {
		margin-left: 8.33333% !important;
	}
	.offset-xl-2 {
		margin-left: 16.66667% !important;
	}
	.offset-xl-3 {
		margin-left: 25% !important;
	}
	.offset-xl-4 {
		margin-left: 33.33333% !important;
	}
	.offset-xl-5 {
		margin-left: 41.66667% !important;
	}
	.offset-xl-6 {
		margin-left: 50% !important;
	}
	.offset-xl-7 {
		margin-left: 58.33333% !important;
	}
	.offset-xl-8 {
		margin-left: 66.66667% !important;
	}
	.offset-xl-9 {
		margin-left: 75% !important;
	}
	.offset-xl-10 {
		margin-left: 83.33333% !important;
	}
	.offset-xl-11 {
		margin-left: 91.66667% !important;
	}
}
.Link {
	color: var(--color-text-link);
}
.Link:hover {
	text-decoration: underline;
	cursor: pointer;
}
.Link--primary {
	color: var(--color-text-primary) !important;
}
.Link--primary:hover {
	color: var(--color-text-link) !important;
}
.Link--secondary {
	color: var(--color-text-secondary) !important;
}
.Link--secondary:hover {
	color: var(--color-text-link) !important;
}
.Link--muted {
	color: var(--color-text-secondary) !important;
}
.Link--muted:hover {
	color: var(--color-text-link) !important;
	text-decoration: none;
}
.Link--onHover:hover {
	color: var(--color-text-link) !important;
	text-decoration: underline;
	cursor: pointer;
}
.menu {
	margin-bottom: 16px;
	list-style: none;
	background-color: var(--color-bg-primary);
	border: 1px solid var(--color-border-primary);
	border-radius: 6px;
}
.menu-item {
	position: relative;
	display: block;
	padding: 8px 16px;
	color: var(--color-text-primary);
	border-bottom: 1px solid var(--color-border-secondary);
}
.menu-item:first-child {
	border-top: 0;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.menu-item:first-child::before {
	border-top-left-radius: 6px;
}
.menu-item:last-child {
	border-bottom: 0;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.menu-item:last-child::before {
	border-bottom-left-radius: 6px;
}
.menu-item:focus,
.menu-item:hover {
	text-decoration: none;
	background-color: var(--color-state-hover-secondary-bg);
	outline: none;
}
.menu-item:active {
	background-color: var(--color-bg-secondary);
}
.menu-item.selected,
.menu-item[aria-selected="true"],
.menu-item[aria-current]:not([aria-current="false"]) {
	cursor: default;
	background-color: var(--color-menu-bg-active);
}
.menu-item.selected::before,
.menu-item[aria-selected="true"]::before,
.menu-item[aria-current]:not([aria-current="false"])::before {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 2px;
	content: "";
	background-color: var(--color-menu-border-active);
}
.menu-item .octicon {
	width: 16px;
	margin-right: 8px;
	color: var(--color-icon-tertiary);
	text-align: center;
}
.menu-item .Counter {
	float: right;
	margin-left: 4px;
}
.menu-item .menu-warning {
	float: right;
	color: var(--color-auto-red-9);
}
.menu-item .avatar {
	float: left;
	margin-right: 4px;
}
.menu-item.alert .Counter {
	color: var(--color-text-danger);
}
.menu-heading {
	display: block;
	padding: 8px 16px;
	margin-top: 0;
	margin-bottom: 0;
	font-size: inherit;
	font-weight: 600;
	color: var(--color-menu-heading-text);
	border-bottom: 1px solid var(--color-border-secondary);
}
.menu-heading:hover {
	text-decoration: none;
}
.menu-heading:first-child {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.menu-heading:last-child {
	border-bottom: 0;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.tabnav {
	margin-top: 0;
	margin-bottom: 16px;
	border-bottom: 1px solid var(--color-border-primary);
}
.tabnav-tabs {
	display: flex;
	margin-bottom: -1px;
	overflow: auto;
}
.tabnav-tab {
	display: inline-block;
	flex-shrink: 0;
	padding: 8px 16px;
	font-size: 14px;
	line-height: 23px;
	color: var(--color-text-secondary);
	text-decoration: none;
	background-color: transparent;
	border: 1px solid transparent;
	border-bottom: 0;
	transition: color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
}
.tabnav-tab.selected,
.tabnav-tab[aria-selected="true"],
.tabnav-tab[aria-current]:not([aria-current="false"]) {
	color: var(--color-text-primary);
	background-color: var(--color-bg-canvas);
	border-color: var(--color-border-primary);
	border-radius: 6px 6px 0 0;
}
.tabnav-tab.selected .octicon,
.tabnav-tab[aria-selected="true"] .octicon,
.tabnav-tab[aria-current]:not([aria-current="false"]) .octicon {
	color: inherit;
}
.tabnav-tab:hover,
.tabnav-tab:focus {
	color: var(--color-text-primary);
	text-decoration: none;
	transition-duration: 0.1s;
}
.tabnav-tab:active {
	color: var(--color-text-tertiary);
}
.tabnav-tab .octicon {
	margin-right: 4px;
	color: var(--color-icon-tertiary);
}
.tabnav-tab .Counter {
	margin-left: 4px;
	color: inherit;
}
.tabnav-extra {
	display: inline-block;
	padding-top: 10px;
	margin-left: 10px;
	font-size: 12px;
	color: var(--color-text-secondary);
}
.tabnav-extra > .octicon {
	margin-right: 2px;
}
a.tabnav-extra:hover {
	color: var(--color-text-link);
	text-decoration: none;
}
.tabnav-btn {
	margin-left: 8px;
}
.filter-list {
	list-style-type: none;
}
.filter-list.small .filter-item {
	padding: 6px 12px;
	font-size: 12px;
}
.filter-list.pjax-active .filter-item {
	color: var(--color-text-secondary);
	background-color: transparent;
}
.filter-list.pjax-active .filter-item.pjax-active {
	color: var(--color-text-inverse);
	background-color: var(--color-bg-info-inverse);
}
.filter-item {
	position: relative;
	display: block;
	padding: 8px 16px;
	margin-bottom: 4px;
	overflow: hidden;
	font-size: 14px;
	color: var(--color-text-secondary);
	text-decoration: none;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	border-radius: 6px;
}
.filter-item:hover {
	text-decoration: none;
	background-color: var(--color-bg-tertiary);
}
.filter-item.selected,
.filter-item[aria-selected="true"],
.filter-item[aria-current]:not([aria-current="false"]) {
	color: var(--color-state-selected-primary-text);
	background-color: var(--color-state-selected-primary-bg);
}
.filter-item .count {
	float: right;
	font-weight: 600;
}
.filter-item .bar {
	position: absolute;
	top: 2px;
	right: 0;
	bottom: 2px;
	z-index: -1;
	display: inline-block;
	background-color: var(--color-filter-item-bar-bg);
}
.SideNav {
	background-color: var(--color-bg-secondary);
}
.SideNav-item {
	position: relative;
	display: block;
	width: 100%;
	padding: 12px 16px;
	color: var(--color-text-primary);
	text-align: left;
	background-color: transparent;
	border: 0;
	border-top: 1px solid var(--color-border-secondary);
}
.SideNav-item:first-child {
	border-top: 0;
}
.SideNav-item:last-child {
	box-shadow: 0 1px 0 var(--color-border-primary);
}
.SideNav-item::before {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 2px;
	pointer-events: none;
	content: "";
}
.SideNav-item:hover,
.SideNav-item:focus {
	text-decoration: none;
	background-color: var(--color-state-hover-secondary-bg);
	outline: none;
}
.SideNav-item:active {
	background-color: var(--color-bg-secondary);
}
.SideNav-item[aria-current]:not([aria-current="false"]),
.SideNav-item[aria-selected="true"] {
	background-color: var(--color-sidenav-selected-bg);
}
.SideNav-item[aria-current]:not([aria-current="false"])::before,
.SideNav-item[aria-selected="true"]::before {
	background-color: var(--color-sidenav-border-active);
}
.SideNav-icon {
	width: 16px;
	margin-right: 8px;
	color: var(--color-text-tertiary);
}
.SideNav-subItem {
	position: relative;
	display: block;
	width: 100%;
	padding: 4px 0;
	color: var(--color-text-link);
	text-align: left;
	background-color: transparent;
	border: 0;
}
.SideNav-subItem:hover,
.SideNav-subItem:focus {
	color: var(--color-text-primary);
	text-decoration: none;
	outline: none;
}
.SideNav-subItem[aria-current]:not([aria-current="false"]),
.SideNav-subItem[aria-selected="true"] {
	font-weight: 500;
	color: var(--color-text-primary);
}
.subnav {
	margin-bottom: 20px;
}
.subnav::before {
	display: table;
	content: "";
}
.subnav::after {
	display: table;
	clear: both;
	content: "";
}
.subnav-bordered {
	padding-bottom: 20px;
	border-bottom: 1px solid var(--color-border-secondary);
}
.subnav-flush {
	margin-bottom: 0;
}
.subnav-item {
	position: relative;
	float: left;
	padding: 5px 16px;
	font-weight: 500;
	line-height: 20px;
	color: var(--color-text-primary);
	border: 1px solid var(--color-border-primary);
}
.subnav-item + .subnav-item {
	margin-left: -1px;
}
.subnav-item:hover,
.subnav-item:focus {
	text-decoration: none;
	background-color: var(--color-bg-tertiary);
}
.subnav-item.selected,
.subnav-item[aria-selected="true"],
.subnav-item[aria-current]:not([aria-current="false"]) {
	z-index: 2;
	color: var(--color-state-selected-primary-text);
	background-color: var(--color-state-selected-primary-bg);
	border-color: var(--color-state-selected-primary-border);
}
.subnav-item:first-child {
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}
.subnav-item:last-child {
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
.subnav-search {
	position: relative;
	margin-left: 12px;
}
.subnav-search-input {
	width: 320px;
	padding-left: 32px;
	color: var(--color-text-secondary);
}
.subnav-search-input-wide {
	width: 500px;
}
.subnav-search-icon {
	position: absolute;
	top: 9px;
	left: 8px;
	display: block;
	color: var(--color-icon-tertiary);
	text-align: center;
	pointer-events: none;
}
.subnav-search-context .btn {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.subnav-search-context .btn:hover,
.subnav-search-context .btn:focus,
.subnav-search-context .btn:active,
.subnav-search-context .btn.selected {
	z-index: 2;
}
.subnav-search-context + .subnav-search {
	margin-left: -1px;
}
.subnav-search-context + .subnav-search .subnav-search-input {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.subnav-search-context .select-menu-modal-holder {
	z-index: 30;
}
.subnav-search-context .select-menu-modal {
	width: 220px;
}
.subnav-search-context .select-menu-item-icon {
	color: inherit;
}
.subnav-spacer-right {
	padding-right: 12px;
}
.UnderlineNav {
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	box-shadow: inset 0 -1px 0 var(--color-border-secondary);
	justify-content: space-between;
}
.UnderlineNav-body {
	display: flex;
}
.UnderlineNav-item {
	padding: 8px 16px;
	font-size: 14px;
	line-height: 30px;
	color: var(--color-underlinenav-text);
	text-align: center;
	white-space: nowrap;
	background-color: transparent;
	border: 0;
	border-bottom: 2px solid transparent;
}
.UnderlineNav-item:hover,
.UnderlineNav-item:focus {
	color: var(--color-underlinenav-text-hover);
	text-decoration: none;
	border-bottom-color: var(--color-border-tertiary);
	outline: 1px dotted transparent;
	outline-offset: -1px;
	transition: border-bottom-color 0.12s ease-out;
}
.UnderlineNav-item.selected,
.UnderlineNav-item[role="tab"][aria-selected="true"],
.UnderlineNav-item[aria-current]:not([aria-current="false"]) {
	font-weight: 600;
	color: var(--color-underlinenav-text-active);
	border-bottom-color: #f9826c;
	outline: 1px dotted transparent;
	outline-offset: -1px;
}
.UnderlineNav-item.selected .UnderlineNav-octicon,
.UnderlineNav-item[role="tab"][aria-selected="true"] .UnderlineNav-octicon,
.UnderlineNav-item[aria-current]:not([aria-current="false"])
	.UnderlineNav-octicon {
	color: var(--color-text-tertiary);
}
.UnderlineNav--right {
	justify-content: flex-end;
}
.UnderlineNav--right .UnderlineNav-actions {
	flex: 1 1 auto;
}
.UnderlineNav-actions {
	align-self: center;
}
.UnderlineNav--full {
	display: block;
}
.UnderlineNav-octicon {
	margin-right: 4px;
	color: var(--color-underlinenav-icon);
}
.UnderlineNav .Counter {
	margin-left: 4px;
	color: var(--color-underlinenav-counter-text);
	background-color: var(--color-underlinenav-counter-bg);
}
.UnderlineNav .Counter--primary {
	color: var(--color-counter-primary-text);
	background-color: var(--color-counter-primary-bg);
}
.UnderlineNav-container {
	display: flex;
	justify-content: space-between;
}
.pagination a,
.pagination span,
.pagination em {
	display: inline-block;
	min-width: 32px;
	padding: 5px 10px;
	font-style: normal;
	line-height: 20px;
	color: var(--color-text-primary);
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	border-radius: 6px;
	transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
}
.pagination a:hover,
.pagination a:focus,
.pagination span:hover,
.pagination span:focus,
.pagination em:hover,
.pagination em:focus {
	text-decoration: none;
	border-color: var(--color-border-primary);
	outline: 0;
	transition-duration: 0.1s;
}
.pagination a:active,
.pagination span:active,
.pagination em:active {
	border-color: var(--color-border-secondary);
	transition: none;
}
.pagination .previous_page,
.pagination .next_page {
	color: var(--color-text-link);
}
.pagination .current,
.pagination .current:hover,
.pagination [aria-current]:not([aria-current="false"]) {
	color: var(--color-state-selected-primary-text);
	background-color: var(--color-state-selected-primary-bg);
	border-color: transparent;
}
.pagination .gap,
.pagination .disabled,
.pagination [aria-disabled="true"],
.pagination .gap:hover,
.pagination .disabled:hover,
.pagination [aria-disabled="true"]:hover {
	color: var(--color-text-disabled);
	cursor: default;
	border-color: transparent;
}
@supports (
	(-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%)) or
		(clip-path: polygon(50% 0, 100% 50%, 50% 100%))
) {
	.pagination .previous_page::before,
	.pagination .next_page::after {
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: text-bottom;
		content: "";
		background-color: currentColor;
	}
	.pagination .previous_page::before {
		margin-right: 4px;
		-webkit-clip-path: polygon(
			9.8px 12.8px,
			8.7px 12.8px,
			4.5px 8.5px,
			4.5px 7.5px,
			8.7px 3.2px,
			9.8px 4.3px,
			6.1px 8px,
			9.8px 11.7px,
			9.8px 12.8px
		);
		clip-path: polygon(
			9.8px 12.8px,
			8.7px 12.8px,
			4.5px 8.5px,
			4.5px 7.5px,
			8.7px 3.2px,
			9.8px 4.3px,
			6.1px 8px,
			9.8px 11.7px,
			9.8px 12.8px
		);
	}
	.pagination .next_page::after {
		margin-left: 4px;
		-webkit-clip-path: polygon(
			6.2px 3.2px,
			7.3px 3.2px,
			11.5px 7.5px,
			11.5px 8.5px,
			7.3px 12.8px,
			6.2px 11.7px,
			9.9px 8px,
			6.2px 4.3px,
			6.2px 3.2px
		);
		clip-path: polygon(
			6.2px 3.2px,
			7.3px 3.2px,
			11.5px 7.5px,
			11.5px 8.5px,
			7.3px 12.8px,
			6.2px 11.7px,
			9.9px 8px,
			6.2px 4.3px,
			6.2px 3.2px
		);
	}
}
.paginate-container {
	margin-top: 16px;
	margin-bottom: 16px;
	text-align: center;
}
.paginate-container .pagination {
	display: inline-block;
}
.tooltipped {
	position: relative;
}
.tooltipped::after {
	position: absolute;
	z-index: 1000000;
	display: none;
	padding: 0.5em 0.75em;
	font: normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
		Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
	-webkit-font-smoothing: subpixel-antialiased;
	color: var(--color-tooltip-text);
	text-align: center;
	text-decoration: none;
	text-shadow: none;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: break-word;
	white-space: pre;
	pointer-events: none;
	content: attr(aria-label);
	background: var(--color-tooltip-bg);
	border-radius: 6px;
	opacity: 0;
}
.tooltipped::before {
	position: absolute;
	z-index: 1000001;
	display: none;
	width: 0;
	height: 0;
	color: var(--color-tooltip-bg);
	pointer-events: none;
	content: "";
	border: 6px solid transparent;
	opacity: 0;
}
@keyframes tooltip-appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.tooltipped:hover::before,
.tooltipped:hover::after,
.tooltipped:active::before,
.tooltipped:active::after,
.tooltipped:focus::before,
.tooltipped:focus::after {
	display: inline-block;
	text-decoration: none;
	animation-name: tooltip-appear;
	animation-duration: 0.1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in;
	animation-delay: 0.4s;
}
.tooltipped-no-delay:hover::before,
.tooltipped-no-delay:hover::after,
.tooltipped-no-delay:active::before,
.tooltipped-no-delay:active::after,
.tooltipped-no-delay:focus::before,
.tooltipped-no-delay:focus::after {
	animation-delay: 0s;
}
.tooltipped-multiline:hover::after,
.tooltipped-multiline:active::after,
.tooltipped-multiline:focus::after {
	display: table-cell;
}
.tooltipped-s::after,
.tooltipped-se::after,
.tooltipped-sw::after {
	top: 100%;
	right: 50%;
	margin-top: 6px;
}
.tooltipped-s::before,
.tooltipped-se::before,
.tooltipped-sw::before {
	top: auto;
	right: 50%;
	bottom: -7px;
	margin-right: -6px;
	border-bottom-color: var(--color-tooltip-bg);
}
.tooltipped-se::after {
	right: auto;
	left: 50%;
	margin-left: -16px;
}
.tooltipped-sw::after {
	margin-right: -16px;
}
.tooltipped-n::after,
.tooltipped-ne::after,
.tooltipped-nw::after {
	right: 50%;
	bottom: 100%;
	margin-bottom: 6px;
}
.tooltipped-n::before,
.tooltipped-ne::before,
.tooltipped-nw::before {
	top: -7px;
	right: 50%;
	bottom: auto;
	margin-right: -6px;
	border-top-color: var(--color-tooltip-bg);
}
.tooltipped-ne::after {
	right: auto;
	left: 50%;
	margin-left: -16px;
}
.tooltipped-nw::after {
	margin-right: -16px;
}
.tooltipped-s::after,
.tooltipped-n::after {
	transform: translateX(50%);
}
.tooltipped-w::after {
	right: 100%;
	bottom: 50%;
	margin-right: 6px;
	transform: translateY(50%);
}
.tooltipped-w::before {
	top: 50%;
	bottom: 50%;
	left: -7px;
	margin-top: -6px;
	border-left-color: var(--color-tooltip-bg);
}
.tooltipped-e::after {
	bottom: 50%;
	left: 100%;
	margin-left: 6px;
	transform: translateY(50%);
}
.tooltipped-e::before {
	top: 50%;
	right: -7px;
	bottom: 50%;
	margin-top: -6px;
	border-right-color: var(--color-tooltip-bg);
}
.tooltipped-align-right-1::after,
.tooltipped-align-right-2::after {
	right: 0;
	margin-right: 0;
}
.tooltipped-align-right-1::before {
	right: 10px;
}
.tooltipped-align-right-2::before {
	right: 15px;
}
.tooltipped-align-left-1::after,
.tooltipped-align-left-2::after {
	left: 0;
	margin-left: 0;
}
.tooltipped-align-left-1::before {
	left: 5px;
}
.tooltipped-align-left-2::before {
	left: 10px;
}
.tooltipped-multiline::after {
	width: -webkit-max-content;
	width: max-content;
	max-width: 250px;
	word-wrap: break-word;
	white-space: pre-line;
	border-collapse: separate;
}
.tooltipped-multiline.tooltipped-s::after,
.tooltipped-multiline.tooltipped-n::after {
	right: auto;
	left: 50%;
	transform: translateX(-50%);
}
.tooltipped-multiline.tooltipped-w::after,
.tooltipped-multiline.tooltipped-e::after {
	right: 100%;
}
@media screen and (min-width: 0\0) {
	.tooltipped-multiline::after {
		width: 250px;
	}
}
.tooltipped-sticky::before,
.tooltipped-sticky::after {
	display: inline-block;
}
.tooltipped-sticky.tooltipped-multiline::after {
	display: table-cell;
}
.css-truncate.css-truncate-overflow,
.css-truncate .css-truncate-overflow,
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
	display: inline-block;
	max-width: 125px;
	vertical-align: top;
}
.css-truncate.expandable.zeroclipboard-is-hover .css-truncate-target,
.css-truncate.expandable.zeroclipboard-is-hover.css-truncate-target,
.css-truncate.expandable:hover .css-truncate-target,
.css-truncate.expandable:hover.css-truncate-target {
	max-width: 10000px !important;
}
.anim-fade-in {
	animation-name: fade-in;
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
}
.anim-fade-in.fast {
	animation-duration: 300ms;
}
@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.anim-fade-out {
	animation-name: fade-out;
	animation-duration: 1s;
	animation-timing-function: ease-out;
}
.anim-fade-out.fast {
	animation-duration: 0.3s;
}
@keyframes fade-out {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
.anim-fade-up {
	opacity: 0;
	animation-name: fade-up;
	animation-duration: 0.3s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;
	animation-delay: 1s;
}
@keyframes fade-up {
	0% {
		opacity: 0.8;
		transform: translateY(100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
.anim-fade-down {
	animation-name: fade-down;
	animation-duration: 0.3s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in;
}
@keyframes fade-down {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0.5;
		transform: translateY(100%);
	}
}
.anim-grow-x {
	width: 0%;
	animation-name: grow-x;
	animation-duration: 0.3s;
	animation-fill-mode: forwards;
	animation-timing-function: ease;
	animation-delay: 0.5s;
}
@keyframes grow-x {
	to {
		width: 100%;
	}
}
.anim-shrink-x {
	animation-name: shrink-x;
	animation-duration: 0.3s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
	animation-delay: 0.5s;
}
@keyframes shrink-x {
	to {
		width: 0%;
	}
}
.anim-scale-in {
	animation-name: scale-in;
	animation-duration: 0.15s;
	animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);
}
@keyframes scale-in {
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
.anim-pulse {
	animation-name: pulse;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
@keyframes pulse {
	0% {
		opacity: 0.3;
	}
	10% {
		opacity: 1;
	}
	100% {
		opacity: 0.3;
	}
}
.anim-pulse-in {
	animation-name: pulse-in;
	animation-duration: 0.5s;
}
@keyframes pulse-in {
	0% {
		transform: scale3d(1, 1, 1);
	}
	50% {
		transform: scale3d(1.1, 1.1, 1.1);
	}
	100% {
		transform: scale3d(1, 1, 1);
	}
}
.hover-grow {
	transition: transform 0.3s;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
.hover-grow:hover {
	transform: scale(1.025);
}
.anim-rotate {
	animation: rotate-keyframes 1s linear infinite;
}
@keyframes rotate-keyframes {
	100% {
		transform: rotate(360deg);
	}
}
.border-x {
	border-right: 1px solid var(--color-border-primary) !important;
	border-left: 1px solid var(--color-border-primary) !important;
}
.border-y {
	border-top: 1px solid var(--color-border-primary) !important;
	border-bottom: 1px solid var(--color-border-primary) !important;
}
.border {
	border: 1px solid var(--color-border-primary) !important;
}
.border-0 {
	border: 0 !important;
}
.border-top {
	border-top: 1px solid var(--color-border-primary) !important;
}
.border-right {
	border-right: 1px solid var(--color-border-primary) !important;
}
.border-bottom {
	border-bottom: 1px solid var(--color-border-primary) !important;
}
.border-left {
	border-left: 1px solid var(--color-border-primary) !important;
}
.border-top-0 {
	border-top: 0 !important;
}
.border-right-0 {
	border-right: 0 !important;
}
.border-bottom-0 {
	border-bottom: 0 !important;
}
.border-left-0 {
	border-left: 0 !important;
}
.rounded {
	border-radius: 6px !important;
}
.rounded-0 {
	border-radius: 0 !important;
}
.rounded-1 {
	border-radius: 4px !important;
}
.rounded-2 {
	border-radius: 6px !important;
}
.rounded-3 {
	border-radius: 8px !important;
}
.rounded-top-0 {
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;
}
.rounded-top-1 {
	border-top-left-radius: 4px !important;
	border-top-right-radius: 4px !important;
}
.rounded-top-2 {
	border-top-left-radius: 6px !important;
	border-top-right-radius: 6px !important;
}
.rounded-top-3 {
	border-top-left-radius: 8px !important;
	border-top-right-radius: 8px !important;
}
.rounded-right-0 {
	border-top-right-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}
.rounded-right-1 {
	border-top-right-radius: 4px !important;
	border-bottom-right-radius: 4px !important;
}
.rounded-right-2 {
	border-top-right-radius: 6px !important;
	border-bottom-right-radius: 6px !important;
}
.rounded-right-3 {
	border-top-right-radius: 8px !important;
	border-bottom-right-radius: 8px !important;
}
.rounded-bottom-0 {
	border-bottom-right-radius: 0 !important;
	border-bottom-left-radius: 0 !important;
}
.rounded-bottom-1 {
	border-bottom-right-radius: 4px !important;
	border-bottom-left-radius: 4px !important;
}
.rounded-bottom-2 {
	border-bottom-right-radius: 6px !important;
	border-bottom-left-radius: 6px !important;
}
.rounded-bottom-3 {
	border-bottom-right-radius: 8px !important;
	border-bottom-left-radius: 8px !important;
}
.rounded-left-0 {
	border-bottom-left-radius: 0 !important;
	border-top-left-radius: 0 !important;
}
.rounded-left-1 {
	border-bottom-left-radius: 4px !important;
	border-top-left-radius: 4px !important;
}
.rounded-left-2 {
	border-bottom-left-radius: 6px !important;
	border-top-left-radius: 6px !important;
}
.rounded-left-3 {
	border-bottom-left-radius: 8px !important;
	border-top-left-radius: 8px !important;
}
@media (min-width: 544px) {
	.border-sm {
		border: 1px solid var(--color-border-primary) !important;
	}
	.border-sm-0 {
		border: 0 !important;
	}
	.border-sm-top {
		border-top: 1px solid var(--color-border-primary) !important;
	}
	.border-sm-right {
		border-right: 1px solid var(--color-border-primary) !important;
	}
	.border-sm-bottom {
		border-bottom: 1px solid var(--color-border-primary) !important;
	}
	.border-sm-left {
		border-left: 1px solid var(--color-border-primary) !important;
	}
	.border-sm-top-0 {
		border-top: 0 !important;
	}
	.border-sm-right-0 {
		border-right: 0 !important;
	}
	.border-sm-bottom-0 {
		border-bottom: 0 !important;
	}
	.border-sm-left-0 {
		border-left: 0 !important;
	}
	.rounded-sm {
		border-radius: 6px !important;
	}
	.rounded-sm-0 {
		border-radius: 0 !important;
	}
	.rounded-sm-1 {
		border-radius: 4px !important;
	}
	.rounded-sm-2 {
		border-radius: 6px !important;
	}
	.rounded-sm-3 {
		border-radius: 8px !important;
	}
	.rounded-sm-top-0 {
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}
	.rounded-sm-top-1 {
		border-top-left-radius: 4px !important;
		border-top-right-radius: 4px !important;
	}
	.rounded-sm-top-2 {
		border-top-left-radius: 6px !important;
		border-top-right-radius: 6px !important;
	}
	.rounded-sm-top-3 {
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
	}
	.rounded-sm-right-0 {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
	.rounded-sm-right-1 {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
	.rounded-sm-right-2 {
		border-top-right-radius: 6px !important;
		border-bottom-right-radius: 6px !important;
	}
	.rounded-sm-right-3 {
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
	}
	.rounded-sm-bottom-0 {
		border-bottom-right-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	.rounded-sm-bottom-1 {
		border-bottom-right-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
	}
	.rounded-sm-bottom-2 {
		border-bottom-right-radius: 6px !important;
		border-bottom-left-radius: 6px !important;
	}
	.rounded-sm-bottom-3 {
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.rounded-sm-left-0 {
		border-bottom-left-radius: 0 !important;
		border-top-left-radius: 0 !important;
	}
	.rounded-sm-left-1 {
		border-bottom-left-radius: 4px !important;
		border-top-left-radius: 4px !important;
	}
	.rounded-sm-left-2 {
		border-bottom-left-radius: 6px !important;
		border-top-left-radius: 6px !important;
	}
	.rounded-sm-left-3 {
		border-bottom-left-radius: 8px !important;
		border-top-left-radius: 8px !important;
	}
}
@media (min-width: 768px) {
	.border-md {
		border: 1px solid var(--color-border-primary) !important;
	}
	.border-md-0 {
		border: 0 !important;
	}
	.border-md-top {
		border-top: 1px solid var(--color-border-primary) !important;
	}
	.border-md-right {
		border-right: 1px solid var(--color-border-primary) !important;
	}
	.border-md-bottom {
		border-bottom: 1px solid var(--color-border-primary) !important;
	}
	.border-md-left {
		border-left: 1px solid var(--color-border-primary) !important;
	}
	.border-md-top-0 {
		border-top: 0 !important;
	}
	.border-md-right-0 {
		border-right: 0 !important;
	}
	.border-md-bottom-0 {
		border-bottom: 0 !important;
	}
	.border-md-left-0 {
		border-left: 0 !important;
	}
	.rounded-md {
		border-radius: 6px !important;
	}
	.rounded-md-0 {
		border-radius: 0 !important;
	}
	.rounded-md-1 {
		border-radius: 4px !important;
	}
	.rounded-md-2 {
		border-radius: 6px !important;
	}
	.rounded-md-3 {
		border-radius: 8px !important;
	}
	.rounded-md-top-0 {
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}
	.rounded-md-top-1 {
		border-top-left-radius: 4px !important;
		border-top-right-radius: 4px !important;
	}
	.rounded-md-top-2 {
		border-top-left-radius: 6px !important;
		border-top-right-radius: 6px !important;
	}
	.rounded-md-top-3 {
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
	}
	.rounded-md-right-0 {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
	.rounded-md-right-1 {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
	.rounded-md-right-2 {
		border-top-right-radius: 6px !important;
		border-bottom-right-radius: 6px !important;
	}
	.rounded-md-right-3 {
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
	}
	.rounded-md-bottom-0 {
		border-bottom-right-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	.rounded-md-bottom-1 {
		border-bottom-right-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
	}
	.rounded-md-bottom-2 {
		border-bottom-right-radius: 6px !important;
		border-bottom-left-radius: 6px !important;
	}
	.rounded-md-bottom-3 {
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.rounded-md-left-0 {
		border-bottom-left-radius: 0 !important;
		border-top-left-radius: 0 !important;
	}
	.rounded-md-left-1 {
		border-bottom-left-radius: 4px !important;
		border-top-left-radius: 4px !important;
	}
	.rounded-md-left-2 {
		border-bottom-left-radius: 6px !important;
		border-top-left-radius: 6px !important;
	}
	.rounded-md-left-3 {
		border-bottom-left-radius: 8px !important;
		border-top-left-radius: 8px !important;
	}
}
@media (min-width: 1012px) {
	.border-lg {
		border: 1px solid var(--color-border-primary) !important;
	}
	.border-lg-0 {
		border: 0 !important;
	}
	.border-lg-top {
		border-top: 1px solid var(--color-border-primary) !important;
	}
	.border-lg-right {
		border-right: 1px solid var(--color-border-primary) !important;
	}
	.border-lg-bottom {
		border-bottom: 1px solid var(--color-border-primary) !important;
	}
	.border-lg-left {
		border-left: 1px solid var(--color-border-primary) !important;
	}
	.border-lg-top-0 {
		border-top: 0 !important;
	}
	.border-lg-right-0 {
		border-right: 0 !important;
	}
	.border-lg-bottom-0 {
		border-bottom: 0 !important;
	}
	.border-lg-left-0 {
		border-left: 0 !important;
	}
	.rounded-lg {
		border-radius: 6px !important;
	}
	.rounded-lg-0 {
		border-radius: 0 !important;
	}
	.rounded-lg-1 {
		border-radius: 4px !important;
	}
	.rounded-lg-2 {
		border-radius: 6px !important;
	}
	.rounded-lg-3 {
		border-radius: 8px !important;
	}
	.rounded-lg-top-0 {
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}
	.rounded-lg-top-1 {
		border-top-left-radius: 4px !important;
		border-top-right-radius: 4px !important;
	}
	.rounded-lg-top-2 {
		border-top-left-radius: 6px !important;
		border-top-right-radius: 6px !important;
	}
	.rounded-lg-top-3 {
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
	}
	.rounded-lg-right-0 {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
	.rounded-lg-right-1 {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
	.rounded-lg-right-2 {
		border-top-right-radius: 6px !important;
		border-bottom-right-radius: 6px !important;
	}
	.rounded-lg-right-3 {
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
	}
	.rounded-lg-bottom-0 {
		border-bottom-right-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	.rounded-lg-bottom-1 {
		border-bottom-right-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
	}
	.rounded-lg-bottom-2 {
		border-bottom-right-radius: 6px !important;
		border-bottom-left-radius: 6px !important;
	}
	.rounded-lg-bottom-3 {
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.rounded-lg-left-0 {
		border-bottom-left-radius: 0 !important;
		border-top-left-radius: 0 !important;
	}
	.rounded-lg-left-1 {
		border-bottom-left-radius: 4px !important;
		border-top-left-radius: 4px !important;
	}
	.rounded-lg-left-2 {
		border-bottom-left-radius: 6px !important;
		border-top-left-radius: 6px !important;
	}
	.rounded-lg-left-3 {
		border-bottom-left-radius: 8px !important;
		border-top-left-radius: 8px !important;
	}
}
@media (min-width: 1280px) {
	.border-xl {
		border: 1px solid var(--color-border-primary) !important;
	}
	.border-xl-0 {
		border: 0 !important;
	}
	.border-xl-top {
		border-top: 1px solid var(--color-border-primary) !important;
	}
	.border-xl-right {
		border-right: 1px solid var(--color-border-primary) !important;
	}
	.border-xl-bottom {
		border-bottom: 1px solid var(--color-border-primary) !important;
	}
	.border-xl-left {
		border-left: 1px solid var(--color-border-primary) !important;
	}
	.border-xl-top-0 {
		border-top: 0 !important;
	}
	.border-xl-right-0 {
		border-right: 0 !important;
	}
	.border-xl-bottom-0 {
		border-bottom: 0 !important;
	}
	.border-xl-left-0 {
		border-left: 0 !important;
	}
	.rounded-xl {
		border-radius: 6px !important;
	}
	.rounded-xl-0 {
		border-radius: 0 !important;
	}
	.rounded-xl-1 {
		border-radius: 4px !important;
	}
	.rounded-xl-2 {
		border-radius: 6px !important;
	}
	.rounded-xl-3 {
		border-radius: 8px !important;
	}
	.rounded-xl-top-0 {
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}
	.rounded-xl-top-1 {
		border-top-left-radius: 4px !important;
		border-top-right-radius: 4px !important;
	}
	.rounded-xl-top-2 {
		border-top-left-radius: 6px !important;
		border-top-right-radius: 6px !important;
	}
	.rounded-xl-top-3 {
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
	}
	.rounded-xl-right-0 {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
	.rounded-xl-right-1 {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
	.rounded-xl-right-2 {
		border-top-right-radius: 6px !important;
		border-bottom-right-radius: 6px !important;
	}
	.rounded-xl-right-3 {
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
	}
	.rounded-xl-bottom-0 {
		border-bottom-right-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	.rounded-xl-bottom-1 {
		border-bottom-right-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
	}
	.rounded-xl-bottom-2 {
		border-bottom-right-radius: 6px !important;
		border-bottom-left-radius: 6px !important;
	}
	.rounded-xl-bottom-3 {
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.rounded-xl-left-0 {
		border-bottom-left-radius: 0 !important;
		border-top-left-radius: 0 !important;
	}
	.rounded-xl-left-1 {
		border-bottom-left-radius: 4px !important;
		border-top-left-radius: 4px !important;
	}
	.rounded-xl-left-2 {
		border-bottom-left-radius: 6px !important;
		border-top-left-radius: 6px !important;
	}
	.rounded-xl-left-3 {
		border-bottom-left-radius: 8px !important;
		border-top-left-radius: 8px !important;
	}
}
.circle {
	border-radius: 50% !important;
}
.border-dashed {
	border-style: dashed !important;
}
.color-shadow-small {
	box-shadow: var(--color-shadow-small) !important;
}
.color-shadow-medium {
	box-shadow: var(--color-shadow-medium) !important;
}
.color-shadow-large {
	box-shadow: var(--color-shadow-large) !important;
}
.color-shadow-extra-large {
	box-shadow: var(--color-shadow-extra-large) !important;
}
.box-shadow-none {
	box-shadow: none !important;
}
.color-text-primary {
	color: var(--color-text-primary) !important;
}
.color-text-secondary {
	color: var(--color-text-secondary) !important;
}
.color-text-tertiary {
	color: var(--color-text-tertiary) !important;
}
.color-text-link {
	color: var(--color-text-link) !important;
}
.color-text-success {
	color: var(--color-text-success) !important;
}
.color-text-warning {
	color: var(--color-text-warning) !important;
}
.color-text-danger {
	color: var(--color-text-danger) !important;
}
.color-text-inverse {
	color: var(--color-text-inverse) !important;
}
.color-text-white {
	color: var(--color-text-white) !important;
}
.color-icon-primary {
	color: var(--color-icon-primary) !important;
}
.color-icon-secondary {
	color: var(--color-icon-secondary) !important;
}
.color-icon-tertiary {
	color: var(--color-icon-tertiary) !important;
}
.color-icon-info {
	color: var(--color-icon-info) !important;
}
.color-icon-danger {
	color: var(--color-icon-danger) !important;
}
.color-icon-success {
	color: var(--color-icon-success) !important;
}
.color-icon-warning {
	color: var(--color-icon-warning) !important;
}
.color-border-primary {
	border-color: var(--color-border-primary) !important;
}
.color-border-secondary {
	border-color: var(--color-border-secondary) !important;
}
.color-border-tertiary {
	border-color: var(--color-border-tertiary) !important;
}
.color-border-overlay {
	border-color: var(--color-border-overlay) !important;
}
.color-border-inverse {
	border-color: var(--color-border-inverse) !important;
}
.color-border-info {
	border-color: var(--color-border-info) !important;
}
.color-border-success {
	border-color: var(--color-border-success) !important;
}
.color-border-danger {
	border-color: var(--color-border-danger) !important;
}
.color-border-warning {
	border-color: var(--color-border-warning) !important;
}
.color-bg-canvas {
	background-color: var(--color-bg-canvas) !important;
}
.color-bg-canvas-inverse {
	background-color: var(--color-bg-canvas-inverse) !important;
}
.color-bg-canvas-inset {
	background-color: var(--color-bg-canvas-inset) !important;
}
.color-bg-primary {
	background-color: var(--color-bg-primary) !important;
}
.color-bg-secondary {
	background-color: var(--color-bg-secondary) !important;
}
.color-bg-tertiary {
	background-color: var(--color-bg-tertiary) !important;
}
.color-bg-overlay {
	background-color: var(--color-bg-overlay) !important;
}
.color-bg-info {
	background-color: var(--color-bg-info) !important;
}
.color-bg-info-inverse {
	background-color: var(--color-bg-info-inverse) !important;
}
.color-bg-danger {
	background-color: var(--color-bg-danger) !important;
}
.color-bg-danger-inverse {
	background-color: var(--color-bg-danger-inverse) !important;
}
.color-bg-success {
	background-color: var(--color-bg-success) !important;
}
.color-bg-success-inverse {
	background-color: var(--color-bg-success-inverse) !important;
}
.color-bg-warning {
	background-color: var(--color-bg-warning) !important;
}
.color-bg-warning-inverse {
	background-color: var(--color-bg-warning-inverse) !important;
}
.text-inherit {
	color: inherit !important;
}
.details-overlay[open] > summary::before {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 80;
	display: block;
	cursor: default;
	content: " ";
	background: transparent;
}
.details-overlay-dark[open] > summary::before {
	z-index: 99;
	background: var(--color-fade-black-50);
}
.details-reset > summary {
	list-style: none;
}
.details-reset > summary::before {
	display: none;
}
.details-reset > summary::-webkit-details-marker {
	display: none;
}
.flex-row {
	flex-direction: row !important;
}
.flex-row-reverse {
	flex-direction: row-reverse !important;
}
.flex-column {
	flex-direction: column !important;
}
.flex-column-reverse {
	flex-direction: column-reverse !important;
}
.flex-wrap {
	flex-wrap: wrap !important;
}
.flex-nowrap {
	flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
	flex-wrap: wrap-reverse !important;
}
.flex-justify-start {
	justify-content: flex-start !important;
}
.flex-justify-end {
	justify-content: flex-end !important;
}
.flex-justify-center {
	justify-content: center !important;
}
.flex-justify-between {
	justify-content: space-between !important;
}
.flex-justify-around {
	justify-content: space-around !important;
}
.flex-items-start {
	align-items: flex-start !important;
}
.flex-items-end {
	align-items: flex-end !important;
}
.flex-items-center {
	align-items: center !important;
}
.flex-items-baseline {
	align-items: baseline !important;
}
.flex-items-stretch {
	align-items: stretch !important;
}
.flex-content-start {
	align-content: flex-start !important;
}
.flex-content-end {
	align-content: flex-end !important;
}
.flex-content-center {
	align-content: center !important;
}
.flex-content-between {
	align-content: space-between !important;
}
.flex-content-around {
	align-content: space-around !important;
}
.flex-content-stretch {
	align-content: stretch !important;
}
.flex-1 {
	flex: 1 !important;
}
.flex-auto {
	flex: auto !important;
}
.flex-grow-0 {
	flex-grow: 0 !important;
}
.flex-shrink-0 {
	flex-shrink: 0 !important;
}
.flex-self-auto {
	align-self: auto !important;
}
.flex-self-start {
	align-self: flex-start !important;
}
.flex-self-end {
	align-self: flex-end !important;
}
.flex-self-center {
	align-self: center !important;
}
.flex-self-baseline {
	align-self: baseline !important;
}
.flex-self-stretch {
	align-self: stretch !important;
}
.flex-order-1 {
	order: 1 !important;
}
.flex-order-2 {
	order: 2 !important;
}
.flex-order-none {
	order: inherit !important;
}
@media (min-width: 544px) {
	.flex-sm-row {
		flex-direction: row !important;
	}
	.flex-sm-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-sm-column {
		flex-direction: column !important;
	}
	.flex-sm-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-sm-wrap {
		flex-wrap: wrap !important;
	}
	.flex-sm-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-sm-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.flex-sm-justify-start {
		justify-content: flex-start !important;
	}
	.flex-sm-justify-end {
		justify-content: flex-end !important;
	}
	.flex-sm-justify-center {
		justify-content: center !important;
	}
	.flex-sm-justify-between {
		justify-content: space-between !important;
	}
	.flex-sm-justify-around {
		justify-content: space-around !important;
	}
	.flex-sm-items-start {
		align-items: flex-start !important;
	}
	.flex-sm-items-end {
		align-items: flex-end !important;
	}
	.flex-sm-items-center {
		align-items: center !important;
	}
	.flex-sm-items-baseline {
		align-items: baseline !important;
	}
	.flex-sm-items-stretch {
		align-items: stretch !important;
	}
	.flex-sm-content-start {
		align-content: flex-start !important;
	}
	.flex-sm-content-end {
		align-content: flex-end !important;
	}
	.flex-sm-content-center {
		align-content: center !important;
	}
	.flex-sm-content-between {
		align-content: space-between !important;
	}
	.flex-sm-content-around {
		align-content: space-around !important;
	}
	.flex-sm-content-stretch {
		align-content: stretch !important;
	}
	.flex-sm-1 {
		flex: 1 !important;
	}
	.flex-sm-auto {
		flex: auto !important;
	}
	.flex-sm-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-sm-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-sm-self-auto {
		align-self: auto !important;
	}
	.flex-sm-self-start {
		align-self: flex-start !important;
	}
	.flex-sm-self-end {
		align-self: flex-end !important;
	}
	.flex-sm-self-center {
		align-self: center !important;
	}
	.flex-sm-self-baseline {
		align-self: baseline !important;
	}
	.flex-sm-self-stretch {
		align-self: stretch !important;
	}
	.flex-sm-order-1 {
		order: 1 !important;
	}
	.flex-sm-order-2 {
		order: 2 !important;
	}
	.flex-sm-order-none {
		order: inherit !important;
	}
}
@media (min-width: 768px) {
	.flex-md-row {
		flex-direction: row !important;
	}
	.flex-md-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-md-column {
		flex-direction: column !important;
	}
	.flex-md-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-md-wrap {
		flex-wrap: wrap !important;
	}
	.flex-md-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-md-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.flex-md-justify-start {
		justify-content: flex-start !important;
	}
	.flex-md-justify-end {
		justify-content: flex-end !important;
	}
	.flex-md-justify-center {
		justify-content: center !important;
	}
	.flex-md-justify-between {
		justify-content: space-between !important;
	}
	.flex-md-justify-around {
		justify-content: space-around !important;
	}
	.flex-md-items-start {
		align-items: flex-start !important;
	}
	.flex-md-items-end {
		align-items: flex-end !important;
	}
	.flex-md-items-center {
		align-items: center !important;
	}
	.flex-md-items-baseline {
		align-items: baseline !important;
	}
	.flex-md-items-stretch {
		align-items: stretch !important;
	}
	.flex-md-content-start {
		align-content: flex-start !important;
	}
	.flex-md-content-end {
		align-content: flex-end !important;
	}
	.flex-md-content-center {
		align-content: center !important;
	}
	.flex-md-content-between {
		align-content: space-between !important;
	}
	.flex-md-content-around {
		align-content: space-around !important;
	}
	.flex-md-content-stretch {
		align-content: stretch !important;
	}
	.flex-md-1 {
		flex: 1 !important;
	}
	.flex-md-auto {
		flex: auto !important;
	}
	.flex-md-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-md-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-md-self-auto {
		align-self: auto !important;
	}
	.flex-md-self-start {
		align-self: flex-start !important;
	}
	.flex-md-self-end {
		align-self: flex-end !important;
	}
	.flex-md-self-center {
		align-self: center !important;
	}
	.flex-md-self-baseline {
		align-self: baseline !important;
	}
	.flex-md-self-stretch {
		align-self: stretch !important;
	}
	.flex-md-order-1 {
		order: 1 !important;
	}
	.flex-md-order-2 {
		order: 2 !important;
	}
	.flex-md-order-none {
		order: inherit !important;
	}
}
@media (min-width: 1012px) {
	.flex-lg-row {
		flex-direction: row !important;
	}
	.flex-lg-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-lg-column {
		flex-direction: column !important;
	}
	.flex-lg-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-lg-wrap {
		flex-wrap: wrap !important;
	}
	.flex-lg-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-lg-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.flex-lg-justify-start {
		justify-content: flex-start !important;
	}
	.flex-lg-justify-end {
		justify-content: flex-end !important;
	}
	.flex-lg-justify-center {
		justify-content: center !important;
	}
	.flex-lg-justify-between {
		justify-content: space-between !important;
	}
	.flex-lg-justify-around {
		justify-content: space-around !important;
	}
	.flex-lg-items-start {
		align-items: flex-start !important;
	}
	.flex-lg-items-end {
		align-items: flex-end !important;
	}
	.flex-lg-items-center {
		align-items: center !important;
	}
	.flex-lg-items-baseline {
		align-items: baseline !important;
	}
	.flex-lg-items-stretch {
		align-items: stretch !important;
	}
	.flex-lg-content-start {
		align-content: flex-start !important;
	}
	.flex-lg-content-end {
		align-content: flex-end !important;
	}
	.flex-lg-content-center {
		align-content: center !important;
	}
	.flex-lg-content-between {
		align-content: space-between !important;
	}
	.flex-lg-content-around {
		align-content: space-around !important;
	}
	.flex-lg-content-stretch {
		align-content: stretch !important;
	}
	.flex-lg-1 {
		flex: 1 !important;
	}
	.flex-lg-auto {
		flex: auto !important;
	}
	.flex-lg-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-lg-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-lg-self-auto {
		align-self: auto !important;
	}
	.flex-lg-self-start {
		align-self: flex-start !important;
	}
	.flex-lg-self-end {
		align-self: flex-end !important;
	}
	.flex-lg-self-center {
		align-self: center !important;
	}
	.flex-lg-self-baseline {
		align-self: baseline !important;
	}
	.flex-lg-self-stretch {
		align-self: stretch !important;
	}
	.flex-lg-order-1 {
		order: 1 !important;
	}
	.flex-lg-order-2 {
		order: 2 !important;
	}
	.flex-lg-order-none {
		order: inherit !important;
	}
}
@media (min-width: 1280px) {
	.flex-xl-row {
		flex-direction: row !important;
	}
	.flex-xl-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-xl-column {
		flex-direction: column !important;
	}
	.flex-xl-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-xl-wrap {
		flex-wrap: wrap !important;
	}
	.flex-xl-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-xl-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.flex-xl-justify-start {
		justify-content: flex-start !important;
	}
	.flex-xl-justify-end {
		justify-content: flex-end !important;
	}
	.flex-xl-justify-center {
		justify-content: center !important;
	}
	.flex-xl-justify-between {
		justify-content: space-between !important;
	}
	.flex-xl-justify-around {
		justify-content: space-around !important;
	}
	.flex-xl-items-start {
		align-items: flex-start !important;
	}
	.flex-xl-items-end {
		align-items: flex-end !important;
	}
	.flex-xl-items-center {
		align-items: center !important;
	}
	.flex-xl-items-baseline {
		align-items: baseline !important;
	}
	.flex-xl-items-stretch {
		align-items: stretch !important;
	}
	.flex-xl-content-start {
		align-content: flex-start !important;
	}
	.flex-xl-content-end {
		align-content: flex-end !important;
	}
	.flex-xl-content-center {
		align-content: center !important;
	}
	.flex-xl-content-between {
		align-content: space-between !important;
	}
	.flex-xl-content-around {
		align-content: space-around !important;
	}
	.flex-xl-content-stretch {
		align-content: stretch !important;
	}
	.flex-xl-1 {
		flex: 1 !important;
	}
	.flex-xl-auto {
		flex: auto !important;
	}
	.flex-xl-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-xl-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-xl-self-auto {
		align-self: auto !important;
	}
	.flex-xl-self-start {
		align-self: flex-start !important;
	}
	.flex-xl-self-end {
		align-self: flex-end !important;
	}
	.flex-xl-self-center {
		align-self: center !important;
	}
	.flex-xl-self-baseline {
		align-self: baseline !important;
	}
	.flex-xl-self-stretch {
		align-self: stretch !important;
	}
	.flex-xl-order-1 {
		order: 1 !important;
	}
	.flex-xl-order-2 {
		order: 2 !important;
	}
	.flex-xl-order-none {
		order: inherit !important;
	}
}
.position-static {
	position: static !important;
}
.position-relative {
	position: relative !important;
}
.position-absolute {
	position: absolute !important;
}
.position-fixed {
	position: fixed !important;
}
.position-sticky {
	position: sticky !important;
}
@media (min-width: 544px) {
	.position-sm-static {
		position: static !important;
	}
	.position-sm-relative {
		position: relative !important;
	}
	.position-sm-absolute {
		position: absolute !important;
	}
	.position-sm-fixed {
		position: fixed !important;
	}
	.position-sm-sticky {
		position: sticky !important;
	}
}
@media (min-width: 768px) {
	.position-md-static {
		position: static !important;
	}
	.position-md-relative {
		position: relative !important;
	}
	.position-md-absolute {
		position: absolute !important;
	}
	.position-md-fixed {
		position: fixed !important;
	}
	.position-md-sticky {
		position: sticky !important;
	}
}
@media (min-width: 1012px) {
	.position-lg-static {
		position: static !important;
	}
	.position-lg-relative {
		position: relative !important;
	}
	.position-lg-absolute {
		position: absolute !important;
	}
	.position-lg-fixed {
		position: fixed !important;
	}
	.position-lg-sticky {
		position: sticky !important;
	}
}
@media (min-width: 1280px) {
	.position-xl-static {
		position: static !important;
	}
	.position-xl-relative {
		position: relative !important;
	}
	.position-xl-absolute {
		position: absolute !important;
	}
	.position-xl-fixed {
		position: fixed !important;
	}
	.position-xl-sticky {
		position: sticky !important;
	}
}
.top-0 {
	top: 0 !important;
}
.right-0 {
	right: 0 !important;
}
.bottom-0 {
	bottom: 0 !important;
}
.left-0 {
	left: 0 !important;
}
.top-auto {
	top: auto !important;
}
.right-auto {
	right: auto !important;
}
.bottom-auto {
	bottom: auto !important;
}
.left-auto {
	left: auto !important;
}
@media (min-width: 544px) {
	.top-sm-0 {
		top: 0 !important;
	}
	.right-sm-0 {
		right: 0 !important;
	}
	.bottom-sm-0 {
		bottom: 0 !important;
	}
	.left-sm-0 {
		left: 0 !important;
	}
	.top-sm-auto {
		top: auto !important;
	}
	.right-sm-auto {
		right: auto !important;
	}
	.bottom-sm-auto {
		bottom: auto !important;
	}
	.left-sm-auto {
		left: auto !important;
	}
}
@media (min-width: 768px) {
	.top-md-0 {
		top: 0 !important;
	}
	.right-md-0 {
		right: 0 !important;
	}
	.bottom-md-0 {
		bottom: 0 !important;
	}
	.left-md-0 {
		left: 0 !important;
	}
	.top-md-auto {
		top: auto !important;
	}
	.right-md-auto {
		right: auto !important;
	}
	.bottom-md-auto {
		bottom: auto !important;
	}
	.left-md-auto {
		left: auto !important;
	}
}
@media (min-width: 1012px) {
	.top-lg-0 {
		top: 0 !important;
	}
	.right-lg-0 {
		right: 0 !important;
	}
	.bottom-lg-0 {
		bottom: 0 !important;
	}
	.left-lg-0 {
		left: 0 !important;
	}
	.top-lg-auto {
		top: auto !important;
	}
	.right-lg-auto {
		right: auto !important;
	}
	.bottom-lg-auto {
		bottom: auto !important;
	}
	.left-lg-auto {
		left: auto !important;
	}
}
@media (min-width: 1280px) {
	.top-xl-0 {
		top: 0 !important;
	}
	.right-xl-0 {
		right: 0 !important;
	}
	.bottom-xl-0 {
		bottom: 0 !important;
	}
	.left-xl-0 {
		left: 0 !important;
	}
	.top-xl-auto {
		top: auto !important;
	}
	.right-xl-auto {
		right: auto !important;
	}
	.bottom-xl-auto {
		bottom: auto !important;
	}
	.left-xl-auto {
		left: auto !important;
	}
}
.v-align-middle {
	vertical-align: middle !important;
}
.v-align-top {
	vertical-align: top !important;
}
.v-align-bottom {
	vertical-align: bottom !important;
}
.v-align-text-top {
	vertical-align: text-top !important;
}
.v-align-text-bottom {
	vertical-align: text-bottom !important;
}
.v-align-baseline {
	vertical-align: baseline !important;
}
.overflow-visible {
	overflow: visible !important;
}
.overflow-x-visible {
	overflow-x: visible !important;
}
.overflow-y-visible {
	overflow-y: visible !important;
}
.overflow-hidden {
	overflow: hidden !important;
}
.overflow-x-hidden {
	overflow-x: hidden !important;
}
.overflow-y-hidden {
	overflow-y: hidden !important;
}
.overflow-auto {
	overflow: auto !important;
}
.overflow-x-auto {
	overflow-x: auto !important;
}
.overflow-y-auto {
	overflow-y: auto !important;
}
.overflow-scroll {
	overflow: scroll !important;
}
.overflow-x-scroll {
	overflow-x: scroll !important;
}
.overflow-y-scroll {
	overflow-y: scroll !important;
}
@media (min-width: 544px) {
	.overflow-sm-visible {
		overflow: visible !important;
	}
	.overflow-sm-x-visible {
		overflow-x: visible !important;
	}
	.overflow-sm-y-visible {
		overflow-y: visible !important;
	}
	.overflow-sm-hidden {
		overflow: hidden !important;
	}
	.overflow-sm-x-hidden {
		overflow-x: hidden !important;
	}
	.overflow-sm-y-hidden {
		overflow-y: hidden !important;
	}
	.overflow-sm-auto {
		overflow: auto !important;
	}
	.overflow-sm-x-auto {
		overflow-x: auto !important;
	}
	.overflow-sm-y-auto {
		overflow-y: auto !important;
	}
	.overflow-sm-scroll {
		overflow: scroll !important;
	}
	.overflow-sm-x-scroll {
		overflow-x: scroll !important;
	}
	.overflow-sm-y-scroll {
		overflow-y: scroll !important;
	}
}
@media (min-width: 768px) {
	.overflow-md-visible {
		overflow: visible !important;
	}
	.overflow-md-x-visible {
		overflow-x: visible !important;
	}
	.overflow-md-y-visible {
		overflow-y: visible !important;
	}
	.overflow-md-hidden {
		overflow: hidden !important;
	}
	.overflow-md-x-hidden {
		overflow-x: hidden !important;
	}
	.overflow-md-y-hidden {
		overflow-y: hidden !important;
	}
	.overflow-md-auto {
		overflow: auto !important;
	}
	.overflow-md-x-auto {
		overflow-x: auto !important;
	}
	.overflow-md-y-auto {
		overflow-y: auto !important;
	}
	.overflow-md-scroll {
		overflow: scroll !important;
	}
	.overflow-md-x-scroll {
		overflow-x: scroll !important;
	}
	.overflow-md-y-scroll {
		overflow-y: scroll !important;
	}
}
@media (min-width: 1012px) {
	.overflow-lg-visible {
		overflow: visible !important;
	}
	.overflow-lg-x-visible {
		overflow-x: visible !important;
	}
	.overflow-lg-y-visible {
		overflow-y: visible !important;
	}
	.overflow-lg-hidden {
		overflow: hidden !important;
	}
	.overflow-lg-x-hidden {
		overflow-x: hidden !important;
	}
	.overflow-lg-y-hidden {
		overflow-y: hidden !important;
	}
	.overflow-lg-auto {
		overflow: auto !important;
	}
	.overflow-lg-x-auto {
		overflow-x: auto !important;
	}
	.overflow-lg-y-auto {
		overflow-y: auto !important;
	}
	.overflow-lg-scroll {
		overflow: scroll !important;
	}
	.overflow-lg-x-scroll {
		overflow-x: scroll !important;
	}
	.overflow-lg-y-scroll {
		overflow-y: scroll !important;
	}
}
@media (min-width: 1280px) {
	.overflow-xl-visible {
		overflow: visible !important;
	}
	.overflow-xl-x-visible {
		overflow-x: visible !important;
	}
	.overflow-xl-y-visible {
		overflow-y: visible !important;
	}
	.overflow-xl-hidden {
		overflow: hidden !important;
	}
	.overflow-xl-x-hidden {
		overflow-x: hidden !important;
	}
	.overflow-xl-y-hidden {
		overflow-y: hidden !important;
	}
	.overflow-xl-auto {
		overflow: auto !important;
	}
	.overflow-xl-x-auto {
		overflow-x: auto !important;
	}
	.overflow-xl-y-auto {
		overflow-y: auto !important;
	}
	.overflow-xl-scroll {
		overflow: scroll !important;
	}
	.overflow-xl-x-scroll {
		overflow-x: scroll !important;
	}
	.overflow-xl-y-scroll {
		overflow-y: scroll !important;
	}
}
.clearfix::before {
	display: table;
	content: "";
}
.clearfix::after {
	display: table;
	clear: both;
	content: "";
}
.float-left {
	float: left !important;
}
.float-right {
	float: right !important;
}
.float-none {
	float: none !important;
}
@media (min-width: 544px) {
	.float-sm-left {
		float: left !important;
	}
	.float-sm-right {
		float: right !important;
	}
	.float-sm-none {
		float: none !important;
	}
}
@media (min-width: 768px) {
	.float-md-left {
		float: left !important;
	}
	.float-md-right {
		float: right !important;
	}
	.float-md-none {
		float: none !important;
	}
}
@media (min-width: 1012px) {
	.float-lg-left {
		float: left !important;
	}
	.float-lg-right {
		float: right !important;
	}
	.float-lg-none {
		float: none !important;
	}
}
@media (min-width: 1280px) {
	.float-xl-left {
		float: left !important;
	}
	.float-xl-right {
		float: right !important;
	}
	.float-xl-none {
		float: none !important;
	}
}
.width-fit {
	max-width: 100% !important;
}
.width-full {
	width: 100% !important;
}
.height-fit {
	max-height: 100% !important;
}
.height-full {
	height: 100% !important;
}
.min-width-0 {
	min-width: 0 !important;
}
.width-auto {
	width: auto !important;
}
.direction-rtl {
	direction: rtl !important;
}
.direction-ltr {
	direction: ltr !important;
}
@media (min-width: 544px) {
	.width-sm-auto {
		width: auto !important;
	}
	.direction-sm-rtl {
		direction: rtl !important;
	}
	.direction-sm-ltr {
		direction: ltr !important;
	}
}
@media (min-width: 768px) {
	.width-md-auto {
		width: auto !important;
	}
	.direction-md-rtl {
		direction: rtl !important;
	}
	.direction-md-ltr {
		direction: ltr !important;
	}
}
@media (min-width: 1012px) {
	.width-lg-auto {
		width: auto !important;
	}
	.direction-lg-rtl {
		direction: rtl !important;
	}
	.direction-lg-ltr {
		direction: ltr !important;
	}
}
@media (min-width: 1280px) {
	.width-xl-auto {
		width: auto !important;
	}
	.direction-xl-rtl {
		direction: rtl !important;
	}
	.direction-xl-ltr {
		direction: ltr !important;
	}
}
.m-0 {
	margin: 0 !important;
}
.mt-0 {
	margin-top: 0 !important;
}
.mr-0 {
	margin-right: 0 !important;
}
.mb-0 {
	margin-bottom: 0 !important;
}
.ml-0 {
	margin-left: 0 !important;
}
.mx-0 {
	margin-right: 0 !important;
	margin-left: 0 !important;
}
.my-0 {
	margin-top: 0 !important;
	margin-bottom: 0 !important;
}
.m-1 {
	margin: 4px !important;
}
.mt-1 {
	margin-top: 4px !important;
}
.mr-1 {
	margin-right: 4px !important;
}
.mb-1 {
	margin-bottom: 4px !important;
}
.ml-1 {
	margin-left: 4px !important;
}
.mt-n1 {
	margin-top: -4px !important;
}
.mr-n1 {
	margin-right: -4px !important;
}
.mb-n1 {
	margin-bottom: -4px !important;
}
.ml-n1 {
	margin-left: -4px !important;
}
.mx-1 {
	margin-right: 4px !important;
	margin-left: 4px !important;
}
.my-1 {
	margin-top: 4px !important;
	margin-bottom: 4px !important;
}
.m-2 {
	margin: 8px !important;
}
.mt-2 {
	margin-top: 8px !important;
}
.mr-2 {
	margin-right: 8px !important;
}
.mb-2 {
	margin-bottom: 8px !important;
}
.ml-2 {
	margin-left: 8px !important;
}
.mt-n2 {
	margin-top: -8px !important;
}
.mr-n2 {
	margin-right: -8px !important;
}
.mb-n2 {
	margin-bottom: -8px !important;
}
.ml-n2 {
	margin-left: -8px !important;
}
.mx-2 {
	margin-right: 8px !important;
	margin-left: 8px !important;
}
.my-2 {
	margin-top: 8px !important;
	margin-bottom: 8px !important;
}
.m-3 {
	margin: 16px !important;
}
.mt-3 {
	margin-top: 16px !important;
}
.mr-3 {
	margin-right: 16px !important;
}
.mb-3 {
	margin-bottom: 16px !important;
}
.ml-3 {
	margin-left: 16px !important;
}
.mt-n3 {
	margin-top: -16px !important;
}
.mr-n3 {
	margin-right: -16px !important;
}
.mb-n3 {
	margin-bottom: -16px !important;
}
.ml-n3 {
	margin-left: -16px !important;
}
.mx-3 {
	margin-right: 16px !important;
	margin-left: 16px !important;
}
.my-3 {
	margin-top: 16px !important;
	margin-bottom: 16px !important;
}
.m-4 {
	margin: 24px !important;
}
.mt-4 {
	margin-top: 24px !important;
}
.mr-4 {
	margin-right: 24px !important;
}
.mb-4 {
	margin-bottom: 24px !important;
}
.ml-4 {
	margin-left: 24px !important;
}
.mt-n4 {
	margin-top: -24px !important;
}
.mr-n4 {
	margin-right: -24px !important;
}
.mb-n4 {
	margin-bottom: -24px !important;
}
.ml-n4 {
	margin-left: -24px !important;
}
.mx-4 {
	margin-right: 24px !important;
	margin-left: 24px !important;
}
.my-4 {
	margin-top: 24px !important;
	margin-bottom: 24px !important;
}
.m-5 {
	margin: 32px !important;
}
.mt-5 {
	margin-top: 32px !important;
}
.mr-5 {
	margin-right: 32px !important;
}
.mb-5 {
	margin-bottom: 32px !important;
}
.ml-5 {
	margin-left: 32px !important;
}
.mt-n5 {
	margin-top: -32px !important;
}
.mr-n5 {
	margin-right: -32px !important;
}
.mb-n5 {
	margin-bottom: -32px !important;
}
.ml-n5 {
	margin-left: -32px !important;
}
.mx-5 {
	margin-right: 32px !important;
	margin-left: 32px !important;
}
.my-5 {
	margin-top: 32px !important;
	margin-bottom: 32px !important;
}
.m-6 {
	margin: 40px !important;
}
.mt-6 {
	margin-top: 40px !important;
}
.mr-6 {
	margin-right: 40px !important;
}
.mb-6 {
	margin-bottom: 40px !important;
}
.ml-6 {
	margin-left: 40px !important;
}
.mt-n6 {
	margin-top: -40px !important;
}
.mr-n6 {
	margin-right: -40px !important;
}
.mb-n6 {
	margin-bottom: -40px !important;
}
.ml-n6 {
	margin-left: -40px !important;
}
.mx-6 {
	margin-right: 40px !important;
	margin-left: 40px !important;
}
.my-6 {
	margin-top: 40px !important;
	margin-bottom: 40px !important;
}
.mx-auto {
	margin-right: auto !important;
	margin-left: auto !important;
}
@media (min-width: 544px) {
	.m-sm-0 {
		margin: 0 !important;
	}
	.mt-sm-0 {
		margin-top: 0 !important;
	}
	.mr-sm-0 {
		margin-right: 0 !important;
	}
	.mb-sm-0 {
		margin-bottom: 0 !important;
	}
	.ml-sm-0 {
		margin-left: 0 !important;
	}
	.mx-sm-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.my-sm-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.m-sm-1 {
		margin: 4px !important;
	}
	.mt-sm-1 {
		margin-top: 4px !important;
	}
	.mr-sm-1 {
		margin-right: 4px !important;
	}
	.mb-sm-1 {
		margin-bottom: 4px !important;
	}
	.ml-sm-1 {
		margin-left: 4px !important;
	}
	.mt-sm-n1 {
		margin-top: -4px !important;
	}
	.mr-sm-n1 {
		margin-right: -4px !important;
	}
	.mb-sm-n1 {
		margin-bottom: -4px !important;
	}
	.ml-sm-n1 {
		margin-left: -4px !important;
	}
	.mx-sm-1 {
		margin-right: 4px !important;
		margin-left: 4px !important;
	}
	.my-sm-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.m-sm-2 {
		margin: 8px !important;
	}
	.mt-sm-2 {
		margin-top: 8px !important;
	}
	.mr-sm-2 {
		margin-right: 8px !important;
	}
	.mb-sm-2 {
		margin-bottom: 8px !important;
	}
	.ml-sm-2 {
		margin-left: 8px !important;
	}
	.mt-sm-n2 {
		margin-top: -8px !important;
	}
	.mr-sm-n2 {
		margin-right: -8px !important;
	}
	.mb-sm-n2 {
		margin-bottom: -8px !important;
	}
	.ml-sm-n2 {
		margin-left: -8px !important;
	}
	.mx-sm-2 {
		margin-right: 8px !important;
		margin-left: 8px !important;
	}
	.my-sm-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.m-sm-3 {
		margin: 16px !important;
	}
	.mt-sm-3 {
		margin-top: 16px !important;
	}
	.mr-sm-3 {
		margin-right: 16px !important;
	}
	.mb-sm-3 {
		margin-bottom: 16px !important;
	}
	.ml-sm-3 {
		margin-left: 16px !important;
	}
	.mt-sm-n3 {
		margin-top: -16px !important;
	}
	.mr-sm-n3 {
		margin-right: -16px !important;
	}
	.mb-sm-n3 {
		margin-bottom: -16px !important;
	}
	.ml-sm-n3 {
		margin-left: -16px !important;
	}
	.mx-sm-3 {
		margin-right: 16px !important;
		margin-left: 16px !important;
	}
	.my-sm-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.m-sm-4 {
		margin: 24px !important;
	}
	.mt-sm-4 {
		margin-top: 24px !important;
	}
	.mr-sm-4 {
		margin-right: 24px !important;
	}
	.mb-sm-4 {
		margin-bottom: 24px !important;
	}
	.ml-sm-4 {
		margin-left: 24px !important;
	}
	.mt-sm-n4 {
		margin-top: -24px !important;
	}
	.mr-sm-n4 {
		margin-right: -24px !important;
	}
	.mb-sm-n4 {
		margin-bottom: -24px !important;
	}
	.ml-sm-n4 {
		margin-left: -24px !important;
	}
	.mx-sm-4 {
		margin-right: 24px !important;
		margin-left: 24px !important;
	}
	.my-sm-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.m-sm-5 {
		margin: 32px !important;
	}
	.mt-sm-5 {
		margin-top: 32px !important;
	}
	.mr-sm-5 {
		margin-right: 32px !important;
	}
	.mb-sm-5 {
		margin-bottom: 32px !important;
	}
	.ml-sm-5 {
		margin-left: 32px !important;
	}
	.mt-sm-n5 {
		margin-top: -32px !important;
	}
	.mr-sm-n5 {
		margin-right: -32px !important;
	}
	.mb-sm-n5 {
		margin-bottom: -32px !important;
	}
	.ml-sm-n5 {
		margin-left: -32px !important;
	}
	.mx-sm-5 {
		margin-right: 32px !important;
		margin-left: 32px !important;
	}
	.my-sm-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.m-sm-6 {
		margin: 40px !important;
	}
	.mt-sm-6 {
		margin-top: 40px !important;
	}
	.mr-sm-6 {
		margin-right: 40px !important;
	}
	.mb-sm-6 {
		margin-bottom: 40px !important;
	}
	.ml-sm-6 {
		margin-left: 40px !important;
	}
	.mt-sm-n6 {
		margin-top: -40px !important;
	}
	.mr-sm-n6 {
		margin-right: -40px !important;
	}
	.mb-sm-n6 {
		margin-bottom: -40px !important;
	}
	.ml-sm-n6 {
		margin-left: -40px !important;
	}
	.mx-sm-6 {
		margin-right: 40px !important;
		margin-left: 40px !important;
	}
	.my-sm-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mx-sm-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
}
@media (min-width: 768px) {
	.m-md-0 {
		margin: 0 !important;
	}
	.mt-md-0 {
		margin-top: 0 !important;
	}
	.mr-md-0 {
		margin-right: 0 !important;
	}
	.mb-md-0 {
		margin-bottom: 0 !important;
	}
	.ml-md-0 {
		margin-left: 0 !important;
	}
	.mx-md-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.my-md-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.m-md-1 {
		margin: 4px !important;
	}
	.mt-md-1 {
		margin-top: 4px !important;
	}
	.mr-md-1 {
		margin-right: 4px !important;
	}
	.mb-md-1 {
		margin-bottom: 4px !important;
	}
	.ml-md-1 {
		margin-left: 4px !important;
	}
	.mt-md-n1 {
		margin-top: -4px !important;
	}
	.mr-md-n1 {
		margin-right: -4px !important;
	}
	.mb-md-n1 {
		margin-bottom: -4px !important;
	}
	.ml-md-n1 {
		margin-left: -4px !important;
	}
	.mx-md-1 {
		margin-right: 4px !important;
		margin-left: 4px !important;
	}
	.my-md-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.m-md-2 {
		margin: 8px !important;
	}
	.mt-md-2 {
		margin-top: 8px !important;
	}
	.mr-md-2 {
		margin-right: 8px !important;
	}
	.mb-md-2 {
		margin-bottom: 8px !important;
	}
	.ml-md-2 {
		margin-left: 8px !important;
	}
	.mt-md-n2 {
		margin-top: -8px !important;
	}
	.mr-md-n2 {
		margin-right: -8px !important;
	}
	.mb-md-n2 {
		margin-bottom: -8px !important;
	}
	.ml-md-n2 {
		margin-left: -8px !important;
	}
	.mx-md-2 {
		margin-right: 8px !important;
		margin-left: 8px !important;
	}
	.my-md-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.m-md-3 {
		margin: 16px !important;
	}
	.mt-md-3 {
		margin-top: 16px !important;
	}
	.mr-md-3 {
		margin-right: 16px !important;
	}
	.mb-md-3 {
		margin-bottom: 16px !important;
	}
	.ml-md-3 {
		margin-left: 16px !important;
	}
	.mt-md-n3 {
		margin-top: -16px !important;
	}
	.mr-md-n3 {
		margin-right: -16px !important;
	}
	.mb-md-n3 {
		margin-bottom: -16px !important;
	}
	.ml-md-n3 {
		margin-left: -16px !important;
	}
	.mx-md-3 {
		margin-right: 16px !important;
		margin-left: 16px !important;
	}
	.my-md-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.m-md-4 {
		margin: 24px !important;
	}
	.mt-md-4 {
		margin-top: 24px !important;
	}
	.mr-md-4 {
		margin-right: 24px !important;
	}
	.mb-md-4 {
		margin-bottom: 24px !important;
	}
	.ml-md-4 {
		margin-left: 24px !important;
	}
	.mt-md-n4 {
		margin-top: -24px !important;
	}
	.mr-md-n4 {
		margin-right: -24px !important;
	}
	.mb-md-n4 {
		margin-bottom: -24px !important;
	}
	.ml-md-n4 {
		margin-left: -24px !important;
	}
	.mx-md-4 {
		margin-right: 24px !important;
		margin-left: 24px !important;
	}
	.my-md-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.m-md-5 {
		margin: 32px !important;
	}
	.mt-md-5 {
		margin-top: 32px !important;
	}
	.mr-md-5 {
		margin-right: 32px !important;
	}
	.mb-md-5 {
		margin-bottom: 32px !important;
	}
	.ml-md-5 {
		margin-left: 32px !important;
	}
	.mt-md-n5 {
		margin-top: -32px !important;
	}
	.mr-md-n5 {
		margin-right: -32px !important;
	}
	.mb-md-n5 {
		margin-bottom: -32px !important;
	}
	.ml-md-n5 {
		margin-left: -32px !important;
	}
	.mx-md-5 {
		margin-right: 32px !important;
		margin-left: 32px !important;
	}
	.my-md-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.m-md-6 {
		margin: 40px !important;
	}
	.mt-md-6 {
		margin-top: 40px !important;
	}
	.mr-md-6 {
		margin-right: 40px !important;
	}
	.mb-md-6 {
		margin-bottom: 40px !important;
	}
	.ml-md-6 {
		margin-left: 40px !important;
	}
	.mt-md-n6 {
		margin-top: -40px !important;
	}
	.mr-md-n6 {
		margin-right: -40px !important;
	}
	.mb-md-n6 {
		margin-bottom: -40px !important;
	}
	.ml-md-n6 {
		margin-left: -40px !important;
	}
	.mx-md-6 {
		margin-right: 40px !important;
		margin-left: 40px !important;
	}
	.my-md-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mx-md-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
}
@media (min-width: 1012px) {
	.m-lg-0 {
		margin: 0 !important;
	}
	.mt-lg-0 {
		margin-top: 0 !important;
	}
	.mr-lg-0 {
		margin-right: 0 !important;
	}
	.mb-lg-0 {
		margin-bottom: 0 !important;
	}
	.ml-lg-0 {
		margin-left: 0 !important;
	}
	.mx-lg-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.my-lg-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.m-lg-1 {
		margin: 4px !important;
	}
	.mt-lg-1 {
		margin-top: 4px !important;
	}
	.mr-lg-1 {
		margin-right: 4px !important;
	}
	.mb-lg-1 {
		margin-bottom: 4px !important;
	}
	.ml-lg-1 {
		margin-left: 4px !important;
	}
	.mt-lg-n1 {
		margin-top: -4px !important;
	}
	.mr-lg-n1 {
		margin-right: -4px !important;
	}
	.mb-lg-n1 {
		margin-bottom: -4px !important;
	}
	.ml-lg-n1 {
		margin-left: -4px !important;
	}
	.mx-lg-1 {
		margin-right: 4px !important;
		margin-left: 4px !important;
	}
	.my-lg-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.m-lg-2 {
		margin: 8px !important;
	}
	.mt-lg-2 {
		margin-top: 8px !important;
	}
	.mr-lg-2 {
		margin-right: 8px !important;
	}
	.mb-lg-2 {
		margin-bottom: 8px !important;
	}
	.ml-lg-2 {
		margin-left: 8px !important;
	}
	.mt-lg-n2 {
		margin-top: -8px !important;
	}
	.mr-lg-n2 {
		margin-right: -8px !important;
	}
	.mb-lg-n2 {
		margin-bottom: -8px !important;
	}
	.ml-lg-n2 {
		margin-left: -8px !important;
	}
	.mx-lg-2 {
		margin-right: 8px !important;
		margin-left: 8px !important;
	}
	.my-lg-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.m-lg-3 {
		margin: 16px !important;
	}
	.mt-lg-3 {
		margin-top: 16px !important;
	}
	.mr-lg-3 {
		margin-right: 16px !important;
	}
	.mb-lg-3 {
		margin-bottom: 16px !important;
	}
	.ml-lg-3 {
		margin-left: 16px !important;
	}
	.mt-lg-n3 {
		margin-top: -16px !important;
	}
	.mr-lg-n3 {
		margin-right: -16px !important;
	}
	.mb-lg-n3 {
		margin-bottom: -16px !important;
	}
	.ml-lg-n3 {
		margin-left: -16px !important;
	}
	.mx-lg-3 {
		margin-right: 16px !important;
		margin-left: 16px !important;
	}
	.my-lg-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.m-lg-4 {
		margin: 24px !important;
	}
	.mt-lg-4 {
		margin-top: 24px !important;
	}
	.mr-lg-4 {
		margin-right: 24px !important;
	}
	.mb-lg-4 {
		margin-bottom: 24px !important;
	}
	.ml-lg-4 {
		margin-left: 24px !important;
	}
	.mt-lg-n4 {
		margin-top: -24px !important;
	}
	.mr-lg-n4 {
		margin-right: -24px !important;
	}
	.mb-lg-n4 {
		margin-bottom: -24px !important;
	}
	.ml-lg-n4 {
		margin-left: -24px !important;
	}
	.mx-lg-4 {
		margin-right: 24px !important;
		margin-left: 24px !important;
	}
	.my-lg-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.m-lg-5 {
		margin: 32px !important;
	}
	.mt-lg-5 {
		margin-top: 32px !important;
	}
	.mr-lg-5 {
		margin-right: 32px !important;
	}
	.mb-lg-5 {
		margin-bottom: 32px !important;
	}
	.ml-lg-5 {
		margin-left: 32px !important;
	}
	.mt-lg-n5 {
		margin-top: -32px !important;
	}
	.mr-lg-n5 {
		margin-right: -32px !important;
	}
	.mb-lg-n5 {
		margin-bottom: -32px !important;
	}
	.ml-lg-n5 {
		margin-left: -32px !important;
	}
	.mx-lg-5 {
		margin-right: 32px !important;
		margin-left: 32px !important;
	}
	.my-lg-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.m-lg-6 {
		margin: 40px !important;
	}
	.mt-lg-6 {
		margin-top: 40px !important;
	}
	.mr-lg-6 {
		margin-right: 40px !important;
	}
	.mb-lg-6 {
		margin-bottom: 40px !important;
	}
	.ml-lg-6 {
		margin-left: 40px !important;
	}
	.mt-lg-n6 {
		margin-top: -40px !important;
	}
	.mr-lg-n6 {
		margin-right: -40px !important;
	}
	.mb-lg-n6 {
		margin-bottom: -40px !important;
	}
	.ml-lg-n6 {
		margin-left: -40px !important;
	}
	.mx-lg-6 {
		margin-right: 40px !important;
		margin-left: 40px !important;
	}
	.my-lg-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mx-lg-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
}
@media (min-width: 1280px) {
	.m-xl-0 {
		margin: 0 !important;
	}
	.mt-xl-0 {
		margin-top: 0 !important;
	}
	.mr-xl-0 {
		margin-right: 0 !important;
	}
	.mb-xl-0 {
		margin-bottom: 0 !important;
	}
	.ml-xl-0 {
		margin-left: 0 !important;
	}
	.mx-xl-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.my-xl-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.m-xl-1 {
		margin: 4px !important;
	}
	.mt-xl-1 {
		margin-top: 4px !important;
	}
	.mr-xl-1 {
		margin-right: 4px !important;
	}
	.mb-xl-1 {
		margin-bottom: 4px !important;
	}
	.ml-xl-1 {
		margin-left: 4px !important;
	}
	.mt-xl-n1 {
		margin-top: -4px !important;
	}
	.mr-xl-n1 {
		margin-right: -4px !important;
	}
	.mb-xl-n1 {
		margin-bottom: -4px !important;
	}
	.ml-xl-n1 {
		margin-left: -4px !important;
	}
	.mx-xl-1 {
		margin-right: 4px !important;
		margin-left: 4px !important;
	}
	.my-xl-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.m-xl-2 {
		margin: 8px !important;
	}
	.mt-xl-2 {
		margin-top: 8px !important;
	}
	.mr-xl-2 {
		margin-right: 8px !important;
	}
	.mb-xl-2 {
		margin-bottom: 8px !important;
	}
	.ml-xl-2 {
		margin-left: 8px !important;
	}
	.mt-xl-n2 {
		margin-top: -8px !important;
	}
	.mr-xl-n2 {
		margin-right: -8px !important;
	}
	.mb-xl-n2 {
		margin-bottom: -8px !important;
	}
	.ml-xl-n2 {
		margin-left: -8px !important;
	}
	.mx-xl-2 {
		margin-right: 8px !important;
		margin-left: 8px !important;
	}
	.my-xl-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.m-xl-3 {
		margin: 16px !important;
	}
	.mt-xl-3 {
		margin-top: 16px !important;
	}
	.mr-xl-3 {
		margin-right: 16px !important;
	}
	.mb-xl-3 {
		margin-bottom: 16px !important;
	}
	.ml-xl-3 {
		margin-left: 16px !important;
	}
	.mt-xl-n3 {
		margin-top: -16px !important;
	}
	.mr-xl-n3 {
		margin-right: -16px !important;
	}
	.mb-xl-n3 {
		margin-bottom: -16px !important;
	}
	.ml-xl-n3 {
		margin-left: -16px !important;
	}
	.mx-xl-3 {
		margin-right: 16px !important;
		margin-left: 16px !important;
	}
	.my-xl-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.m-xl-4 {
		margin: 24px !important;
	}
	.mt-xl-4 {
		margin-top: 24px !important;
	}
	.mr-xl-4 {
		margin-right: 24px !important;
	}
	.mb-xl-4 {
		margin-bottom: 24px !important;
	}
	.ml-xl-4 {
		margin-left: 24px !important;
	}
	.mt-xl-n4 {
		margin-top: -24px !important;
	}
	.mr-xl-n4 {
		margin-right: -24px !important;
	}
	.mb-xl-n4 {
		margin-bottom: -24px !important;
	}
	.ml-xl-n4 {
		margin-left: -24px !important;
	}
	.mx-xl-4 {
		margin-right: 24px !important;
		margin-left: 24px !important;
	}
	.my-xl-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.m-xl-5 {
		margin: 32px !important;
	}
	.mt-xl-5 {
		margin-top: 32px !important;
	}
	.mr-xl-5 {
		margin-right: 32px !important;
	}
	.mb-xl-5 {
		margin-bottom: 32px !important;
	}
	.ml-xl-5 {
		margin-left: 32px !important;
	}
	.mt-xl-n5 {
		margin-top: -32px !important;
	}
	.mr-xl-n5 {
		margin-right: -32px !important;
	}
	.mb-xl-n5 {
		margin-bottom: -32px !important;
	}
	.ml-xl-n5 {
		margin-left: -32px !important;
	}
	.mx-xl-5 {
		margin-right: 32px !important;
		margin-left: 32px !important;
	}
	.my-xl-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.m-xl-6 {
		margin: 40px !important;
	}
	.mt-xl-6 {
		margin-top: 40px !important;
	}
	.mr-xl-6 {
		margin-right: 40px !important;
	}
	.mb-xl-6 {
		margin-bottom: 40px !important;
	}
	.ml-xl-6 {
		margin-left: 40px !important;
	}
	.mt-xl-n6 {
		margin-top: -40px !important;
	}
	.mr-xl-n6 {
		margin-right: -40px !important;
	}
	.mb-xl-n6 {
		margin-bottom: -40px !important;
	}
	.ml-xl-n6 {
		margin-left: -40px !important;
	}
	.mx-xl-6 {
		margin-right: 40px !important;
		margin-left: 40px !important;
	}
	.my-xl-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mx-xl-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
}
.p-0 {
	padding: 0 !important;
}
.pt-0 {
	padding-top: 0 !important;
}
.pr-0 {
	padding-right: 0 !important;
}
.pb-0 {
	padding-bottom: 0 !important;
}
.pl-0 {
	padding-left: 0 !important;
}
.px-0 {
	padding-right: 0 !important;
	padding-left: 0 !important;
}
.py-0 {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
.p-1 {
	padding: 4px !important;
}
.pt-1 {
	padding-top: 4px !important;
}
.pr-1 {
	padding-right: 4px !important;
}
.pb-1 {
	padding-bottom: 4px !important;
}
.pl-1 {
	padding-left: 4px !important;
}
.px-1 {
	padding-right: 4px !important;
	padding-left: 4px !important;
}
.py-1 {
	padding-top: 4px !important;
	padding-bottom: 4px !important;
}
.p-2 {
	padding: 8px !important;
}
.pt-2 {
	padding-top: 8px !important;
}
.pr-2 {
	padding-right: 8px !important;
}
.pb-2 {
	padding-bottom: 8px !important;
}
.pl-2 {
	padding-left: 8px !important;
}
.px-2 {
	padding-right: 8px !important;
	padding-left: 8px !important;
}
.py-2 {
	padding-top: 8px !important;
	padding-bottom: 8px !important;
}
.p-3 {
	padding: 16px !important;
}
.pt-3 {
	padding-top: 16px !important;
}
.pr-3 {
	padding-right: 16px !important;
}
.pb-3 {
	padding-bottom: 16px !important;
}
.pl-3 {
	padding-left: 16px !important;
}
.px-3 {
	padding-right: 16px !important;
	padding-left: 16px !important;
}
.py-3 {
	padding-top: 16px !important;
	padding-bottom: 16px !important;
}
.p-4 {
	padding: 24px !important;
}
.pt-4 {
	padding-top: 24px !important;
}
.pr-4 {
	padding-right: 24px !important;
}
.pb-4 {
	padding-bottom: 24px !important;
}
.pl-4 {
	padding-left: 24px !important;
}
.px-4 {
	padding-right: 24px !important;
	padding-left: 24px !important;
}
.py-4 {
	padding-top: 24px !important;
	padding-bottom: 24px !important;
}
.p-5 {
	padding: 32px !important;
}
.pt-5 {
	padding-top: 32px !important;
}
.pr-5 {
	padding-right: 32px !important;
}
.pb-5 {
	padding-bottom: 32px !important;
}
.pl-5 {
	padding-left: 32px !important;
}
.px-5 {
	padding-right: 32px !important;
	padding-left: 32px !important;
}
.py-5 {
	padding-top: 32px !important;
	padding-bottom: 32px !important;
}
.p-6 {
	padding: 40px !important;
}
.pt-6 {
	padding-top: 40px !important;
}
.pr-6 {
	padding-right: 40px !important;
}
.pb-6 {
	padding-bottom: 40px !important;
}
.pl-6 {
	padding-left: 40px !important;
}
.px-6 {
	padding-right: 40px !important;
	padding-left: 40px !important;
}
.py-6 {
	padding-top: 40px !important;
	padding-bottom: 40px !important;
}
@media (min-width: 544px) {
	.p-sm-0 {
		padding: 0 !important;
	}
	.pt-sm-0 {
		padding-top: 0 !important;
	}
	.pr-sm-0 {
		padding-right: 0 !important;
	}
	.pb-sm-0 {
		padding-bottom: 0 !important;
	}
	.pl-sm-0 {
		padding-left: 0 !important;
	}
	.px-sm-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.py-sm-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-sm-1 {
		padding: 4px !important;
	}
	.pt-sm-1 {
		padding-top: 4px !important;
	}
	.pr-sm-1 {
		padding-right: 4px !important;
	}
	.pb-sm-1 {
		padding-bottom: 4px !important;
	}
	.pl-sm-1 {
		padding-left: 4px !important;
	}
	.px-sm-1 {
		padding-right: 4px !important;
		padding-left: 4px !important;
	}
	.py-sm-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-sm-2 {
		padding: 8px !important;
	}
	.pt-sm-2 {
		padding-top: 8px !important;
	}
	.pr-sm-2 {
		padding-right: 8px !important;
	}
	.pb-sm-2 {
		padding-bottom: 8px !important;
	}
	.pl-sm-2 {
		padding-left: 8px !important;
	}
	.px-sm-2 {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.py-sm-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-sm-3 {
		padding: 16px !important;
	}
	.pt-sm-3 {
		padding-top: 16px !important;
	}
	.pr-sm-3 {
		padding-right: 16px !important;
	}
	.pb-sm-3 {
		padding-bottom: 16px !important;
	}
	.pl-sm-3 {
		padding-left: 16px !important;
	}
	.px-sm-3 {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.py-sm-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-sm-4 {
		padding: 24px !important;
	}
	.pt-sm-4 {
		padding-top: 24px !important;
	}
	.pr-sm-4 {
		padding-right: 24px !important;
	}
	.pb-sm-4 {
		padding-bottom: 24px !important;
	}
	.pl-sm-4 {
		padding-left: 24px !important;
	}
	.px-sm-4 {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
	.py-sm-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-sm-5 {
		padding: 32px !important;
	}
	.pt-sm-5 {
		padding-top: 32px !important;
	}
	.pr-sm-5 {
		padding-right: 32px !important;
	}
	.pb-sm-5 {
		padding-bottom: 32px !important;
	}
	.pl-sm-5 {
		padding-left: 32px !important;
	}
	.px-sm-5 {
		padding-right: 32px !important;
		padding-left: 32px !important;
	}
	.py-sm-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-sm-6 {
		padding: 40px !important;
	}
	.pt-sm-6 {
		padding-top: 40px !important;
	}
	.pr-sm-6 {
		padding-right: 40px !important;
	}
	.pb-sm-6 {
		padding-bottom: 40px !important;
	}
	.pl-sm-6 {
		padding-left: 40px !important;
	}
	.px-sm-6 {
		padding-right: 40px !important;
		padding-left: 40px !important;
	}
	.py-sm-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
}
@media (min-width: 768px) {
	.p-md-0 {
		padding: 0 !important;
	}
	.pt-md-0 {
		padding-top: 0 !important;
	}
	.pr-md-0 {
		padding-right: 0 !important;
	}
	.pb-md-0 {
		padding-bottom: 0 !important;
	}
	.pl-md-0 {
		padding-left: 0 !important;
	}
	.px-md-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.py-md-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-md-1 {
		padding: 4px !important;
	}
	.pt-md-1 {
		padding-top: 4px !important;
	}
	.pr-md-1 {
		padding-right: 4px !important;
	}
	.pb-md-1 {
		padding-bottom: 4px !important;
	}
	.pl-md-1 {
		padding-left: 4px !important;
	}
	.px-md-1 {
		padding-right: 4px !important;
		padding-left: 4px !important;
	}
	.py-md-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-md-2 {
		padding: 8px !important;
	}
	.pt-md-2 {
		padding-top: 8px !important;
	}
	.pr-md-2 {
		padding-right: 8px !important;
	}
	.pb-md-2 {
		padding-bottom: 8px !important;
	}
	.pl-md-2 {
		padding-left: 8px !important;
	}
	.px-md-2 {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.py-md-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-md-3 {
		padding: 16px !important;
	}
	.pt-md-3 {
		padding-top: 16px !important;
	}
	.pr-md-3 {
		padding-right: 16px !important;
	}
	.pb-md-3 {
		padding-bottom: 16px !important;
	}
	.pl-md-3 {
		padding-left: 16px !important;
	}
	.px-md-3 {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.py-md-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-md-4 {
		padding: 24px !important;
	}
	.pt-md-4 {
		padding-top: 24px !important;
	}
	.pr-md-4 {
		padding-right: 24px !important;
	}
	.pb-md-4 {
		padding-bottom: 24px !important;
	}
	.pl-md-4 {
		padding-left: 24px !important;
	}
	.px-md-4 {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
	.py-md-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-md-5 {
		padding: 32px !important;
	}
	.pt-md-5 {
		padding-top: 32px !important;
	}
	.pr-md-5 {
		padding-right: 32px !important;
	}
	.pb-md-5 {
		padding-bottom: 32px !important;
	}
	.pl-md-5 {
		padding-left: 32px !important;
	}
	.px-md-5 {
		padding-right: 32px !important;
		padding-left: 32px !important;
	}
	.py-md-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-md-6 {
		padding: 40px !important;
	}
	.pt-md-6 {
		padding-top: 40px !important;
	}
	.pr-md-6 {
		padding-right: 40px !important;
	}
	.pb-md-6 {
		padding-bottom: 40px !important;
	}
	.pl-md-6 {
		padding-left: 40px !important;
	}
	.px-md-6 {
		padding-right: 40px !important;
		padding-left: 40px !important;
	}
	.py-md-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
}
@media (min-width: 1012px) {
	.p-lg-0 {
		padding: 0 !important;
	}
	.pt-lg-0 {
		padding-top: 0 !important;
	}
	.pr-lg-0 {
		padding-right: 0 !important;
	}
	.pb-lg-0 {
		padding-bottom: 0 !important;
	}
	.pl-lg-0 {
		padding-left: 0 !important;
	}
	.px-lg-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.py-lg-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-lg-1 {
		padding: 4px !important;
	}
	.pt-lg-1 {
		padding-top: 4px !important;
	}
	.pr-lg-1 {
		padding-right: 4px !important;
	}
	.pb-lg-1 {
		padding-bottom: 4px !important;
	}
	.pl-lg-1 {
		padding-left: 4px !important;
	}
	.px-lg-1 {
		padding-right: 4px !important;
		padding-left: 4px !important;
	}
	.py-lg-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-lg-2 {
		padding: 8px !important;
	}
	.pt-lg-2 {
		padding-top: 8px !important;
	}
	.pr-lg-2 {
		padding-right: 8px !important;
	}
	.pb-lg-2 {
		padding-bottom: 8px !important;
	}
	.pl-lg-2 {
		padding-left: 8px !important;
	}
	.px-lg-2 {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.py-lg-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-lg-3 {
		padding: 16px !important;
	}
	.pt-lg-3 {
		padding-top: 16px !important;
	}
	.pr-lg-3 {
		padding-right: 16px !important;
	}
	.pb-lg-3 {
		padding-bottom: 16px !important;
	}
	.pl-lg-3 {
		padding-left: 16px !important;
	}
	.px-lg-3 {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.py-lg-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-lg-4 {
		padding: 24px !important;
	}
	.pt-lg-4 {
		padding-top: 24px !important;
	}
	.pr-lg-4 {
		padding-right: 24px !important;
	}
	.pb-lg-4 {
		padding-bottom: 24px !important;
	}
	.pl-lg-4 {
		padding-left: 24px !important;
	}
	.px-lg-4 {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
	.py-lg-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-lg-5 {
		padding: 32px !important;
	}
	.pt-lg-5 {
		padding-top: 32px !important;
	}
	.pr-lg-5 {
		padding-right: 32px !important;
	}
	.pb-lg-5 {
		padding-bottom: 32px !important;
	}
	.pl-lg-5 {
		padding-left: 32px !important;
	}
	.px-lg-5 {
		padding-right: 32px !important;
		padding-left: 32px !important;
	}
	.py-lg-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-lg-6 {
		padding: 40px !important;
	}
	.pt-lg-6 {
		padding-top: 40px !important;
	}
	.pr-lg-6 {
		padding-right: 40px !important;
	}
	.pb-lg-6 {
		padding-bottom: 40px !important;
	}
	.pl-lg-6 {
		padding-left: 40px !important;
	}
	.px-lg-6 {
		padding-right: 40px !important;
		padding-left: 40px !important;
	}
	.py-lg-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
}
@media (min-width: 1280px) {
	.p-xl-0 {
		padding: 0 !important;
	}
	.pt-xl-0 {
		padding-top: 0 !important;
	}
	.pr-xl-0 {
		padding-right: 0 !important;
	}
	.pb-xl-0 {
		padding-bottom: 0 !important;
	}
	.pl-xl-0 {
		padding-left: 0 !important;
	}
	.px-xl-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.py-xl-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-xl-1 {
		padding: 4px !important;
	}
	.pt-xl-1 {
		padding-top: 4px !important;
	}
	.pr-xl-1 {
		padding-right: 4px !important;
	}
	.pb-xl-1 {
		padding-bottom: 4px !important;
	}
	.pl-xl-1 {
		padding-left: 4px !important;
	}
	.px-xl-1 {
		padding-right: 4px !important;
		padding-left: 4px !important;
	}
	.py-xl-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-xl-2 {
		padding: 8px !important;
	}
	.pt-xl-2 {
		padding-top: 8px !important;
	}
	.pr-xl-2 {
		padding-right: 8px !important;
	}
	.pb-xl-2 {
		padding-bottom: 8px !important;
	}
	.pl-xl-2 {
		padding-left: 8px !important;
	}
	.px-xl-2 {
		padding-right: 8px !important;
		padding-left: 8px !important;
	}
	.py-xl-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-xl-3 {
		padding: 16px !important;
	}
	.pt-xl-3 {
		padding-top: 16px !important;
	}
	.pr-xl-3 {
		padding-right: 16px !important;
	}
	.pb-xl-3 {
		padding-bottom: 16px !important;
	}
	.pl-xl-3 {
		padding-left: 16px !important;
	}
	.px-xl-3 {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
	.py-xl-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-xl-4 {
		padding: 24px !important;
	}
	.pt-xl-4 {
		padding-top: 24px !important;
	}
	.pr-xl-4 {
		padding-right: 24px !important;
	}
	.pb-xl-4 {
		padding-bottom: 24px !important;
	}
	.pl-xl-4 {
		padding-left: 24px !important;
	}
	.px-xl-4 {
		padding-right: 24px !important;
		padding-left: 24px !important;
	}
	.py-xl-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-xl-5 {
		padding: 32px !important;
	}
	.pt-xl-5 {
		padding-top: 32px !important;
	}
	.pr-xl-5 {
		padding-right: 32px !important;
	}
	.pb-xl-5 {
		padding-bottom: 32px !important;
	}
	.pl-xl-5 {
		padding-left: 32px !important;
	}
	.px-xl-5 {
		padding-right: 32px !important;
		padding-left: 32px !important;
	}
	.py-xl-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-xl-6 {
		padding: 40px !important;
	}
	.pt-xl-6 {
		padding-top: 40px !important;
	}
	.pr-xl-6 {
		padding-right: 40px !important;
	}
	.pb-xl-6 {
		padding-bottom: 40px !important;
	}
	.pl-xl-6 {
		padding-left: 40px !important;
	}
	.px-xl-6 {
		padding-right: 40px !important;
		padding-left: 40px !important;
	}
	.py-xl-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
}
.p-responsive {
	padding-right: 16px !important;
	padding-left: 16px !important;
}
@media (min-width: 544px) {
	.p-responsive {
		padding-right: 40px !important;
		padding-left: 40px !important;
	}
}
@media (min-width: 1012px) {
	.p-responsive {
		padding-right: 16px !important;
		padding-left: 16px !important;
	}
}
.h1 {
	font-size: 26px !important;
}
@media (min-width: 768px) {
	.h1 {
		font-size: 32px !important;
	}
}
.h2 {
	font-size: 22px !important;
}
@media (min-width: 768px) {
	.h2 {
		font-size: 24px !important;
	}
}
.h3 {
	font-size: 18px !important;
}
@media (min-width: 768px) {
	.h3 {
		font-size: 20px !important;
	}
}
.h4 {
	font-size: 16px !important;
}
.h5 {
	font-size: 14px !important;
}
.h6 {
	font-size: 12px !important;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
	font-weight: 600 !important;
}
.f1 {
	font-size: 26px !important;
}
@media (min-width: 768px) {
	.f1 {
		font-size: 32px !important;
	}
}
.f2 {
	font-size: 22px !important;
}
@media (min-width: 768px) {
	.f2 {
		font-size: 24px !important;
	}
}
.f3 {
	font-size: 18px !important;
}
@media (min-width: 768px) {
	.f3 {
		font-size: 20px !important;
	}
}
.f4 {
	font-size: 16px !important;
}
@media (min-width: 768px) {
	.f4 {
		font-size: 16px !important;
	}
}
.f5 {
	font-size: 14px !important;
}
.f6 {
	font-size: 12px !important;
}
.f00-light {
	font-size: 40px !important;
	font-weight: 300 !important;
}
@media (min-width: 768px) {
	.f00-light {
		font-size: 48px !important;
	}
}
.f0-light {
	font-size: 32px !important;
	font-weight: 300 !important;
}
@media (min-width: 768px) {
	.f0-light {
		font-size: 40px !important;
	}
}
.f1-light {
	font-size: 26px !important;
	font-weight: 300 !important;
}
@media (min-width: 768px) {
	.f1-light {
		font-size: 32px !important;
	}
}
.f2-light {
	font-size: 22px !important;
	font-weight: 300 !important;
}
@media (min-width: 768px) {
	.f2-light {
		font-size: 24px !important;
	}
}
.f3-light {
	font-size: 18px !important;
	font-weight: 300 !important;
}
@media (min-width: 768px) {
	.f3-light {
		font-size: 20px !important;
	}
}
.text-small {
	font-size: 12px !important;
}
.lead {
	margin-bottom: 30px;
	font-size: 20px;
	font-weight: 300;
}
.lh-condensed-ultra {
	line-height: 1 !important;
}
.lh-condensed {
	line-height: 1.25 !important;
}
.lh-default {
	line-height: 1.5 !important;
}
.lh-0 {
	line-height: 0 !important;
}
@media (min-width: 544px) {
	.lh-sm-condensed-ultra {
		line-height: 1 !important;
	}
	.lh-sm-condensed {
		line-height: 1.25 !important;
	}
	.lh-sm-default {
		line-height: 1.5 !important;
	}
	.lh-sm-0 {
		line-height: 0 !important;
	}
}
@media (min-width: 768px) {
	.lh-md-condensed-ultra {
		line-height: 1 !important;
	}
	.lh-md-condensed {
		line-height: 1.25 !important;
	}
	.lh-md-default {
		line-height: 1.5 !important;
	}
	.lh-md-0 {
		line-height: 0 !important;
	}
}
@media (min-width: 1012px) {
	.lh-lg-condensed-ultra {
		line-height: 1 !important;
	}
	.lh-lg-condensed {
		line-height: 1.25 !important;
	}
	.lh-lg-default {
		line-height: 1.5 !important;
	}
	.lh-lg-0 {
		line-height: 0 !important;
	}
}
@media (min-width: 1280px) {
	.lh-xl-condensed-ultra {
		line-height: 1 !important;
	}
	.lh-xl-condensed {
		line-height: 1.25 !important;
	}
	.lh-xl-default {
		line-height: 1.5 !important;
	}
	.lh-xl-0 {
		line-height: 0 !important;
	}
}
.text-right {
	text-align: right !important;
}
.text-left {
	text-align: left !important;
}
.text-center {
	text-align: center !important;
}
@media (min-width: 544px) {
	.text-sm-right {
		text-align: right !important;
	}
	.text-sm-left {
		text-align: left !important;
	}
	.text-sm-center {
		text-align: center !important;
	}
}
@media (min-width: 768px) {
	.text-md-right {
		text-align: right !important;
	}
	.text-md-left {
		text-align: left !important;
	}
	.text-md-center {
		text-align: center !important;
	}
}
@media (min-width: 1012px) {
	.text-lg-right {
		text-align: right !important;
	}
	.text-lg-left {
		text-align: left !important;
	}
	.text-lg-center {
		text-align: center !important;
	}
}
@media (min-width: 1280px) {
	.text-xl-right {
		text-align: right !important;
	}
	.text-xl-left {
		text-align: left !important;
	}
	.text-xl-center {
		text-align: center !important;
	}
}
.text-normal {
	font-weight: 400 !important;
}
.text-bold {
	font-weight: 600 !important;
}
.text-italic {
	font-style: italic !important;
}
.text-uppercase {
	text-transform: uppercase !important;
}
.text-underline {
	text-decoration: underline !important;
}
.no-underline {
	text-decoration: none !important;
}
.no-wrap {
	white-space: nowrap !important;
}
.ws-normal {
	white-space: normal !important;
}
.break-word {
	word-break: break-word !important;
	word-wrap: break-word !important;
	overflow-wrap: break-word !important;
}
.wb-break-all {
	word-break: break-all !important;
}
.text-emphasized {
	font-weight: 600;
}
.list-style-none {
	list-style: none !important;
}
.text-mono {
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace !important;
}
.user-select-none {
	-webkit-user-select: none !important;
	-ms-user-select: none !important;
	user-select: none !important;
}
.d-block {
	display: block !important;
}
.d-flex {
	display: flex !important;
}
.d-inline {
	display: inline !important;
}
.d-inline-block {
	display: inline-block !important;
}
.d-inline-flex {
	display: inline-flex !important;
}
.d-none {
	display: none !important;
}
.d-table {
	display: table !important;
}
.d-table-cell {
	display: table-cell !important;
}
@media (min-width: 544px) {
	.d-sm-block {
		display: block !important;
	}
	.d-sm-flex {
		display: flex !important;
	}
	.d-sm-inline {
		display: inline !important;
	}
	.d-sm-inline-block {
		display: inline-block !important;
	}
	.d-sm-inline-flex {
		display: inline-flex !important;
	}
	.d-sm-none {
		display: none !important;
	}
	.d-sm-table {
		display: table !important;
	}
	.d-sm-table-cell {
		display: table-cell !important;
	}
}
@media (min-width: 768px) {
	.d-md-block {
		display: block !important;
	}
	.d-md-flex {
		display: flex !important;
	}
	.d-md-inline {
		display: inline !important;
	}
	.d-md-inline-block {
		display: inline-block !important;
	}
	.d-md-inline-flex {
		display: inline-flex !important;
	}
	.d-md-none {
		display: none !important;
	}
	.d-md-table {
		display: table !important;
	}
	.d-md-table-cell {
		display: table-cell !important;
	}
}
@media (min-width: 1012px) {
	.d-lg-block {
		display: block !important;
	}
	.d-lg-flex {
		display: flex !important;
	}
	.d-lg-inline {
		display: inline !important;
	}
	.d-lg-inline-block {
		display: inline-block !important;
	}
	.d-lg-inline-flex {
		display: inline-flex !important;
	}
	.d-lg-none {
		display: none !important;
	}
	.d-lg-table {
		display: table !important;
	}
	.d-lg-table-cell {
		display: table-cell !important;
	}
}
@media (min-width: 1280px) {
	.d-xl-block {
		display: block !important;
	}
	.d-xl-flex {
		display: flex !important;
	}
	.d-xl-inline {
		display: inline !important;
	}
	.d-xl-inline-block {
		display: inline-block !important;
	}
	.d-xl-inline-flex {
		display: inline-flex !important;
	}
	.d-xl-none {
		display: none !important;
	}
	.d-xl-table {
		display: table !important;
	}
	.d-xl-table-cell {
		display: table-cell !important;
	}
}
.v-hidden {
	visibility: hidden !important;
}
.v-visible {
	visibility: visible !important;
}
@media (max-width: 543px) {
	.hide-sm {
		display: none !important;
	}
}
@media (min-width: 544px) and (max-width: 767px) {
	.hide-md {
		display: none !important;
	}
}
@media (min-width: 768px) and (max-width: 1011px) {
	.hide-lg {
		display: none !important;
	}
}
@media (min-width: 1012px) {
	.hide-xl {
		display: none !important;
	}
}
.table-fixed {
	table-layout: fixed !important;
}
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	word-wrap: normal;
	border: 0;
}
.show-on-focus {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: 0;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
}
.show-on-focus:focus {
	z-index: 20;
	width: auto;
	height: auto;
	clip: auto;
} /*!
 * @primer/css/product
 * http://primer.style/css
 *
 * Released under MIT license. Copyright (c) 2019 GitHub Inc.
 */
.flash {
	position: relative;
	padding: 20px 16px;
	border-style: solid;
	border-width: 1px;
	border-radius: 6px;
}
.flash p:last-child {
	margin-bottom: 0;
}
.flash .octicon {
	margin-right: 12px;
}
.flash-messages {
	margin-bottom: 24px;
}
.flash-close {
	float: right;
	padding: 16px;
	margin: -16px;
	text-align: center;
	cursor: pointer;
	background: none;
	border: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.flash-close:hover {
	opacity: 0.7;
}
.flash-close:active {
	opacity: 0.5;
}
.flash-close .octicon {
	margin-right: 0;
}
.flash-action {
	float: right;
	margin-top: -3px;
	margin-left: 24px;
	background-clip: padding-box;
}
.flash {
	color: var(--color-alert-info-text);
	background-image: linear-gradient(
		var(--color-alert-info-bg),
		var(--color-alert-info-bg)
	);
	border-color: var(--color-alert-info-border);
}
.flash .octicon {
	color: var(--color-alert-info-icon);
}
.flash-warn {
	color: var(--color-alert-warn-text);
	background-image: linear-gradient(
		var(--color-alert-warn-bg),
		var(--color-alert-warn-bg)
	);
	border-color: var(--color-alert-warn-border);
}
.flash-warn .octicon {
	color: var(--color-alert-warn-icon);
}
.flash-error {
	color: var(--color-alert-error-text);
	background-image: linear-gradient(
		var(--color-alert-error-bg),
		var(--color-alert-error-bg)
	);
	border-color: var(--color-alert-error-border);
}
.flash-error .octicon {
	color: var(--color-alert-error-icon);
}
.flash-success {
	color: var(--color-alert-success-text);
	background-image: linear-gradient(
		var(--color-alert-success-bg),
		var(--color-alert-success-bg)
	);
	border-color: var(--color-alert-success-border);
}
.flash-success .octicon {
	color: var(--color-alert-success-icon);
}
.flash-full {
	margin-top: -1px;
	border-width: 1px 0;
	border-radius: 0;
}
.flash-banner {
	position: fixed;
	top: 0;
	z-index: 90;
	width: 100%;
	border-top: 0;
	border-right: 0;
	border-left: 0;
	border-radius: 0;
}
.flash-full,
.flash-banner {
	background-color: var(--color-bg-canvas);
}
.warning {
	padding: 0.5em;
	margin-bottom: 0.8em;
	font-weight: 600;
	background-color: var(--color-alert-warn-bg);
}
.autocomplete-results {
	position: absolute;
	z-index: 99;
	width: 100%;
	max-height: 20em;
	overflow-y: auto;
	font-size: 13px;
	list-style: none;
	background: var(--color-bg-overlay);
	border: 1px solid var(--color-border-overlay);
	border-radius: 6px;
	box-shadow: var(--color-autocomplete-shadow);
}
.autocomplete-item {
	display: block;
	width: 100%;
	padding: 4px 8px;
	overflow: hidden;
	font-weight: 600;
	color: var(--color-text-primary);
	text-align: left;
	text-decoration: none;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	background-color: var(--color-bg-overlay);
	border: 0;
}
.autocomplete-item:hover {
	color: var(--color-state-hover-primary-text);
	text-decoration: none;
	background-color: var(--color-state-hover-primary-bg);
}
.autocomplete-item:hover * {
	color: inherit !important;
}
.autocomplete-item.selected,
.autocomplete-item[aria-selected="true"],
.autocomplete-item.navigation-focus {
	color: var(--color-state-selected-primary-text);
	text-decoration: none;
	background-color: var(--color-state-selected-primary-bg);
}
.autocomplete-item.selected *,
.autocomplete-item[aria-selected="true"] *,
.autocomplete-item.navigation-focus * {
	color: inherit !important;
}
.suggester {
	position: relative;
	top: 0;
	left: 0;
	min-width: 180px;
	padding: 0;
	margin: 0;
	margin-top: 24px;
	list-style: none;
	cursor: pointer;
	background: var(--color-bg-overlay);
	border: 1px solid var(--color-border-overlay);
	border-radius: 6px;
	box-shadow: var(--color-autocomplete-shadow);
}
.suggester li {
	display: block;
	padding: 4px 8px;
	font-weight: 500;
	border-bottom: 1px solid var(--color-autocomplete-row-border);
}
.suggester li small {
	font-weight: 400;
	color: var(--color-text-secondary);
}
.suggester li:last-child {
	border-bottom: 0;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.suggester li:first-child {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.suggester li:hover {
	color: var(--color-state-hover-primary-text);
	text-decoration: none;
	background: var(--color-state-hover-primary-bg);
}
.suggester li:hover small {
	color: var(--color-state-hover-primary-text);
}
.suggester li[aria-selected="true"],
.suggester li.navigation-focus {
	color: var(--color-state-selected-primary-text);
	text-decoration: none;
	background: var(--color-state-selected-primary-bg);
}
.suggester li[aria-selected="true"] small,
.suggester li.navigation-focus small {
	color: var(--color-state-selected-primary-text);
}
.suggester-container {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 30;
}
@media (max-width: 544px) {
	.page-responsive .suggester-container {
		right: 8px !important;
		left: 8px !important;
	}
	.page-responsive .suggester li {
		padding: 8px 16px;
	}
}
.avatar {
	display: inline-block;
	overflow: hidden;
	line-height: 1;
	vertical-align: middle;
	background-color: var(--color-avatar-bg);
	border-radius: 6px;
	flex-shrink: 0;
	box-shadow: 0 0 0 1px var(--color-avatar-border);
}
.avatar-link {
	float: left;
	line-height: 1;
}
.avatar-group-item {
	display: inline-block;
	margin-bottom: 3px;
}
.avatar-1,
.avatar-2,
.avatar-small {
	border-radius: 4px;
}
.avatar-1 {
	width: 16px;
	height: 16px;
}
.avatar-2 {
	width: 20px;
	height: 20px;
}
.avatar-3 {
	width: 24px;
	height: 24px;
}
.avatar-4 {
	width: 28px;
	height: 28px;
}
.avatar-5 {
	width: 32px;
	height: 32px;
}
.avatar-6 {
	width: 40px;
	height: 40px;
}
.avatar-7 {
	width: 48px;
	height: 48px;
}
.avatar-8 {
	width: 64px;
	height: 64px;
}
.avatar-parent-child {
	position: relative;
}
.avatar-child {
	position: absolute;
	right: -15%;
	bottom: -9%;
	background-color: var(--color-bg-canvas);
	border-radius: 4px;
	box-shadow: var(--color-avatar-child-shadow);
}
.AvatarStack {
	position: relative;
	min-width: 26px;
	height: 20px;
}
.AvatarStack .AvatarStack-body {
	position: absolute;
}
.AvatarStack.AvatarStack--two {
	min-width: 36px;
}
.AvatarStack.AvatarStack--three-plus {
	min-width: 46px;
}
.AvatarStack-body {
	display: flex;
	background: var(--color-bg-canvas);
}
.AvatarStack-body .avatar {
	position: relative;
	z-index: 2;
	display: flex;
	width: 20px;
	height: 20px;
	box-sizing: content-box;
	margin-right: -11px;
	background-color: var(--color-bg-canvas);
	border-right: 1px solid var(--color-bg-canvas);
	border-radius: 4px;
	transition: margin 0.1s ease-in-out;
}
.AvatarStack-body .avatar:first-child {
	z-index: 3;
}
.AvatarStack-body .avatar:last-child {
	z-index: 1;
	border-right: 0;
}
.AvatarStack-body .avatar img {
	border-radius: 4px;
}
.AvatarStack-body .avatar:nth-child(n + 4) {
	display: none;
	opacity: 0;
}
.AvatarStack-body:hover .avatar {
	margin-right: 3px;
}
.AvatarStack-body:hover .avatar:nth-child(n + 4) {
	display: flex;
	opacity: 1;
}
.AvatarStack-body:hover .avatar-more {
	display: none !important;
}
.avatar.avatar-more {
	z-index: 1;
	margin-right: 0;
	background: var(--color-bg-tertiary);
}
.avatar.avatar-more::before,
.avatar.avatar-more::after {
	position: absolute;
	display: block;
	height: 20px;
	content: "";
	border-radius: 2px;
	outline: 1px solid var(--color-bg-canvas);
}
.avatar.avatar-more::before {
	width: 17px;
	background: var(--color-avatar-stack-fade-more);
}
.avatar.avatar-more::after {
	width: 14px;
	background: var(--color-avatar-stack-fade);
}
.AvatarStack--right .AvatarStack-body {
	right: 0;
	flex-direction: row-reverse;
}
.AvatarStack--right .AvatarStack-body:hover .avatar {
	margin-right: 0;
	margin-left: 3px;
}
.AvatarStack--right .avatar.avatar-more {
	background: var(--color-avatar-stack-fade);
}
.AvatarStack--right .avatar.avatar-more::before {
	width: 5px;
}
.AvatarStack--right .avatar.avatar-more::after {
	width: 2px;
	background: var(--color-bg-tertiary);
}
.AvatarStack--right .avatar {
	margin-right: 0;
	margin-left: -11px;
	border-right: 0;
	border-left: 1px solid var(--color-bg-canvas);
}
.CircleBadge {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color-bg-canvas);
	border-radius: 50%;
	box-shadow: var(--color-shadow-medium);
}
.CircleBadge-icon {
	max-width: 60% !important;
	height: auto !important;
	max-height: 55% !important;
}
.CircleBadge--small {
	width: 56px;
	height: 56px;
}
.CircleBadge--medium {
	width: 96px;
	height: 96px;
}
.CircleBadge--large {
	width: 128px;
	height: 128px;
}
.DashedConnection {
	position: relative;
}
.DashedConnection::before {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	content: "";
	border-bottom: 2px dashed var(--color-border-primary);
}
.DashedConnection .CircleBadge {
	position: relative;
}
.blankslate {
	position: relative;
	padding: 32px;
	text-align: center;
}
.blankslate p {
	color: var(--color-text-secondary);
}
.blankslate code {
	padding: 2px 5px 3px;
	font-size: 14px;
	background: var(--color-bg-canvas);
	border: 1px solid var(--color-auto-gray-0);
	border-radius: 6px;
}
.blankslate img {
	width: 56px;
	height: 56px;
}
.blankslate-icon {
	margin-right: 4px;
	margin-bottom: 8px;
	margin-left: 4px;
	color: var(--color-blankslate-icon);
}
.blankslate-capped {
	border-radius: 0 0 6px 6px;
}
.blankslate-spacious {
	padding: 80px 40px;
}
.blankslate-narrow {
	max-width: 485px;
	margin: 0 auto;
}
.blankslate-large img {
	width: 80px;
	height: 80px;
}
.blankslate-large h3 {
	margin: 16px 0;
	font-size: 24px;
}
.blankslate-large p {
	font-size: 16px;
}
.blankslate-clean-background {
	border: 0;
}
.branch-name {
	display: inline-block;
	padding: 2px 6px;
	font: 12px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	color: var(--color-branch-name-text);
	background-color: var(--color-branch-name-bg);
	border-radius: 6px;
}
.branch-name .octicon {
	margin: 1px -2px 0 0;
	color: var(--color-branch-name-icon);
}
a.branch-name {
	color: var(--color-text-link);
	background-color: var(--color-branch-name-link-bg);
}
a.branch-name .octicon {
	color: var(--color-branch-name-link-icon);
}
.dropdown {
	position: relative;
}
.dropdown-caret {
	display: inline-block;
	width: 0;
	height: 0;
	vertical-align: middle;
	content: "";
	border-style: solid;
	border-width: 4px 4px 0;
	border-right-color: transparent;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 100;
	width: 160px;
	padding-top: 4px;
	padding-bottom: 4px;
	margin-top: 2px;
	list-style: none;
	background-color: var(--color-bg-overlay);
	background-clip: padding-box;
	border: 1px solid var(--color-border-overlay);
	border-radius: 6px;
	box-shadow: var(--color-dropdown-shadow);
}
.dropdown-menu::before,
.dropdown-menu::after {
	position: absolute;
	display: inline-block;
	content: "";
}
.dropdown-menu::before {
	border: 8px solid transparent;
	border-bottom-color: var(--color-border-overlay);
}
.dropdown-menu::after {
	border: 7px solid transparent;
	border-bottom-color: var(--color-bg-overlay);
}
.dropdown-menu > ul {
	list-style: none;
}
.dropdown-menu-no-overflow {
	width: auto;
}
.dropdown-menu-no-overflow .dropdown-item {
	padding: 4px 16px;
	overflow: visible;
	text-overflow: inherit;
}
.dropdown-item {
	display: block;
	padding: 4px 8px 4px 16px;
	overflow: hidden;
	color: var(--color-text-primary);
	text-overflow: ellipsis;
	white-space: nowrap;
}
.dropdown-item:focus,
.dropdown-item:hover {
	color: var(--color-state-hover-primary-text);
	text-decoration: none;
	background-color: var(--color-state-hover-primary-bg);
	outline: none;
}
.dropdown-item:focus > .octicon,
.dropdown-item:hover > .octicon {
	color: inherit;
	opacity: 1;
}
.dropdown-item.btn-link {
	width: 100%;
	text-align: left;
}
.dropdown-signout {
	width: 100%;
	text-align: left;
	background: none;
	border: 0;
}
.dropdown-divider {
	display: block;
	height: 0;
	margin: 8px 0;
	border-top: 1px solid var(--color-border-overlay);
}
.dropdown-header {
	padding: 4px 16px;
	font-size: 12px;
	color: var(--color-text-secondary);
}
.dropdown-item[aria-checked="false"] .octicon-check {
	display: none;
}
.dropdown-menu-w {
	top: 0;
	right: 100%;
	left: auto;
	width: auto;
	margin-top: 0;
	margin-right: 8px;
}
.dropdown-menu-w::before {
	top: 10px;
	right: -16px;
	left: auto;
	border-color: transparent;
	border-left-color: var(--color-border-overlay);
}
.dropdown-menu-w::after {
	top: 11px;
	right: -14px;
	left: auto;
	border-color: transparent;
	border-left-color: var(--color-bg-overlay);
}
.dropdown-menu-e {
	top: 0;
	left: 100%;
	width: auto;
	margin-top: 0;
	margin-left: 8px;
}
.dropdown-menu-e::before {
	top: 10px;
	left: -16px;
	border-color: transparent;
	border-right-color: var(--color-border-overlay);
}
.dropdown-menu-e::after {
	top: 11px;
	left: -14px;
	border-color: transparent;
	border-right-color: var(--color-bg-overlay);
}
.dropdown-menu-ne {
	top: auto;
	bottom: 100%;
	left: 0;
	margin-bottom: 3px;
}
.dropdown-menu-ne::before,
.dropdown-menu-ne::after {
	top: auto;
	right: auto;
}
.dropdown-menu-ne::before {
	bottom: -8px;
	left: 9px;
	border-top: 8px solid var(--color-border-overlay);
	border-right: 8px solid transparent;
	border-bottom: 0;
	border-left: 8px solid transparent;
}
.dropdown-menu-ne::after {
	bottom: -7px;
	left: 10px;
	border-top: 7px solid var(--color-bg-overlay);
	border-right: 7px solid transparent;
	border-bottom: 0;
	border-left: 7px solid transparent;
}
.dropdown-menu-s {
	right: 50%;
	left: auto;
	transform: translateX(50%);
}
.dropdown-menu-s::before {
	top: -16px;
	right: 50%;
	transform: translateX(50%);
}
.dropdown-menu-s::after {
	top: -14px;
	right: 50%;
	transform: translateX(50%);
}
.dropdown-menu-sw {
	right: 0;
	left: auto;
}
.dropdown-menu-sw::before {
	top: -16px;
	right: 9px;
	left: auto;
}
.dropdown-menu-sw::after {
	top: -14px;
	right: 10px;
	left: auto;
}
.dropdown-menu-se::before {
	top: -16px;
	left: 9px;
}
.dropdown-menu-se::after {
	top: -14px;
	left: 10px;
}
.Header {
	z-index: 32;
	display: flex;
	padding: 16px;
	font-size: 14px;
	line-height: 1.5;
	color: var(--color-header-text);
	background-color: var(--color-header-bg);
	align-items: center;
	flex-wrap: nowrap;
}
.Header-item {
	display: flex;
	margin-right: 16px;
	align-self: stretch;
	align-items: center;
	flex-wrap: nowrap;
}
.Header-item--full {
	flex: auto;
}
.Header-link {
	font-weight: 600;
	color: var(--color-header-logo);
	white-space: nowrap;
}
.Header-link:hover,
.Header-link:focus {
	color: var(--color-header-text);
	text-decoration: none;
}
.IssueLabel {
	display: inline-block;
	padding: 0 7px;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	border: 1px solid transparent;
	border-radius: 2em;
}
.IssueLabel .g-emoji {
	position: relative;
	top: -0.05em;
	display: inline-block;
	font-size: 1em;
	line-height: 1;
}
.IssueLabel:hover {
	text-decoration: none;
}
.IssueLabel--big {
	padding-right: 10px;
	padding-left: 10px;
	line-height: 22px;
}
.labels {
	position: relative;
}
.label,
.Label {
	display: inline-block;
	padding: 0 7px;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	border: 1px solid transparent;
	border-radius: 2em;
	background-color: transparent !important;
	border-color: var(--color-label-border);
}
.label:hover,
.Label:hover {
	text-decoration: none;
}
.Label--large {
	padding-right: 10px;
	padding-left: 10px;
	line-height: 22px;
}
.Label--inline {
	display: inline;
	padding: 0.1667em 0.5em;
	font-size: 0.9em;
}
.Label--primary {
	color: var(--color-label-primary-text);
	border-color: var(--color-label-primary-border);
}
.Label--secondary {
	color: var(--color-label-secondary-text);
	border-color: var(--color-label-secondary-border);
}
.Label--info {
	color: var(--color-label-info-text);
	border-color: var(--color-label-info-border);
}
.Label--success {
	color: var(--color-label-success-text);
	border-color: var(--color-label-success-border);
}
.Label--warning {
	color: var(--color-label-warning-text);
	border-color: var(--color-label-warning-border);
}
.Label--danger {
	color: var(--color-label-danger-text);
	border-color: var(--color-label-danger-border);
}
.state,
.State {
	display: inline-block;
	padding: 5px 12px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	white-space: nowrap;
	border-radius: 2em;
}
.state,
.State,
.State--draft {
	color: var(--color-pr-state-draft-text);
	background-color: var(--color-pr-state-draft-bg);
	border: 1px solid var(--color-pr-state-draft-border);
}
.State--open {
	color: var(--color-pr-state-open-text);
	background-color: var(--color-pr-state-open-bg);
	border-color: var(--color-pr-state-open-border);
}
.State--merged {
	color: var(--color-pr-state-merged-text);
	background-color: var(--color-pr-state-merged-bg);
	border-color: var(--color-pr-state-merged-border);
}
.State--closed {
	color: var(--color-pr-state-closed-text);
	background-color: var(--color-pr-state-closed-bg);
	border-color: var(--color-pr-state-closed-border);
}
.State--small {
	padding: 0 10px;
	font-size: 12px;
	line-height: 24px;
}
.State--small .octicon {
	width: 1em;
}
.Counter {
	display: inline-block;
	min-width: 20px;
	padding: 0 6px;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	color: var(--color-counter-text);
	text-align: center;
	background-color: var(--color-counter-bg);
	border: 1px solid transparent;
	border-radius: 2em;
}
.Counter:empty {
	display: none;
}
.Counter .octicon {
	vertical-align: text-top;
	opacity: 0.8;
}
.Counter--primary {
	color: var(--color-counter-primary-text);
	background-color: var(--color-counter-primary-bg);
}
.Counter--secondary {
	color: var(--color-counter-secondary-text);
	background-color: var(--color-counter-secondary-bg);
}
.diffstat {
	font-size: 12px;
	font-weight: 600;
	color: var(--color-text-secondary);
	white-space: nowrap;
	cursor: default;
}
.diffstat-block-deleted,
.diffstat-block-added,
.diffstat-block-neutral {
	display: inline-block;
	width: 8px;
	height: 8px;
	margin-left: 1px;
	outline-offset: -1px;
}
.diffstat-block-deleted {
	background-color: var(--color-diffstat-deletion-bg);
	outline: 1px solid var(--color-diffstat-deletion-border);
}
.diffstat-block-added {
	background-color: var(--color-diffstat-addition-bg);
	outline: 1px solid var(--color-diffstat-addition-border);
}
.diffstat-block-neutral {
	background-color: var(--color-diffstat-neutral-bg);
	outline: 1px solid var(--color-diffstat-neutral-border);
}
.AnimatedEllipsis {
	display: inline-block;
	overflow: hidden;
	vertical-align: bottom;
}
.AnimatedEllipsis::after {
	display: inline-block;
	content: "...";
	animation: AnimatedEllipsis-keyframes 1.2s steps(4, jump-none) infinite;
}
@keyframes AnimatedEllipsis-keyframes {
	0% {
		transform: translateX(-100%);
	}
}
.markdown-body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
	font-size: 16px;
	line-height: 1.5;
	word-wrap: break-word;
}
.markdown-body kbd {
	display: inline-block;
	padding: 3px 5px;
	font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	line-height: 10px;
	color: var(--color-auto-gray-7);
	vertical-align: middle;
	background-color: var(--color-bg-secondary);
	border: solid 1px var(--color-border-tertiary);
	border-bottom-color: var(--color-border-tertiary);
	border-radius: 6px;
	box-shadow: inset 0 -1px 0 var(--color-border-tertiary);
}
.markdown-body::before {
	display: table;
	content: "";
}
.markdown-body::after {
	display: table;
	clear: both;
	content: "";
}
.markdown-body > *:first-child {
	margin-top: 0 !important;
}
.markdown-body > *:last-child {
	margin-bottom: 0 !important;
}
.markdown-body a:not([href]) {
	color: inherit;
	text-decoration: none;
}
.markdown-body .absent {
	color: var(--color-text-danger);
}
.markdown-body .anchor {
	float: left;
	padding-right: 4px;
	margin-left: -20px;
	line-height: 1;
}
.markdown-body .anchor:focus {
	outline: none;
}
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
	margin-top: 0;
	margin-bottom: 16px;
}
.markdown-body hr {
	height: 0.25em;
	padding: 0;
	margin: 24px 0;
	background-color: var(--color-border-primary);
	border: 0;
}
.markdown-body blockquote {
	padding: 0 1em;
	color: var(--color-text-tertiary);
	border-left: 0.25em solid var(--color-markdown-blockquote-border);
}
.markdown-body blockquote > :first-child {
	margin-top: 0;
}
.markdown-body blockquote > :last-child {
	margin-bottom: 0;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
	margin-top: 24px;
	margin-bottom: 16px;
	font-weight: 600;
	line-height: 1.25;
}
.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
	color: var(--color-text-primary);
	vertical-align: middle;
	visibility: hidden;
}
.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
	text-decoration: none;
}
.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
	visibility: visible;
}
.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
	font-size: inherit;
}
.markdown-body h1 {
	padding-bottom: 0.3em;
	font-size: 2em;
	border-bottom: 1px solid var(--color-border-secondary);
}
.markdown-body h2 {
	padding-bottom: 0.3em;
	font-size: 1.5em;
	border-bottom: 1px solid var(--color-border-secondary);
}
.markdown-body h3 {
	font-size: 1.25em;
}
.markdown-body h4 {
	font-size: 1em;
}
.markdown-body h5 {
	font-size: 0.875em;
}
.markdown-body h6 {
	font-size: 0.85em;
	color: var(--color-text-tertiary);
}
.markdown-body ul,
.markdown-body ol {
	padding-left: 2em;
}
.markdown-body ul.no-list,
.markdown-body ol.no-list {
	padding: 0;
	list-style-type: none;
}
.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
	margin-top: 0;
	margin-bottom: 0;
}
.markdown-body li > p {
	margin-top: 16px;
}
.markdown-body li + li {
	margin-top: 0.25em;
}
.markdown-body dl {
	padding: 0;
}
.markdown-body dl dt {
	padding: 0;
	margin-top: 16px;
	font-size: 1em;
	font-style: italic;
	font-weight: 600;
}
.markdown-body dl dd {
	padding: 0 16px;
	margin-bottom: 16px;
}
.markdown-body table {
	display: block;
	width: 100%;
	width: -webkit-max-content;
	width: max-content;
	max-width: 100%;
	overflow: auto;
}
.markdown-body table th {
	font-weight: 600;
}
.markdown-body table th,
.markdown-body table td {
	padding: 6px 13px;
	border: 1px solid var(--color-markdown-table-border);
}
.markdown-body table tr {
	background-color: var(--color-bg-primary);
	border-top: 1px solid var(--color-markdown-table-tr-border);
}
.markdown-body table tr:nth-child(2n) {
	background-color: var(--color-bg-tertiary);
}
.markdown-body table img {
	background-color: transparent;
}
.markdown-body img {
	max-width: 100%;
	box-sizing: content-box;
	background-color: var(--color-bg-primary);
}
.markdown-body img[align="right"] {
	padding-left: 20px;
}
.markdown-body img[align="left"] {
	padding-right: 20px;
}
.markdown-body .emoji {
	max-width: none;
	vertical-align: text-top;
	background-color: transparent;
}
.markdown-body span.frame {
	display: block;
	overflow: hidden;
}
.markdown-body span.frame > span {
	display: block;
	float: left;
	width: auto;
	padding: 7px;
	margin: 13px 0 0;
	overflow: hidden;
	border: 1px solid var(--color-markdown-frame-border);
}
.markdown-body span.frame span img {
	display: block;
	float: left;
}
.markdown-body span.frame span span {
	display: block;
	padding: 5px 0 0;
	clear: both;
	color: var(--color-text-primary);
}
.markdown-body span.align-center {
	display: block;
	overflow: hidden;
	clear: both;
}
.markdown-body span.align-center > span {
	display: block;
	margin: 13px auto 0;
	overflow: hidden;
	text-align: center;
}
.markdown-body span.align-center span img {
	margin: 0 auto;
	text-align: center;
}
.markdown-body span.align-right {
	display: block;
	overflow: hidden;
	clear: both;
}
.markdown-body span.align-right > span {
	display: block;
	margin: 13px 0 0;
	overflow: hidden;
	text-align: right;
}
.markdown-body span.align-right span img {
	margin: 0;
	text-align: right;
}
.markdown-body span.float-left {
	display: block;
	float: left;
	margin-right: 13px;
	overflow: hidden;
}
.markdown-body span.float-left span {
	margin: 13px 0 0;
}
.markdown-body span.float-right {
	display: block;
	float: right;
	margin-left: 13px;
	overflow: hidden;
}
.markdown-body span.float-right > span {
	display: block;
	margin: 13px auto 0;
	overflow: hidden;
	text-align: right;
}
.markdown-body code,
.markdown-body tt {
	padding: 0.2em 0.4em;
	margin: 0;
	font-size: 85%;
	background-color: var(--color-markdown-code-bg);
	border-radius: 6px;
}
.markdown-body code br,
.markdown-body tt br {
	display: none;
}
.markdown-body del code {
	text-decoration: inherit;
}
.markdown-body pre {
	word-wrap: normal;
}
.markdown-body pre > code {
	padding: 0;
	margin: 0;
	font-size: 100%;
	word-break: normal;
	white-space: pre;
	background: transparent;
	border: 0;
}
.markdown-body .highlight {
	margin-bottom: 16px;
}
.markdown-body .highlight pre {
	margin-bottom: 0;
	word-break: normal;
}
.markdown-body .highlight pre,
.markdown-body pre {
	padding: 16px;
	overflow: auto;
	font-size: 85%;
	line-height: 1.45;
	background-color: var(--color-bg-tertiary);
	border-radius: 6px;
}
.markdown-body pre code,
.markdown-body pre tt {
	display: inline;
	max-width: auto;
	padding: 0;
	margin: 0;
	overflow: visible;
	line-height: inherit;
	word-wrap: normal;
	background-color: transparent;
	border: 0;
}
.markdown-body .csv-data td,
.markdown-body .csv-data th {
	padding: 5px;
	overflow: hidden;
	font-size: 12px;
	line-height: 1;
	text-align: left;
	white-space: nowrap;
}
.markdown-body .csv-data .blob-num {
	padding: 10px 8px 9px;
	text-align: right;
	background: var(--color-bg-primary);
	border: 0;
}
.markdown-body .csv-data tr {
	border-top: 0;
}
.markdown-body .csv-data th {
	font-weight: 600;
	background: var(--color-bg-tertiary);
	border-top: 0;
}
.Popover {
	position: absolute;
	z-index: 100;
}
.Popover-message {
	position: relative;
	width: 232px;
	margin-right: auto;
	margin-left: auto;
}
.Popover-message::before,
.Popover-message::after {
	position: absolute;
	left: 50%;
	display: inline-block;
	content: "";
}
.Popover-message::before {
	top: -16px;
	margin-left: -9px;
	border: 8px solid transparent;
	border-bottom-color: var(--color-border-overlay);
}
.Popover-message::after {
	top: -14px;
	margin-left: -8px;
	border: 7px solid transparent;
	border-bottom-color: var(--color-bg-overlay);
}
.Popover-message.Box {
	background-color: var(--color-bg-overlay);
}
.Popover-message--bottom::before,
.Popover-message--bottom::after,
.Popover-message--bottom-right::before,
.Popover-message--bottom-right::after,
.Popover-message--bottom-left::before,
.Popover-message--bottom-left::after {
	top: auto;
	border-bottom-color: transparent;
}
.Popover-message--bottom::before,
.Popover-message--bottom-right::before,
.Popover-message--bottom-left::before {
	bottom: -16px;
	border-top-color: var(--color-border-overlay);
}
.Popover-message--bottom::after,
.Popover-message--bottom-right::after,
.Popover-message--bottom-left::after {
	bottom: -14px;
	border-top-color: var(--color-bg-overlay);
}
.Popover-message--top-right,
.Popover-message--bottom-right {
	right: -9px;
	margin-right: 0;
}
.Popover-message--top-right::before,
.Popover-message--top-right::after,
.Popover-message--bottom-right::before,
.Popover-message--bottom-right::after {
	left: auto;
	margin-left: 0;
}
.Popover-message--top-right::before,
.Popover-message--bottom-right::before {
	right: 20px;
}
.Popover-message--top-right::after,
.Popover-message--bottom-right::after {
	right: 21px;
}
.Popover-message--top-left,
.Popover-message--bottom-left {
	left: -9px;
	margin-left: 0;
}
.Popover-message--top-left::before,
.Popover-message--top-left::after,
.Popover-message--bottom-left::before,
.Popover-message--bottom-left::after {
	left: 24px;
	margin-left: 0;
}
.Popover-message--top-left::after,
.Popover-message--bottom-left::after {
	left: 25px;
}
.Popover-message--right::before,
.Popover-message--right::after,
.Popover-message--right-top::before,
.Popover-message--right-top::after,
.Popover-message--right-bottom::before,
.Popover-message--right-bottom::after,
.Popover-message--left::before,
.Popover-message--left::after,
.Popover-message--left-top::before,
.Popover-message--left-top::after,
.Popover-message--left-bottom::before,
.Popover-message--left-bottom::after {
	top: 50%;
	left: auto;
	margin-left: 0;
	border-bottom-color: transparent;
}
.Popover-message--right::before,
.Popover-message--right-top::before,
.Popover-message--right-bottom::before,
.Popover-message--left::before,
.Popover-message--left-top::before,
.Popover-message--left-bottom::before {
	margin-top: -9px;
}
.Popover-message--right::after,
.Popover-message--right-top::after,
.Popover-message--right-bottom::after,
.Popover-message--left::after,
.Popover-message--left-top::after,
.Popover-message--left-bottom::after {
	margin-top: -8px;
}
.Popover-message--right::before,
.Popover-message--right-top::before,
.Popover-message--right-bottom::before {
	right: -16px;
	border-left-color: var(--color-border-overlay);
}
.Popover-message--right::after,
.Popover-message--right-top::after,
.Popover-message--right-bottom::after {
	right: -14px;
	border-left-color: var(--color-bg-overlay);
}
.Popover-message--left::before,
.Popover-message--left-top::before,
.Popover-message--left-bottom::before {
	left: -16px;
	border-right-color: var(--color-border-overlay);
}
.Popover-message--left::after,
.Popover-message--left-top::after,
.Popover-message--left-bottom::after {
	left: -14px;
	border-right-color: var(--color-bg-overlay);
}
.Popover-message--right-top::before,
.Popover-message--right-top::after,
.Popover-message--left-top::before,
.Popover-message--left-top::after {
	top: 24px;
}
.Popover-message--right-bottom::before,
.Popover-message--right-bottom::after,
.Popover-message--left-bottom::before,
.Popover-message--left-bottom::after {
	top: auto;
}
.Popover-message--right-bottom::before,
.Popover-message--left-bottom::before {
	bottom: 16px;
}
.Popover-message--right-bottom::after,
.Popover-message--left-bottom::after {
	bottom: 17px;
}
@media (min-width: 544px) {
	.Popover-message--large {
		min-width: 320px;
	}
}
.Progress {
	display: flex;
	height: 8px;
	overflow: hidden;
	background-color: var(--color-auto-gray-2);
	border-radius: 6px;
	outline: 1px solid transparent;
}
.Progress--large {
	height: 10px;
}
.Progress--small {
	height: 5px;
}
.Progress-item {
	outline: 2px solid transparent;
}
.Progress-item + .Progress-item {
	margin-left: 2px;
}
.SelectMenu {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	display: flex;
	padding: 16px;
	pointer-events: none;
	flex-direction: column;
}
@media (min-width: 544px) {
	.SelectMenu {
		position: absolute;
		top: auto;
		right: auto;
		bottom: auto;
		left: auto;
		padding: 0;
	}
}
.SelectMenu::before {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	content: "";
	background-color: var(--color-select-menu-backdrop-bg);
}
@media (min-width: 544px) {
	.SelectMenu::before {
		display: none;
	}
}
.SelectMenu-modal {
	position: relative;
	z-index: 99;
	display: flex;
	max-height: 66%;
	margin: auto 0;
	overflow: hidden;
	pointer-events: auto;
	flex-direction: column;
	background-color: var(--color-bg-overlay);
	border: 1px solid var(--color-select-menu-backdrop-border);
	border-radius: 12px;
	box-shadow: var(--color-select-menu-shadow);
	animation: SelectMenu-modal-animation 0.12s cubic-bezier(0, 0.1, 0.1, 1)
		backwards;
}
@keyframes SelectMenu-modal-animation {
	0% {
		opacity: 0;
		transform: scale(0.9);
	}
}
@keyframes SelectMenu-modal-animation--sm {
	0% {
		opacity: 0;
		transform: translateY(-16px);
	}
}
@media (min-width: 544px) {
	.SelectMenu-modal {
		width: 300px;
		height: auto;
		max-height: 480px;
		margin: 8px 0 16px 0;
		font-size: 12px;
		border-color: var(--color-border-overlay);
		border-radius: 6px;
		box-shadow: var(--color-shadow-large);
		animation-name: SelectMenu-modal-animation--sm;
	}
}
.SelectMenu-header {
	display: flex;
	padding: 16px;
	flex: none;
	align-items: center;
	border-bottom: 1px solid var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-header {
		padding: 7px 7px 7px 16px;
	}
}
.SelectMenu-title {
	flex: 1;
	font-size: 14px;
	font-weight: 600;
}
@media (min-width: 544px) {
	.SelectMenu-title {
		font-size: inherit;
	}
}
.SelectMenu-closeButton {
	padding: 16px;
	margin: -16px;
	line-height: 1;
	color: var(--color-icon-tertiary);
	background-color: transparent;
	border: 0;
}
@media (min-width: 544px) {
	.SelectMenu-closeButton {
		padding: 8px;
		margin: -8px -7px;
	}
}
.SelectMenu-filter {
	padding: 16px;
	margin: 0;
	border-bottom: 1px solid var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-filter {
		padding: 8px;
	}
}
.SelectMenu-input {
	display: block;
	width: 100%;
}
@media (min-width: 544px) {
	.SelectMenu-input {
		font-size: 14px;
	}
}
.SelectMenu-list {
	position: relative;
	padding: 0;
	margin: 0;
	margin-bottom: -1px;
	flex: auto;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: var(--color-bg-overlay);
	-webkit-overflow-scrolling: touch;
}
.SelectMenu-item {
	display: flex;
	align-items: center;
	width: 100%;
	padding: 16px;
	overflow: hidden;
	color: var(--color-text-primary);
	text-align: left;
	cursor: pointer;
	background-color: var(--color-bg-overlay);
	border: 0;
	border-bottom: 1px solid var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-item {
		padding-top: 7px;
		padding-bottom: 7px;
	}
}
.SelectMenu-list--borderless .SelectMenu-item {
	border-bottom: 0;
}
.SelectMenu-icon {
	width: 16px;
	margin-right: 8px;
	flex-shrink: 0;
}
.SelectMenu-icon--check {
	visibility: hidden;
	transition: transform 0.12s cubic-bezier(0.5, 0.1, 1, 0.5),
		visibility 0s 0.12s linear;
	transform: scale(0);
}
.SelectMenu-tabs {
	display: flex;
	flex-shrink: 0;
	overflow-x: auto;
	overflow-y: hidden;
	box-shadow: inset 0 -1px 0 var(--color-select-menu-border-secondary);
	-webkit-overflow-scrolling: touch;
}
.SelectMenu-tabs::-webkit-scrollbar {
	display: none;
}
@media (min-width: 544px) {
	.SelectMenu-tabs {
		padding: 8px 8px 0 8px;
	}
}
.SelectMenu-tab {
	flex: 1;
	padding: 8px 16px;
	font-size: 12px;
	font-weight: 500;
	color: var(--color-text-tertiary);
	text-align: center;
	background-color: transparent;
	border: 0;
	box-shadow: inset 0 -1px 0 var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-tab {
		flex: none;
		padding: 4px 16px;
		border: 1px solid transparent;
		border-bottom-width: 0;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
}
.SelectMenu-tab[aria-selected="true"] {
	z-index: 1;
	color: var(--color-text-primary);
	cursor: default;
	background-color: var(--color-bg-overlay);
	box-shadow: 0 0 0 1px var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-tab[aria-selected="true"] {
		border-color: var(--color-select-menu-border-secondary);
		box-shadow: none;
	}
}
.SelectMenu-message {
	padding: 7px 16px;
	text-align: center;
	background-color: var(--color-bg-overlay);
	border-bottom: 1px solid var(--color-select-menu-border-secondary);
}
.SelectMenu-blankslate,
.SelectMenu-loading {
	padding: 24px 16px;
	text-align: center;
	background-color: var(--color-bg-overlay);
}
.SelectMenu-divider {
	padding: 4px 16px;
	margin: 0;
	font-size: 12px;
	font-weight: 500;
	color: var(--color-text-tertiary);
	background-color: var(--color-bg-tertiary);
	border-bottom: 1px solid var(--color-select-menu-border-secondary);
}
.SelectMenu-list--borderless .SelectMenu-divider {
	border-top: 1px solid var(--color-select-menu-border-secondary);
}
.SelectMenu-list--borderless .SelectMenu-divider:empty {
	padding: 0;
	border-top: 0;
}
.SelectMenu-footer {
	z-index: 0;
	padding: 8px 16px;
	font-size: 12px;
	color: var(--color-text-tertiary);
	text-align: center;
	border-top: 1px solid var(--color-select-menu-border-secondary);
}
@media (min-width: 544px) {
	.SelectMenu-footer {
		padding: 7px 16px;
	}
}
.SelectMenu--hasFilter .SelectMenu-modal {
	height: 80%;
	max-height: none;
	margin-top: 0;
}
@media (min-width: 544px) {
	.SelectMenu--hasFilter .SelectMenu-modal {
		height: auto;
		max-height: 480px;
		margin-top: 8px;
	}
}
.SelectMenu-closeButton:focus,
.SelectMenu-tab:focus,
.SelectMenu-item:focus {
	outline: 0;
}
.SelectMenu-item:hover {
	text-decoration: none;
}
.SelectMenu-item[aria-checked="true"] {
	font-weight: 500;
	color: var(--color-text-primary);
}
.SelectMenu-item[aria-checked="true"] .SelectMenu-icon--check {
	visibility: visible;
	transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), visibility 0s linear;
	transform: scale(1);
}
.SelectMenu-item:disabled,
.SelectMenu-item[aria-disabled="true"] {
	color: var(--color-text-disabled);
	pointer-events: none;
}
@media (hover: hover) {
	body:not(.intent-mouse) .SelectMenu-closeButton:focus,
	.SelectMenu-closeButton:hover {
		color: var(--color-text-primary);
	}
	.SelectMenu-closeButton:active {
		color: var(--color-text-secondary);
	}
	body:not(.intent-mouse) .SelectMenu-item:focus,
	.SelectMenu-item:hover {
		background-color: var(--color-state-hover-secondary-bg);
	}
	.SelectMenu-item:active {
		background-color: var(--color-bg-secondary);
	}
	body:not(.intent-mouse) .SelectMenu-tab:focus {
		background-color: var(--color-select-menu-tap-focus-bg);
	}
	.SelectMenu-tab:hover {
		color: var(--color-text-primary);
	}
	.SelectMenu-tab:not([aria-selected="true"]):active {
		color: var(--color-text-primary);
		background-color: var(--color-bg-tertiary);
	}
}
@media (hover: none) {
	.SelectMenu-item:focus,
	.SelectMenu-item:active {
		background-color: var(--color-bg-secondary);
	}
	.SelectMenu-item {
		-webkit-tap-highlight-color: var(--color-select-menu-tap-highlight);
	}
}
.Subhead {
	display: flex;
	padding-bottom: 8px;
	margin-bottom: 16px;
	border-bottom: 1px solid var(--color-border-secondary);
	flex-flow: row wrap;
}
.Subhead--spacious {
	margin-top: 40px;
}
.Subhead-heading {
	font-size: 24px;
	font-weight: 400;
	flex: 1 1 auto;
}
.Subhead-heading--danger {
	font-weight: 600;
	color: var(--color-text-danger);
}
.Subhead-description {
	font-size: 14px;
	color: var(--color-text-secondary);
	flex: 1 100%;
}
.Subhead-actions {
	align-self: center;
	justify-content: flex-end;
}
.TimelineItem {
	position: relative;
	display: flex;
	padding: 16px 0;
	margin-left: 16px;
}
.TimelineItem::before {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	display: block;
	width: 2px;
	content: "";
	background-color: var(--color-border-secondary);
}
.TimelineItem:target .TimelineItem-badge {
	border-color: var(--color-timeline-target-badge-border);
	box-shadow: 0 0 0.2em var(--color-timeline-target-badge-shadow);
}
.TimelineItem-badge {
	position: relative;
	z-index: 1;
	display: flex;
	width: 32px;
	height: 32px;
	margin-right: 8px;
	margin-left: -15px;
	color: var(--color-icon-secondary);
	align-items: center;
	background-color: var(--color-timeline-badge-bg);
	border: 2px solid var(--color-bg-canvas);
	border-radius: 50%;
	justify-content: center;
	flex-shrink: 0;
}
.TimelineItem-badge--success {
	color: var(--color-text-white);
	background-color: var(--color-btn-primary-bg);
	border: 1px solid var(--color-timeline-badge-success-border);
}
.TimelineItem-body {
	min-width: 0;
	max-width: 100%;
	margin-top: 4px;
	color: var(--color-timeline-text);
	flex: auto;
}
.TimelineItem-avatar {
	position: absolute;
	left: -72px;
	z-index: 1;
}
.TimelineItem-break {
	position: relative;
	z-index: 1;
	height: 24px;
	margin: 0;
	margin-bottom: -16px;
	margin-left: -56px;
	background-color: var(--color-bg-canvas);
	border: 0;
	border-top: 4px solid var(--color-border-primary);
}
.TimelineItem--condensed {
	padding-top: 4px;
	padding-bottom: 0;
}
.TimelineItem--condensed:last-child {
	padding-bottom: 16px;
}
.TimelineItem--condensed .TimelineItem-badge {
	height: 16px;
	margin-top: 8px;
	margin-bottom: 8px;
	color: var(--color-icon-secondary);
	background-color: var(--color-bg-canvas);
	border: 0;
}
.Toast {
	display: flex;
	margin: 8px;
	color: var(--color-toast-text);
	background-color: var(--color-toast-bg);
	border-radius: 6px;
	box-shadow: inset 0 0 0 1px var(--color-toast-border),
		var(--color-toast-shadow);
}
@media (min-width: 544px) {
	.Toast {
		width: -webkit-max-content;
		width: max-content;
		max-width: 450px;
		margin: 16px;
	}
}
.Toast-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	flex-shrink: 0;
	color: var(--color-toast-icon);
	background-color: var(--color-toast-icon-bg);
	border: 1px solid var(--color-toast-icon-border);
	border-right: 0;
	border-top-left-radius: inherit;
	border-bottom-left-radius: inherit;
}
.Toast-content {
	padding: 16px;
}
.Toast-dismissButton {
	max-height: 54px;
	padding: 16px;
	color: inherit;
	background-color: transparent;
	border: 0;
}
.Toast-dismissButton:focus,
.Toast-dismissButton:hover {
	outline: none;
	opacity: 0.7;
}
.Toast-dismissButton:active {
	opacity: 0.5;
}
.Toast--loading {
	color: var(--color-toast-loading-text);
	box-shadow: inset 0 0 0 1px var(--color-toast-loading-border),
		var(--color-toast-shadow);
}
.Toast--loading .Toast-icon {
	color: var(--color-toast-loading-icon);
	background-color: var(--color-toast-loading-icon-bg);
	border-color: var(--color-toast-loading-icon-border);
}
.Toast--error {
	color: var(--color-toast-danger-text);
	box-shadow: inset 0 0 0 1px var(--color-toast-danger-border),
		var(--color-toast-shadow);
}
.Toast--error .Toast-icon {
	color: var(--color-toast-danger-icon);
	background-color: var(--color-toast-danger-icon-bg);
	border-color: var(--color-toast-danger-icon-border);
}
.Toast--warning {
	color: var(--color-toast-warning-text);
	box-shadow: inset 0 0 0 1px var(--color-toast-warning-border),
		var(--color-toast-shadow);
}
.Toast--warning .Toast-icon {
	color: var(--color-toast-warning-icon);
	background-color: var(--color-toast-warning-icon-bg);
	border-color: var(--color-toast-warning-icon-border);
}
.Toast--success {
	color: var(--color-toast-success-text);
	box-shadow: inset 0 0 0 1px var(--color-toast-success-border),
		var(--color-toast-shadow);
}
.Toast--success .Toast-icon {
	color: var(--color-toast-success-icon);
	background-color: var(--color-toast-success-icon-bg);
	border-color: var(--color-toast-success-icon-border);
}
.Toast--animateIn {
	animation: Toast--animateIn 0.18s cubic-bezier(0.22, 0.61, 0.36, 1)
		backwards;
}
@keyframes Toast--animateIn {
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
}
.Toast--animateOut {
	animation: Toast--animateOut 0.18s cubic-bezier(0.55, 0.06, 0.68, 0.19)
		forwards;
}
@keyframes Toast--animateOut {
	100% {
		pointer-events: none;
		opacity: 0;
		transform: translateY(100%);
	}
}
.Toast--spinner {
	animation: Toast--spinner 1000ms linear infinite;
}
@keyframes Toast--spinner {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
} /*!
 * @primer/css/marketing
 * http://primer.style/css
 *
 * Released under MIT license. Copyright (c) 2019 GitHub Inc.
 */
@font-face {
	font-family: Inter;
	font-style: normal;
	font-weight: 400;
	src: local("Inter"), local("Inter-Regular"),
		url("/fonts/Inter-Regular.woff") format("woff");
	font-display: swap;
}
@font-face {
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	src: local("Inter Medium"), local("Inter-Medium"),
		url("/fonts/Inter-Medium.woff") format("woff");
	font-display: swap;
}
@font-face {
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	src: local("Inter Bold"), local("Inter-Bold"),
		url("/fonts/Inter-Bold.woff") format("woff");
	font-display: swap;
}
.h000-mktg,
.h00-mktg,
.h0-mktg,
.h1-mktg,
.h2-mktg,
.h3-mktg,
.h4-mktg,
.h5-mktg,
.h6-mktg,
.lead-mktg {
	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
		Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		"Segoe UI Symbol";
	font-weight: 500;
}
.h000-mktg {
	font-size: 48px !important;
}
@media (min-width: 768px) {
	.h000-mktg {
		font-size: 64px !important;
	}
}
.h00-mktg {
	font-size: 40px !important;
}
@media (min-width: 768px) {
	.h00-mktg {
		font-size: 48px !important;
	}
}
.h0-mktg {
	font-size: 32px !important;
}
@media (min-width: 768px) {
	.h0-mktg {
		font-size: 40px !important;
	}
}
.h1-mktg {
	font-size: 26px !important;
}
@media (min-width: 768px) {
	.h1-mktg {
		font-size: 32px !important;
	}
}
.h2-mktg {
	font-size: 22px !important;
}
@media (min-width: 768px) {
	.h2-mktg {
		font-size: 24px !important;
	}
}
.h3-mktg {
	font-size: 18px !important;
}
@media (min-width: 768px) {
	.h3-mktg {
		font-size: 20px !important;
	}
}
.h4-mktg {
	font-size: 16px !important;
}
.h5-mktg {
	font-size: 14px !important;
}
.h6-mktg {
	font-size: 12px !important;
}
.lead-mktg {
	font-size: 20px;
	font-weight: 400;
}
.pullquote {
	padding-top: 0;
	padding-bottom: 0;
	padding-left: 8px;
	margin-bottom: 24px;
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
	font-size: 16px;
	line-height: 1.4;
	color: var(--color-color-text-secondary);
	border-left: 3px solid var(--color-border-primary);
}
@media (min-width: 768px) {
	.pullquote {
		padding-left: 12px;
		margin-bottom: 32px;
		margin-left: -15px;
		font-size: 18px;
		line-height: 1.5;
	}
}
.btn-mktg {
	display: inline-block;
	padding: 16px 24px;
	font-size: 14px;
	font-weight: 500;
	color: var(--color-mktg-btn-text);
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: var(--color-mktg-btn-bg);
	border: 1px solid var(--color-mktg-btn-border);
	border-radius: 6px;
	transition-duration: 0.2s;
	transition-property: background-color, border-color, box-shadow;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.btn-mktg:hover {
	text-decoration: none;
	background-color: var(--color-mktg-btn-hover-bg);
	border-color: var(--color-mktg-btn-hover-border);
}
.btn-mktg:focus {
	outline: 0;
	box-shadow: var(--color-mktg-btn-focus-shadow);
}
.btn-mktg:disabled,
.btn-mktg.disabled,
.btn-mktg[aria-disabled="true"] {
	color: var(--color-mktg-btn-disabled-text);
	pointer-events: none;
	cursor: default;
	background-color: var(--color-mktg-btn-disabled-bg);
	border-color: var(--color-mktg-btn-disabled-border);
}
.btn-primary-mktg {
	color: var(--color-mktg-btn-primary-text);
	background-color: var(--color-mktg-btn-primary-bg);
	border-color: var(--color-mktg-btn-primary-border);
}
.btn-primary-mktg:hover {
	background-color: var(--color-mktg-btn-primary-hover-bg);
	border-color: var(--color-mktg-btn-primary-hover-border);
}
.btn-primary-mktg:focus {
	box-shadow: var(--color-mktg-btn-primary-focus-shadow);
}
.btn-primary-mktg:disabled,
.btn-primary-mktg.disabled,
.btn-primary-mktg[aria-disabled="true"] {
	color: var(--color-mktg-btn-primary-disabled-text);
	background-color: var(--color-mktg-btn-primary-disabled-bg);
	border-color: var(--color-mktg-btn-primary-disabled-border);
}
.btn-outline-mktg {
	color: var(--color-mktg-btn-outline-text);
	background-color: var(--color-mktg-btn-outline-bg);
	border-color: var(--color-mktg-btn-outline-border);
}
.btn-outline-mktg:hover {
	color: var(--color-mktg-btn-outline-hover-text);
	background-color: var(--color-mktg-btn-outline-hover-bg);
	border-color: var(--color-mktg-btn-outline-hover-border);
}
.btn-outline-mktg:focus {
	box-shadow: var(--color-mktg-btn-outline-focus-shadow);
}
.btn-outline-mktg:disabled,
.btn-outline-mktg.disabled,
.btn-outline-mktg[aria-disabled="true"] {
	color: var(--color-mktg-btn-outline-disabled-text);
	background-color: var(--color-mktg-btn-outline-disabled-bg);
	border-color: var(--color-mktg-btn-outline-disabled-border);
}
.btn-transparent {
	color: var(--color-mktg-btn-dark-text);
	background-color: var(--color-mktg-btn-dark-bg);
	border-color: var(--color-mktg-btn-dark-border);
}
.btn-transparent:hover {
	color: var(--color-mktg-btn-dark-hover-text);
	background-color: var(--color-mktg-btn-dark-hover-bg);
	border-color: var(--color-mktg-btn-dark-hover-border);
}
.btn-transparent:focus {
	box-shadow: var(--color-mktg-btn-dark-focus-shadow);
}
.btn-transparent:disabled,
.btn-transparent.disabled,
.btn-transparent[aria-disabled="true"] {
	color: var(--color-mktg-btn-dark-disabled-text);
	background-color: var(--color-mktg-btn-dark-disabled-bg);
	border-color: var(--color-mktg-btn-dark-disabled-border);
}
.btn-large-mktg {
	padding: 20px 32px;
	font-size: 16px;
}
.hover-grow-mktg {
	transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-grow-mktg:hover {
	transform: scale3d(1.025, 1.025, 1.025);
}
.grayscale {
	filter: grayscale(100%);
}
.top-0 {
	top: 0 !important;
}
.right-0 {
	right: 0 !important;
}
.bottom-0 {
	bottom: 0 !important;
}
.left-0 {
	left: 0 !important;
}
.top-n0 {
	top: 0 !important;
}
.right-n0 {
	right: 0 !important;
}
.bottom-n0 {
	bottom: 0 !important;
}
.left-n0 {
	left: 0 !important;
}
.top-1 {
	top: 4px !important;
}
.right-1 {
	right: 4px !important;
}
.bottom-1 {
	bottom: 4px !important;
}
.left-1 {
	left: 4px !important;
}
.top-n1 {
	top: -4px !important;
}
.right-n1 {
	right: -4px !important;
}
.bottom-n1 {
	bottom: -4px !important;
}
.left-n1 {
	left: -4px !important;
}
.top-2 {
	top: 8px !important;
}
.right-2 {
	right: 8px !important;
}
.bottom-2 {
	bottom: 8px !important;
}
.left-2 {
	left: 8px !important;
}
.top-n2 {
	top: -8px !important;
}
.right-n2 {
	right: -8px !important;
}
.bottom-n2 {
	bottom: -8px !important;
}
.left-n2 {
	left: -8px !important;
}
.top-3 {
	top: 16px !important;
}
.right-3 {
	right: 16px !important;
}
.bottom-3 {
	bottom: 16px !important;
}
.left-3 {
	left: 16px !important;
}
.top-n3 {
	top: -16px !important;
}
.right-n3 {
	right: -16px !important;
}
.bottom-n3 {
	bottom: -16px !important;
}
.left-n3 {
	left: -16px !important;
}
.top-4 {
	top: 24px !important;
}
.right-4 {
	right: 24px !important;
}
.bottom-4 {
	bottom: 24px !important;
}
.left-4 {
	left: 24px !important;
}
.top-n4 {
	top: -24px !important;
}
.right-n4 {
	right: -24px !important;
}
.bottom-n4 {
	bottom: -24px !important;
}
.left-n4 {
	left: -24px !important;
}
.top-5 {
	top: 32px !important;
}
.right-5 {
	right: 32px !important;
}
.bottom-5 {
	bottom: 32px !important;
}
.left-5 {
	left: 32px !important;
}
.top-n5 {
	top: -32px !important;
}
.right-n5 {
	right: -32px !important;
}
.bottom-n5 {
	bottom: -32px !important;
}
.left-n5 {
	left: -32px !important;
}
.top-6 {
	top: 40px !important;
}
.right-6 {
	right: 40px !important;
}
.bottom-6 {
	bottom: 40px !important;
}
.left-6 {
	left: 40px !important;
}
.top-n6 {
	top: -40px !important;
}
.right-n6 {
	right: -40px !important;
}
.bottom-n6 {
	bottom: -40px !important;
}
.left-n6 {
	left: -40px !important;
}
.top-7 {
	top: 48px !important;
}
.right-7 {
	right: 48px !important;
}
.bottom-7 {
	bottom: 48px !important;
}
.left-7 {
	left: 48px !important;
}
.top-n7 {
	top: -48px !important;
}
.right-n7 {
	right: -48px !important;
}
.bottom-n7 {
	bottom: -48px !important;
}
.left-n7 {
	left: -48px !important;
}
.top-8 {
	top: 64px !important;
}
.right-8 {
	right: 64px !important;
}
.bottom-8 {
	bottom: 64px !important;
}
.left-8 {
	left: 64px !important;
}
.top-n8 {
	top: -64px !important;
}
.right-n8 {
	right: -64px !important;
}
.bottom-n8 {
	bottom: -64px !important;
}
.left-n8 {
	left: -64px !important;
}
.top-9 {
	top: 80px !important;
}
.right-9 {
	right: 80px !important;
}
.bottom-9 {
	bottom: 80px !important;
}
.left-9 {
	left: 80px !important;
}
.top-n9 {
	top: -80px !important;
}
.right-n9 {
	right: -80px !important;
}
.bottom-n9 {
	bottom: -80px !important;
}
.left-n9 {
	left: -80px !important;
}
.top-10 {
	top: 96px !important;
}
.right-10 {
	right: 96px !important;
}
.bottom-10 {
	bottom: 96px !important;
}
.left-10 {
	left: 96px !important;
}
.top-n10 {
	top: -96px !important;
}
.right-n10 {
	right: -96px !important;
}
.bottom-n10 {
	bottom: -96px !important;
}
.left-n10 {
	left: -96px !important;
}
.top-11 {
	top: 112px !important;
}
.right-11 {
	right: 112px !important;
}
.bottom-11 {
	bottom: 112px !important;
}
.left-11 {
	left: 112px !important;
}
.top-n11 {
	top: -112px !important;
}
.right-n11 {
	right: -112px !important;
}
.bottom-n11 {
	bottom: -112px !important;
}
.left-n11 {
	left: -112px !important;
}
.top-12 {
	top: 128px !important;
}
.right-12 {
	right: 128px !important;
}
.bottom-12 {
	bottom: 128px !important;
}
.left-12 {
	left: 128px !important;
}
.top-n12 {
	top: -128px !important;
}
.right-n12 {
	right: -128px !important;
}
.bottom-n12 {
	bottom: -128px !important;
}
.left-n12 {
	left: -128px !important;
}
@media (min-width: 768px) {
	.top-md-0 {
		top: 0 !important;
	}
	.right-md-0 {
		right: 0 !important;
	}
	.bottom-md-0 {
		bottom: 0 !important;
	}
	.left-md-0 {
		left: 0 !important;
	}
	.top-md-n0 {
		top: 0 !important;
	}
	.right-md-n0 {
		right: 0 !important;
	}
	.bottom-md-n0 {
		bottom: 0 !important;
	}
	.left-md-n0 {
		left: 0 !important;
	}
	.top-md-1 {
		top: 4px !important;
	}
	.right-md-1 {
		right: 4px !important;
	}
	.bottom-md-1 {
		bottom: 4px !important;
	}
	.left-md-1 {
		left: 4px !important;
	}
	.top-md-n1 {
		top: -4px !important;
	}
	.right-md-n1 {
		right: -4px !important;
	}
	.bottom-md-n1 {
		bottom: -4px !important;
	}
	.left-md-n1 {
		left: -4px !important;
	}
	.top-md-2 {
		top: 8px !important;
	}
	.right-md-2 {
		right: 8px !important;
	}
	.bottom-md-2 {
		bottom: 8px !important;
	}
	.left-md-2 {
		left: 8px !important;
	}
	.top-md-n2 {
		top: -8px !important;
	}
	.right-md-n2 {
		right: -8px !important;
	}
	.bottom-md-n2 {
		bottom: -8px !important;
	}
	.left-md-n2 {
		left: -8px !important;
	}
	.top-md-3 {
		top: 16px !important;
	}
	.right-md-3 {
		right: 16px !important;
	}
	.bottom-md-3 {
		bottom: 16px !important;
	}
	.left-md-3 {
		left: 16px !important;
	}
	.top-md-n3 {
		top: -16px !important;
	}
	.right-md-n3 {
		right: -16px !important;
	}
	.bottom-md-n3 {
		bottom: -16px !important;
	}
	.left-md-n3 {
		left: -16px !important;
	}
	.top-md-4 {
		top: 24px !important;
	}
	.right-md-4 {
		right: 24px !important;
	}
	.bottom-md-4 {
		bottom: 24px !important;
	}
	.left-md-4 {
		left: 24px !important;
	}
	.top-md-n4 {
		top: -24px !important;
	}
	.right-md-n4 {
		right: -24px !important;
	}
	.bottom-md-n4 {
		bottom: -24px !important;
	}
	.left-md-n4 {
		left: -24px !important;
	}
	.top-md-5 {
		top: 32px !important;
	}
	.right-md-5 {
		right: 32px !important;
	}
	.bottom-md-5 {
		bottom: 32px !important;
	}
	.left-md-5 {
		left: 32px !important;
	}
	.top-md-n5 {
		top: -32px !important;
	}
	.right-md-n5 {
		right: -32px !important;
	}
	.bottom-md-n5 {
		bottom: -32px !important;
	}
	.left-md-n5 {
		left: -32px !important;
	}
	.top-md-6 {
		top: 40px !important;
	}
	.right-md-6 {
		right: 40px !important;
	}
	.bottom-md-6 {
		bottom: 40px !important;
	}
	.left-md-6 {
		left: 40px !important;
	}
	.top-md-n6 {
		top: -40px !important;
	}
	.right-md-n6 {
		right: -40px !important;
	}
	.bottom-md-n6 {
		bottom: -40px !important;
	}
	.left-md-n6 {
		left: -40px !important;
	}
	.top-md-7 {
		top: 48px !important;
	}
	.right-md-7 {
		right: 48px !important;
	}
	.bottom-md-7 {
		bottom: 48px !important;
	}
	.left-md-7 {
		left: 48px !important;
	}
	.top-md-n7 {
		top: -48px !important;
	}
	.right-md-n7 {
		right: -48px !important;
	}
	.bottom-md-n7 {
		bottom: -48px !important;
	}
	.left-md-n7 {
		left: -48px !important;
	}
	.top-md-8 {
		top: 64px !important;
	}
	.right-md-8 {
		right: 64px !important;
	}
	.bottom-md-8 {
		bottom: 64px !important;
	}
	.left-md-8 {
		left: 64px !important;
	}
	.top-md-n8 {
		top: -64px !important;
	}
	.right-md-n8 {
		right: -64px !important;
	}
	.bottom-md-n8 {
		bottom: -64px !important;
	}
	.left-md-n8 {
		left: -64px !important;
	}
	.top-md-9 {
		top: 80px !important;
	}
	.right-md-9 {
		right: 80px !important;
	}
	.bottom-md-9 {
		bottom: 80px !important;
	}
	.left-md-9 {
		left: 80px !important;
	}
	.top-md-n9 {
		top: -80px !important;
	}
	.right-md-n9 {
		right: -80px !important;
	}
	.bottom-md-n9 {
		bottom: -80px !important;
	}
	.left-md-n9 {
		left: -80px !important;
	}
	.top-md-10 {
		top: 96px !important;
	}
	.right-md-10 {
		right: 96px !important;
	}
	.bottom-md-10 {
		bottom: 96px !important;
	}
	.left-md-10 {
		left: 96px !important;
	}
	.top-md-n10 {
		top: -96px !important;
	}
	.right-md-n10 {
		right: -96px !important;
	}
	.bottom-md-n10 {
		bottom: -96px !important;
	}
	.left-md-n10 {
		left: -96px !important;
	}
	.top-md-11 {
		top: 112px !important;
	}
	.right-md-11 {
		right: 112px !important;
	}
	.bottom-md-11 {
		bottom: 112px !important;
	}
	.left-md-11 {
		left: 112px !important;
	}
	.top-md-n11 {
		top: -112px !important;
	}
	.right-md-n11 {
		right: -112px !important;
	}
	.bottom-md-n11 {
		bottom: -112px !important;
	}
	.left-md-n11 {
		left: -112px !important;
	}
	.top-md-12 {
		top: 128px !important;
	}
	.right-md-12 {
		right: 128px !important;
	}
	.bottom-md-12 {
		bottom: 128px !important;
	}
	.left-md-12 {
		left: 128px !important;
	}
	.top-md-n12 {
		top: -128px !important;
	}
	.right-md-n12 {
		right: -128px !important;
	}
	.bottom-md-n12 {
		bottom: -128px !important;
	}
	.left-md-n12 {
		left: -128px !important;
	}
}
@media (min-width: 1012px) {
	.top-lg-0 {
		top: 0 !important;
	}
	.right-lg-0 {
		right: 0 !important;
	}
	.bottom-lg-0 {
		bottom: 0 !important;
	}
	.left-lg-0 {
		left: 0 !important;
	}
	.top-lg-n0 {
		top: 0 !important;
	}
	.right-lg-n0 {
		right: 0 !important;
	}
	.bottom-lg-n0 {
		bottom: 0 !important;
	}
	.left-lg-n0 {
		left: 0 !important;
	}
	.top-lg-1 {
		top: 4px !important;
	}
	.right-lg-1 {
		right: 4px !important;
	}
	.bottom-lg-1 {
		bottom: 4px !important;
	}
	.left-lg-1 {
		left: 4px !important;
	}
	.top-lg-n1 {
		top: -4px !important;
	}
	.right-lg-n1 {
		right: -4px !important;
	}
	.bottom-lg-n1 {
		bottom: -4px !important;
	}
	.left-lg-n1 {
		left: -4px !important;
	}
	.top-lg-2 {
		top: 8px !important;
	}
	.right-lg-2 {
		right: 8px !important;
	}
	.bottom-lg-2 {
		bottom: 8px !important;
	}
	.left-lg-2 {
		left: 8px !important;
	}
	.top-lg-n2 {
		top: -8px !important;
	}
	.right-lg-n2 {
		right: -8px !important;
	}
	.bottom-lg-n2 {
		bottom: -8px !important;
	}
	.left-lg-n2 {
		left: -8px !important;
	}
	.top-lg-3 {
		top: 16px !important;
	}
	.right-lg-3 {
		right: 16px !important;
	}
	.bottom-lg-3 {
		bottom: 16px !important;
	}
	.left-lg-3 {
		left: 16px !important;
	}
	.top-lg-n3 {
		top: -16px !important;
	}
	.right-lg-n3 {
		right: -16px !important;
	}
	.bottom-lg-n3 {
		bottom: -16px !important;
	}
	.left-lg-n3 {
		left: -16px !important;
	}
	.top-lg-4 {
		top: 24px !important;
	}
	.right-lg-4 {
		right: 24px !important;
	}
	.bottom-lg-4 {
		bottom: 24px !important;
	}
	.left-lg-4 {
		left: 24px !important;
	}
	.top-lg-n4 {
		top: -24px !important;
	}
	.right-lg-n4 {
		right: -24px !important;
	}
	.bottom-lg-n4 {
		bottom: -24px !important;
	}
	.left-lg-n4 {
		left: -24px !important;
	}
	.top-lg-5 {
		top: 32px !important;
	}
	.right-lg-5 {
		right: 32px !important;
	}
	.bottom-lg-5 {
		bottom: 32px !important;
	}
	.left-lg-5 {
		left: 32px !important;
	}
	.top-lg-n5 {
		top: -32px !important;
	}
	.right-lg-n5 {
		right: -32px !important;
	}
	.bottom-lg-n5 {
		bottom: -32px !important;
	}
	.left-lg-n5 {
		left: -32px !important;
	}
	.top-lg-6 {
		top: 40px !important;
	}
	.right-lg-6 {
		right: 40px !important;
	}
	.bottom-lg-6 {
		bottom: 40px !important;
	}
	.left-lg-6 {
		left: 40px !important;
	}
	.top-lg-n6 {
		top: -40px !important;
	}
	.right-lg-n6 {
		right: -40px !important;
	}
	.bottom-lg-n6 {
		bottom: -40px !important;
	}
	.left-lg-n6 {
		left: -40px !important;
	}
	.top-lg-7 {
		top: 48px !important;
	}
	.right-lg-7 {
		right: 48px !important;
	}
	.bottom-lg-7 {
		bottom: 48px !important;
	}
	.left-lg-7 {
		left: 48px !important;
	}
	.top-lg-n7 {
		top: -48px !important;
	}
	.right-lg-n7 {
		right: -48px !important;
	}
	.bottom-lg-n7 {
		bottom: -48px !important;
	}
	.left-lg-n7 {
		left: -48px !important;
	}
	.top-lg-8 {
		top: 64px !important;
	}
	.right-lg-8 {
		right: 64px !important;
	}
	.bottom-lg-8 {
		bottom: 64px !important;
	}
	.left-lg-8 {
		left: 64px !important;
	}
	.top-lg-n8 {
		top: -64px !important;
	}
	.right-lg-n8 {
		right: -64px !important;
	}
	.bottom-lg-n8 {
		bottom: -64px !important;
	}
	.left-lg-n8 {
		left: -64px !important;
	}
	.top-lg-9 {
		top: 80px !important;
	}
	.right-lg-9 {
		right: 80px !important;
	}
	.bottom-lg-9 {
		bottom: 80px !important;
	}
	.left-lg-9 {
		left: 80px !important;
	}
	.top-lg-n9 {
		top: -80px !important;
	}
	.right-lg-n9 {
		right: -80px !important;
	}
	.bottom-lg-n9 {
		bottom: -80px !important;
	}
	.left-lg-n9 {
		left: -80px !important;
	}
	.top-lg-10 {
		top: 96px !important;
	}
	.right-lg-10 {
		right: 96px !important;
	}
	.bottom-lg-10 {
		bottom: 96px !important;
	}
	.left-lg-10 {
		left: 96px !important;
	}
	.top-lg-n10 {
		top: -96px !important;
	}
	.right-lg-n10 {
		right: -96px !important;
	}
	.bottom-lg-n10 {
		bottom: -96px !important;
	}
	.left-lg-n10 {
		left: -96px !important;
	}
	.top-lg-11 {
		top: 112px !important;
	}
	.right-lg-11 {
		right: 112px !important;
	}
	.bottom-lg-11 {
		bottom: 112px !important;
	}
	.left-lg-11 {
		left: 112px !important;
	}
	.top-lg-n11 {
		top: -112px !important;
	}
	.right-lg-n11 {
		right: -112px !important;
	}
	.bottom-lg-n11 {
		bottom: -112px !important;
	}
	.left-lg-n11 {
		left: -112px !important;
	}
	.top-lg-12 {
		top: 128px !important;
	}
	.right-lg-12 {
		right: 128px !important;
	}
	.bottom-lg-12 {
		bottom: 128px !important;
	}
	.left-lg-12 {
		left: 128px !important;
	}
	.top-lg-n12 {
		top: -128px !important;
	}
	.right-lg-n12 {
		right: -128px !important;
	}
	.bottom-lg-n12 {
		bottom: -128px !important;
	}
	.left-lg-n12 {
		left: -128px !important;
	}
}
.offset-n1 {
	margin-left: -8.33333%;
}
.offset-n2 {
	margin-left: -16.66667%;
}
.offset-n3 {
	margin-left: -25%;
}
.offset-n4 {
	margin-left: -33.33333%;
}
.offset-n5 {
	margin-left: -41.66667%;
}
.offset-n6 {
	margin-left: -50%;
}
.offset-n7 {
	margin-left: -58.33333%;
}
@media (min-width: 544px) {
	.offset-sm-n1 {
		margin-left: -8.33333%;
	}
	.offset-sm-n2 {
		margin-left: -16.66667%;
	}
	.offset-sm-n3 {
		margin-left: -25%;
	}
	.offset-sm-n4 {
		margin-left: -33.33333%;
	}
	.offset-sm-n5 {
		margin-left: -41.66667%;
	}
	.offset-sm-n6 {
		margin-left: -50%;
	}
	.offset-sm-n7 {
		margin-left: -58.33333%;
	}
}
@media (min-width: 768px) {
	.offset-md-n1 {
		margin-left: -8.33333%;
	}
	.offset-md-n2 {
		margin-left: -16.66667%;
	}
	.offset-md-n3 {
		margin-left: -25%;
	}
	.offset-md-n4 {
		margin-left: -33.33333%;
	}
	.offset-md-n5 {
		margin-left: -41.66667%;
	}
	.offset-md-n6 {
		margin-left: -50%;
	}
	.offset-md-n7 {
		margin-left: -58.33333%;
	}
}
@media (min-width: 1012px) {
	.offset-lg-n1 {
		margin-left: -8.33333%;
	}
	.offset-lg-n2 {
		margin-left: -16.66667%;
	}
	.offset-lg-n3 {
		margin-left: -25%;
	}
	.offset-lg-n4 {
		margin-left: -33.33333%;
	}
	.offset-lg-n5 {
		margin-left: -41.66667%;
	}
	.offset-lg-n6 {
		margin-left: -50%;
	}
	.offset-lg-n7 {
		margin-left: -58.33333%;
	}
}
@media (min-width: 1280px) {
	.offset-xl-n1 {
		margin-left: -8.33333%;
	}
	.offset-xl-n2 {
		margin-left: -16.66667%;
	}
	.offset-xl-n3 {
		margin-left: -25%;
	}
	.offset-xl-n4 {
		margin-left: -33.33333%;
	}
	.offset-xl-n5 {
		margin-left: -41.66667%;
	}
	.offset-xl-n6 {
		margin-left: -50%;
	}
	.offset-xl-n7 {
		margin-left: -58.33333%;
	}
}
.width-auto {
	width: auto !important;
}
.height-auto {
	height: auto !important;
}
.object-fit-cover {
	object-fit: cover !important;
}
.z-1 {
	z-index: 1 !important;
}
.z-2 {
	z-index: 2 !important;
}
.z-3 {
	z-index: 3 !important;
}
.z-n1 {
	z-index: -1 !important;
}
.z-n2 {
	z-index: -2 !important;
}
.mt-0 {
	margin-top: 0 !important;
}
.mb-0 {
	margin-bottom: 0 !important;
}
.mt-n0 {
	margin-top: 0 !important;
}
.mb-n0 {
	margin-bottom: 0 !important;
}
.my-0 {
	margin-top: 0 !important;
	margin-bottom: 0 !important;
}
.mt-1 {
	margin-top: 4px !important;
}
.mb-1 {
	margin-bottom: 4px !important;
}
.mt-n1 {
	margin-top: -4px !important;
}
.mb-n1 {
	margin-bottom: -4px !important;
}
.my-1 {
	margin-top: 4px !important;
	margin-bottom: 4px !important;
}
.mt-2 {
	margin-top: 8px !important;
}
.mb-2 {
	margin-bottom: 8px !important;
}
.mt-n2 {
	margin-top: -8px !important;
}
.mb-n2 {
	margin-bottom: -8px !important;
}
.my-2 {
	margin-top: 8px !important;
	margin-bottom: 8px !important;
}
.mt-3 {
	margin-top: 16px !important;
}
.mb-3 {
	margin-bottom: 16px !important;
}
.mt-n3 {
	margin-top: -16px !important;
}
.mb-n3 {
	margin-bottom: -16px !important;
}
.my-3 {
	margin-top: 16px !important;
	margin-bottom: 16px !important;
}
.mt-4 {
	margin-top: 24px !important;
}
.mb-4 {
	margin-bottom: 24px !important;
}
.mt-n4 {
	margin-top: -24px !important;
}
.mb-n4 {
	margin-bottom: -24px !important;
}
.my-4 {
	margin-top: 24px !important;
	margin-bottom: 24px !important;
}
.mt-5 {
	margin-top: 32px !important;
}
.mb-5 {
	margin-bottom: 32px !important;
}
.mt-n5 {
	margin-top: -32px !important;
}
.mb-n5 {
	margin-bottom: -32px !important;
}
.my-5 {
	margin-top: 32px !important;
	margin-bottom: 32px !important;
}
.mt-6 {
	margin-top: 40px !important;
}
.mb-6 {
	margin-bottom: 40px !important;
}
.mt-n6 {
	margin-top: -40px !important;
}
.mb-n6 {
	margin-bottom: -40px !important;
}
.my-6 {
	margin-top: 40px !important;
	margin-bottom: 40px !important;
}
.mt-7 {
	margin-top: 48px !important;
}
.mb-7 {
	margin-bottom: 48px !important;
}
.mt-n7 {
	margin-top: -48px !important;
}
.mb-n7 {
	margin-bottom: -48px !important;
}
.my-7 {
	margin-top: 48px !important;
	margin-bottom: 48px !important;
}
.mt-8 {
	margin-top: 64px !important;
}
.mb-8 {
	margin-bottom: 64px !important;
}
.mt-n8 {
	margin-top: -64px !important;
}
.mb-n8 {
	margin-bottom: -64px !important;
}
.my-8 {
	margin-top: 64px !important;
	margin-bottom: 64px !important;
}
.mt-9 {
	margin-top: 80px !important;
}
.mb-9 {
	margin-bottom: 80px !important;
}
.mt-n9 {
	margin-top: -80px !important;
}
.mb-n9 {
	margin-bottom: -80px !important;
}
.my-9 {
	margin-top: 80px !important;
	margin-bottom: 80px !important;
}
.mt-10 {
	margin-top: 96px !important;
}
.mb-10 {
	margin-bottom: 96px !important;
}
.mt-n10 {
	margin-top: -96px !important;
}
.mb-n10 {
	margin-bottom: -96px !important;
}
.my-10 {
	margin-top: 96px !important;
	margin-bottom: 96px !important;
}
.mt-11 {
	margin-top: 112px !important;
}
.mb-11 {
	margin-bottom: 112px !important;
}
.mt-n11 {
	margin-top: -112px !important;
}
.mb-n11 {
	margin-bottom: -112px !important;
}
.my-11 {
	margin-top: 112px !important;
	margin-bottom: 112px !important;
}
.mt-12 {
	margin-top: 128px !important;
}
.mb-12 {
	margin-bottom: 128px !important;
}
.mt-n12 {
	margin-top: -128px !important;
}
.mb-n12 {
	margin-bottom: -128px !important;
}
.my-12 {
	margin-top: 128px !important;
	margin-bottom: 128px !important;
}
@media (min-width: 544px) {
	.mt-sm-0 {
		margin-top: 0 !important;
	}
	.mb-sm-0 {
		margin-bottom: 0 !important;
	}
	.mt-sm-n0 {
		margin-top: 0 !important;
	}
	.mb-sm-n0 {
		margin-bottom: 0 !important;
	}
	.my-sm-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.mt-sm-1 {
		margin-top: 4px !important;
	}
	.mb-sm-1 {
		margin-bottom: 4px !important;
	}
	.mt-sm-n1 {
		margin-top: -4px !important;
	}
	.mb-sm-n1 {
		margin-bottom: -4px !important;
	}
	.my-sm-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.mt-sm-2 {
		margin-top: 8px !important;
	}
	.mb-sm-2 {
		margin-bottom: 8px !important;
	}
	.mt-sm-n2 {
		margin-top: -8px !important;
	}
	.mb-sm-n2 {
		margin-bottom: -8px !important;
	}
	.my-sm-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.mt-sm-3 {
		margin-top: 16px !important;
	}
	.mb-sm-3 {
		margin-bottom: 16px !important;
	}
	.mt-sm-n3 {
		margin-top: -16px !important;
	}
	.mb-sm-n3 {
		margin-bottom: -16px !important;
	}
	.my-sm-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.mt-sm-4 {
		margin-top: 24px !important;
	}
	.mb-sm-4 {
		margin-bottom: 24px !important;
	}
	.mt-sm-n4 {
		margin-top: -24px !important;
	}
	.mb-sm-n4 {
		margin-bottom: -24px !important;
	}
	.my-sm-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.mt-sm-5 {
		margin-top: 32px !important;
	}
	.mb-sm-5 {
		margin-bottom: 32px !important;
	}
	.mt-sm-n5 {
		margin-top: -32px !important;
	}
	.mb-sm-n5 {
		margin-bottom: -32px !important;
	}
	.my-sm-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.mt-sm-6 {
		margin-top: 40px !important;
	}
	.mb-sm-6 {
		margin-bottom: 40px !important;
	}
	.mt-sm-n6 {
		margin-top: -40px !important;
	}
	.mb-sm-n6 {
		margin-bottom: -40px !important;
	}
	.my-sm-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mt-sm-7 {
		margin-top: 48px !important;
	}
	.mb-sm-7 {
		margin-bottom: 48px !important;
	}
	.mt-sm-n7 {
		margin-top: -48px !important;
	}
	.mb-sm-n7 {
		margin-bottom: -48px !important;
	}
	.my-sm-7 {
		margin-top: 48px !important;
		margin-bottom: 48px !important;
	}
	.mt-sm-8 {
		margin-top: 64px !important;
	}
	.mb-sm-8 {
		margin-bottom: 64px !important;
	}
	.mt-sm-n8 {
		margin-top: -64px !important;
	}
	.mb-sm-n8 {
		margin-bottom: -64px !important;
	}
	.my-sm-8 {
		margin-top: 64px !important;
		margin-bottom: 64px !important;
	}
	.mt-sm-9 {
		margin-top: 80px !important;
	}
	.mb-sm-9 {
		margin-bottom: 80px !important;
	}
	.mt-sm-n9 {
		margin-top: -80px !important;
	}
	.mb-sm-n9 {
		margin-bottom: -80px !important;
	}
	.my-sm-9 {
		margin-top: 80px !important;
		margin-bottom: 80px !important;
	}
	.mt-sm-10 {
		margin-top: 96px !important;
	}
	.mb-sm-10 {
		margin-bottom: 96px !important;
	}
	.mt-sm-n10 {
		margin-top: -96px !important;
	}
	.mb-sm-n10 {
		margin-bottom: -96px !important;
	}
	.my-sm-10 {
		margin-top: 96px !important;
		margin-bottom: 96px !important;
	}
	.mt-sm-11 {
		margin-top: 112px !important;
	}
	.mb-sm-11 {
		margin-bottom: 112px !important;
	}
	.mt-sm-n11 {
		margin-top: -112px !important;
	}
	.mb-sm-n11 {
		margin-bottom: -112px !important;
	}
	.my-sm-11 {
		margin-top: 112px !important;
		margin-bottom: 112px !important;
	}
	.mt-sm-12 {
		margin-top: 128px !important;
	}
	.mb-sm-12 {
		margin-bottom: 128px !important;
	}
	.mt-sm-n12 {
		margin-top: -128px !important;
	}
	.mb-sm-n12 {
		margin-bottom: -128px !important;
	}
	.my-sm-12 {
		margin-top: 128px !important;
		margin-bottom: 128px !important;
	}
}
@media (min-width: 768px) {
	.mt-md-0 {
		margin-top: 0 !important;
	}
	.mb-md-0 {
		margin-bottom: 0 !important;
	}
	.mt-md-n0 {
		margin-top: 0 !important;
	}
	.mb-md-n0 {
		margin-bottom: 0 !important;
	}
	.my-md-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.mt-md-1 {
		margin-top: 4px !important;
	}
	.mb-md-1 {
		margin-bottom: 4px !important;
	}
	.mt-md-n1 {
		margin-top: -4px !important;
	}
	.mb-md-n1 {
		margin-bottom: -4px !important;
	}
	.my-md-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.mt-md-2 {
		margin-top: 8px !important;
	}
	.mb-md-2 {
		margin-bottom: 8px !important;
	}
	.mt-md-n2 {
		margin-top: -8px !important;
	}
	.mb-md-n2 {
		margin-bottom: -8px !important;
	}
	.my-md-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.mt-md-3 {
		margin-top: 16px !important;
	}
	.mb-md-3 {
		margin-bottom: 16px !important;
	}
	.mt-md-n3 {
		margin-top: -16px !important;
	}
	.mb-md-n3 {
		margin-bottom: -16px !important;
	}
	.my-md-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.mt-md-4 {
		margin-top: 24px !important;
	}
	.mb-md-4 {
		margin-bottom: 24px !important;
	}
	.mt-md-n4 {
		margin-top: -24px !important;
	}
	.mb-md-n4 {
		margin-bottom: -24px !important;
	}
	.my-md-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.mt-md-5 {
		margin-top: 32px !important;
	}
	.mb-md-5 {
		margin-bottom: 32px !important;
	}
	.mt-md-n5 {
		margin-top: -32px !important;
	}
	.mb-md-n5 {
		margin-bottom: -32px !important;
	}
	.my-md-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.mt-md-6 {
		margin-top: 40px !important;
	}
	.mb-md-6 {
		margin-bottom: 40px !important;
	}
	.mt-md-n6 {
		margin-top: -40px !important;
	}
	.mb-md-n6 {
		margin-bottom: -40px !important;
	}
	.my-md-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mt-md-7 {
		margin-top: 48px !important;
	}
	.mb-md-7 {
		margin-bottom: 48px !important;
	}
	.mt-md-n7 {
		margin-top: -48px !important;
	}
	.mb-md-n7 {
		margin-bottom: -48px !important;
	}
	.my-md-7 {
		margin-top: 48px !important;
		margin-bottom: 48px !important;
	}
	.mt-md-8 {
		margin-top: 64px !important;
	}
	.mb-md-8 {
		margin-bottom: 64px !important;
	}
	.mt-md-n8 {
		margin-top: -64px !important;
	}
	.mb-md-n8 {
		margin-bottom: -64px !important;
	}
	.my-md-8 {
		margin-top: 64px !important;
		margin-bottom: 64px !important;
	}
	.mt-md-9 {
		margin-top: 80px !important;
	}
	.mb-md-9 {
		margin-bottom: 80px !important;
	}
	.mt-md-n9 {
		margin-top: -80px !important;
	}
	.mb-md-n9 {
		margin-bottom: -80px !important;
	}
	.my-md-9 {
		margin-top: 80px !important;
		margin-bottom: 80px !important;
	}
	.mt-md-10 {
		margin-top: 96px !important;
	}
	.mb-md-10 {
		margin-bottom: 96px !important;
	}
	.mt-md-n10 {
		margin-top: -96px !important;
	}
	.mb-md-n10 {
		margin-bottom: -96px !important;
	}
	.my-md-10 {
		margin-top: 96px !important;
		margin-bottom: 96px !important;
	}
	.mt-md-11 {
		margin-top: 112px !important;
	}
	.mb-md-11 {
		margin-bottom: 112px !important;
	}
	.mt-md-n11 {
		margin-top: -112px !important;
	}
	.mb-md-n11 {
		margin-bottom: -112px !important;
	}
	.my-md-11 {
		margin-top: 112px !important;
		margin-bottom: 112px !important;
	}
	.mt-md-12 {
		margin-top: 128px !important;
	}
	.mb-md-12 {
		margin-bottom: 128px !important;
	}
	.mt-md-n12 {
		margin-top: -128px !important;
	}
	.mb-md-n12 {
		margin-bottom: -128px !important;
	}
	.my-md-12 {
		margin-top: 128px !important;
		margin-bottom: 128px !important;
	}
}
@media (min-width: 1012px) {
	.mt-lg-0 {
		margin-top: 0 !important;
	}
	.mb-lg-0 {
		margin-bottom: 0 !important;
	}
	.mt-lg-n0 {
		margin-top: 0 !important;
	}
	.mb-lg-n0 {
		margin-bottom: 0 !important;
	}
	.my-lg-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.mt-lg-1 {
		margin-top: 4px !important;
	}
	.mb-lg-1 {
		margin-bottom: 4px !important;
	}
	.mt-lg-n1 {
		margin-top: -4px !important;
	}
	.mb-lg-n1 {
		margin-bottom: -4px !important;
	}
	.my-lg-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.mt-lg-2 {
		margin-top: 8px !important;
	}
	.mb-lg-2 {
		margin-bottom: 8px !important;
	}
	.mt-lg-n2 {
		margin-top: -8px !important;
	}
	.mb-lg-n2 {
		margin-bottom: -8px !important;
	}
	.my-lg-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.mt-lg-3 {
		margin-top: 16px !important;
	}
	.mb-lg-3 {
		margin-bottom: 16px !important;
	}
	.mt-lg-n3 {
		margin-top: -16px !important;
	}
	.mb-lg-n3 {
		margin-bottom: -16px !important;
	}
	.my-lg-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.mt-lg-4 {
		margin-top: 24px !important;
	}
	.mb-lg-4 {
		margin-bottom: 24px !important;
	}
	.mt-lg-n4 {
		margin-top: -24px !important;
	}
	.mb-lg-n4 {
		margin-bottom: -24px !important;
	}
	.my-lg-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.mt-lg-5 {
		margin-top: 32px !important;
	}
	.mb-lg-5 {
		margin-bottom: 32px !important;
	}
	.mt-lg-n5 {
		margin-top: -32px !important;
	}
	.mb-lg-n5 {
		margin-bottom: -32px !important;
	}
	.my-lg-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.mt-lg-6 {
		margin-top: 40px !important;
	}
	.mb-lg-6 {
		margin-bottom: 40px !important;
	}
	.mt-lg-n6 {
		margin-top: -40px !important;
	}
	.mb-lg-n6 {
		margin-bottom: -40px !important;
	}
	.my-lg-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mt-lg-7 {
		margin-top: 48px !important;
	}
	.mb-lg-7 {
		margin-bottom: 48px !important;
	}
	.mt-lg-n7 {
		margin-top: -48px !important;
	}
	.mb-lg-n7 {
		margin-bottom: -48px !important;
	}
	.my-lg-7 {
		margin-top: 48px !important;
		margin-bottom: 48px !important;
	}
	.mt-lg-8 {
		margin-top: 64px !important;
	}
	.mb-lg-8 {
		margin-bottom: 64px !important;
	}
	.mt-lg-n8 {
		margin-top: -64px !important;
	}
	.mb-lg-n8 {
		margin-bottom: -64px !important;
	}
	.my-lg-8 {
		margin-top: 64px !important;
		margin-bottom: 64px !important;
	}
	.mt-lg-9 {
		margin-top: 80px !important;
	}
	.mb-lg-9 {
		margin-bottom: 80px !important;
	}
	.mt-lg-n9 {
		margin-top: -80px !important;
	}
	.mb-lg-n9 {
		margin-bottom: -80px !important;
	}
	.my-lg-9 {
		margin-top: 80px !important;
		margin-bottom: 80px !important;
	}
	.mt-lg-10 {
		margin-top: 96px !important;
	}
	.mb-lg-10 {
		margin-bottom: 96px !important;
	}
	.mt-lg-n10 {
		margin-top: -96px !important;
	}
	.mb-lg-n10 {
		margin-bottom: -96px !important;
	}
	.my-lg-10 {
		margin-top: 96px !important;
		margin-bottom: 96px !important;
	}
	.mt-lg-11 {
		margin-top: 112px !important;
	}
	.mb-lg-11 {
		margin-bottom: 112px !important;
	}
	.mt-lg-n11 {
		margin-top: -112px !important;
	}
	.mb-lg-n11 {
		margin-bottom: -112px !important;
	}
	.my-lg-11 {
		margin-top: 112px !important;
		margin-bottom: 112px !important;
	}
	.mt-lg-12 {
		margin-top: 128px !important;
	}
	.mb-lg-12 {
		margin-bottom: 128px !important;
	}
	.mt-lg-n12 {
		margin-top: -128px !important;
	}
	.mb-lg-n12 {
		margin-bottom: -128px !important;
	}
	.my-lg-12 {
		margin-top: 128px !important;
		margin-bottom: 128px !important;
	}
}
@media (min-width: 1280px) {
	.mt-xl-0 {
		margin-top: 0 !important;
	}
	.mb-xl-0 {
		margin-bottom: 0 !important;
	}
	.mt-xl-n0 {
		margin-top: 0 !important;
	}
	.mb-xl-n0 {
		margin-bottom: 0 !important;
	}
	.my-xl-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.mt-xl-1 {
		margin-top: 4px !important;
	}
	.mb-xl-1 {
		margin-bottom: 4px !important;
	}
	.mt-xl-n1 {
		margin-top: -4px !important;
	}
	.mb-xl-n1 {
		margin-bottom: -4px !important;
	}
	.my-xl-1 {
		margin-top: 4px !important;
		margin-bottom: 4px !important;
	}
	.mt-xl-2 {
		margin-top: 8px !important;
	}
	.mb-xl-2 {
		margin-bottom: 8px !important;
	}
	.mt-xl-n2 {
		margin-top: -8px !important;
	}
	.mb-xl-n2 {
		margin-bottom: -8px !important;
	}
	.my-xl-2 {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	.mt-xl-3 {
		margin-top: 16px !important;
	}
	.mb-xl-3 {
		margin-bottom: 16px !important;
	}
	.mt-xl-n3 {
		margin-top: -16px !important;
	}
	.mb-xl-n3 {
		margin-bottom: -16px !important;
	}
	.my-xl-3 {
		margin-top: 16px !important;
		margin-bottom: 16px !important;
	}
	.mt-xl-4 {
		margin-top: 24px !important;
	}
	.mb-xl-4 {
		margin-bottom: 24px !important;
	}
	.mt-xl-n4 {
		margin-top: -24px !important;
	}
	.mb-xl-n4 {
		margin-bottom: -24px !important;
	}
	.my-xl-4 {
		margin-top: 24px !important;
		margin-bottom: 24px !important;
	}
	.mt-xl-5 {
		margin-top: 32px !important;
	}
	.mb-xl-5 {
		margin-bottom: 32px !important;
	}
	.mt-xl-n5 {
		margin-top: -32px !important;
	}
	.mb-xl-n5 {
		margin-bottom: -32px !important;
	}
	.my-xl-5 {
		margin-top: 32px !important;
		margin-bottom: 32px !important;
	}
	.mt-xl-6 {
		margin-top: 40px !important;
	}
	.mb-xl-6 {
		margin-bottom: 40px !important;
	}
	.mt-xl-n6 {
		margin-top: -40px !important;
	}
	.mb-xl-n6 {
		margin-bottom: -40px !important;
	}
	.my-xl-6 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	.mt-xl-7 {
		margin-top: 48px !important;
	}
	.mb-xl-7 {
		margin-bottom: 48px !important;
	}
	.mt-xl-n7 {
		margin-top: -48px !important;
	}
	.mb-xl-n7 {
		margin-bottom: -48px !important;
	}
	.my-xl-7 {
		margin-top: 48px !important;
		margin-bottom: 48px !important;
	}
	.mt-xl-8 {
		margin-top: 64px !important;
	}
	.mb-xl-8 {
		margin-bottom: 64px !important;
	}
	.mt-xl-n8 {
		margin-top: -64px !important;
	}
	.mb-xl-n8 {
		margin-bottom: -64px !important;
	}
	.my-xl-8 {
		margin-top: 64px !important;
		margin-bottom: 64px !important;
	}
	.mt-xl-9 {
		margin-top: 80px !important;
	}
	.mb-xl-9 {
		margin-bottom: 80px !important;
	}
	.mt-xl-n9 {
		margin-top: -80px !important;
	}
	.mb-xl-n9 {
		margin-bottom: -80px !important;
	}
	.my-xl-9 {
		margin-top: 80px !important;
		margin-bottom: 80px !important;
	}
	.mt-xl-10 {
		margin-top: 96px !important;
	}
	.mb-xl-10 {
		margin-bottom: 96px !important;
	}
	.mt-xl-n10 {
		margin-top: -96px !important;
	}
	.mb-xl-n10 {
		margin-bottom: -96px !important;
	}
	.my-xl-10 {
		margin-top: 96px !important;
		margin-bottom: 96px !important;
	}
	.mt-xl-11 {
		margin-top: 112px !important;
	}
	.mb-xl-11 {
		margin-bottom: 112px !important;
	}
	.mt-xl-n11 {
		margin-top: -112px !important;
	}
	.mb-xl-n11 {
		margin-bottom: -112px !important;
	}
	.my-xl-11 {
		margin-top: 112px !important;
		margin-bottom: 112px !important;
	}
	.mt-xl-12 {
		margin-top: 128px !important;
	}
	.mb-xl-12 {
		margin-bottom: 128px !important;
	}
	.mt-xl-n12 {
		margin-top: -128px !important;
	}
	.mb-xl-n12 {
		margin-bottom: -128px !important;
	}
	.my-xl-12 {
		margin-top: 128px !important;
		margin-bottom: 128px !important;
	}
}
.mt-auto {
	margin-top: auto !important;
}
.m-auto {
	margin: auto !important;
}
.bg-shade-gradient {
	background-image: linear-gradient(
		180deg,
		var(--color-mktg-bg-shade-gradient-top),
		var(--color-mktg-bg-shade-gradient-bottom)
	) !important;
	background-repeat: no-repeat !important;
	background-size: 100% 200px !important;
}
.p-0 {
	padding: 0 !important;
}
.pt-0 {
	padding-top: 0 !important;
}
.pr-0 {
	padding-right: 0 !important;
}
.pb-0 {
	padding-bottom: 0 !important;
}
.pl-0 {
	padding-left: 0 !important;
}
.py-0 {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
.p-1 {
	padding: 4px !important;
}
.pt-1 {
	padding-top: 4px !important;
}
.pr-1 {
	padding-right: 4px !important;
}
.pb-1 {
	padding-bottom: 4px !important;
}
.pl-1 {
	padding-left: 4px !important;
}
.py-1 {
	padding-top: 4px !important;
	padding-bottom: 4px !important;
}
.p-2 {
	padding: 8px !important;
}
.pt-2 {
	padding-top: 8px !important;
}
.pr-2 {
	padding-right: 8px !important;
}
.pb-2 {
	padding-bottom: 8px !important;
}
.pl-2 {
	padding-left: 8px !important;
}
.py-2 {
	padding-top: 8px !important;
	padding-bottom: 8px !important;
}
.p-3 {
	padding: 16px !important;
}
.pt-3 {
	padding-top: 16px !important;
}
.pr-3 {
	padding-right: 16px !important;
}
.pb-3 {
	padding-bottom: 16px !important;
}
.pl-3 {
	padding-left: 16px !important;
}
.py-3 {
	padding-top: 16px !important;
	padding-bottom: 16px !important;
}
.p-4 {
	padding: 24px !important;
}
.pt-4 {
	padding-top: 24px !important;
}
.pr-4 {
	padding-right: 24px !important;
}
.pb-4 {
	padding-bottom: 24px !important;
}
.pl-4 {
	padding-left: 24px !important;
}
.py-4 {
	padding-top: 24px !important;
	padding-bottom: 24px !important;
}
.p-5 {
	padding: 32px !important;
}
.pt-5 {
	padding-top: 32px !important;
}
.pr-5 {
	padding-right: 32px !important;
}
.pb-5 {
	padding-bottom: 32px !important;
}
.pl-5 {
	padding-left: 32px !important;
}
.py-5 {
	padding-top: 32px !important;
	padding-bottom: 32px !important;
}
.p-6 {
	padding: 40px !important;
}
.pt-6 {
	padding-top: 40px !important;
}
.pr-6 {
	padding-right: 40px !important;
}
.pb-6 {
	padding-bottom: 40px !important;
}
.pl-6 {
	padding-left: 40px !important;
}
.py-6 {
	padding-top: 40px !important;
	padding-bottom: 40px !important;
}
.p-7 {
	padding: 48px !important;
}
.pt-7 {
	padding-top: 48px !important;
}
.pr-7 {
	padding-right: 48px !important;
}
.pb-7 {
	padding-bottom: 48px !important;
}
.pl-7 {
	padding-left: 48px !important;
}
.py-7 {
	padding-top: 48px !important;
	padding-bottom: 48px !important;
}
.p-8 {
	padding: 64px !important;
}
.pt-8 {
	padding-top: 64px !important;
}
.pr-8 {
	padding-right: 64px !important;
}
.pb-8 {
	padding-bottom: 64px !important;
}
.pl-8 {
	padding-left: 64px !important;
}
.py-8 {
	padding-top: 64px !important;
	padding-bottom: 64px !important;
}
.p-9 {
	padding: 80px !important;
}
.pt-9 {
	padding-top: 80px !important;
}
.pr-9 {
	padding-right: 80px !important;
}
.pb-9 {
	padding-bottom: 80px !important;
}
.pl-9 {
	padding-left: 80px !important;
}
.py-9 {
	padding-top: 80px !important;
	padding-bottom: 80px !important;
}
.p-10 {
	padding: 96px !important;
}
.pt-10 {
	padding-top: 96px !important;
}
.pr-10 {
	padding-right: 96px !important;
}
.pb-10 {
	padding-bottom: 96px !important;
}
.pl-10 {
	padding-left: 96px !important;
}
.py-10 {
	padding-top: 96px !important;
	padding-bottom: 96px !important;
}
.p-11 {
	padding: 112px !important;
}
.pt-11 {
	padding-top: 112px !important;
}
.pr-11 {
	padding-right: 112px !important;
}
.pb-11 {
	padding-bottom: 112px !important;
}
.pl-11 {
	padding-left: 112px !important;
}
.py-11 {
	padding-top: 112px !important;
	padding-bottom: 112px !important;
}
.p-12 {
	padding: 128px !important;
}
.pt-12 {
	padding-top: 128px !important;
}
.pr-12 {
	padding-right: 128px !important;
}
.pb-12 {
	padding-bottom: 128px !important;
}
.pl-12 {
	padding-left: 128px !important;
}
.py-12 {
	padding-top: 128px !important;
	padding-bottom: 128px !important;
}
@media (min-width: 544px) {
	.p-sm-0 {
		padding: 0 !important;
	}
	.pt-sm-0 {
		padding-top: 0 !important;
	}
	.pr-sm-0 {
		padding-right: 0 !important;
	}
	.pb-sm-0 {
		padding-bottom: 0 !important;
	}
	.pl-sm-0 {
		padding-left: 0 !important;
	}
	.py-sm-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-sm-1 {
		padding: 4px !important;
	}
	.pt-sm-1 {
		padding-top: 4px !important;
	}
	.pr-sm-1 {
		padding-right: 4px !important;
	}
	.pb-sm-1 {
		padding-bottom: 4px !important;
	}
	.pl-sm-1 {
		padding-left: 4px !important;
	}
	.py-sm-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-sm-2 {
		padding: 8px !important;
	}
	.pt-sm-2 {
		padding-top: 8px !important;
	}
	.pr-sm-2 {
		padding-right: 8px !important;
	}
	.pb-sm-2 {
		padding-bottom: 8px !important;
	}
	.pl-sm-2 {
		padding-left: 8px !important;
	}
	.py-sm-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-sm-3 {
		padding: 16px !important;
	}
	.pt-sm-3 {
		padding-top: 16px !important;
	}
	.pr-sm-3 {
		padding-right: 16px !important;
	}
	.pb-sm-3 {
		padding-bottom: 16px !important;
	}
	.pl-sm-3 {
		padding-left: 16px !important;
	}
	.py-sm-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-sm-4 {
		padding: 24px !important;
	}
	.pt-sm-4 {
		padding-top: 24px !important;
	}
	.pr-sm-4 {
		padding-right: 24px !important;
	}
	.pb-sm-4 {
		padding-bottom: 24px !important;
	}
	.pl-sm-4 {
		padding-left: 24px !important;
	}
	.py-sm-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-sm-5 {
		padding: 32px !important;
	}
	.pt-sm-5 {
		padding-top: 32px !important;
	}
	.pr-sm-5 {
		padding-right: 32px !important;
	}
	.pb-sm-5 {
		padding-bottom: 32px !important;
	}
	.pl-sm-5 {
		padding-left: 32px !important;
	}
	.py-sm-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-sm-6 {
		padding: 40px !important;
	}
	.pt-sm-6 {
		padding-top: 40px !important;
	}
	.pr-sm-6 {
		padding-right: 40px !important;
	}
	.pb-sm-6 {
		padding-bottom: 40px !important;
	}
	.pl-sm-6 {
		padding-left: 40px !important;
	}
	.py-sm-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
	.p-sm-7 {
		padding: 48px !important;
	}
	.pt-sm-7 {
		padding-top: 48px !important;
	}
	.pr-sm-7 {
		padding-right: 48px !important;
	}
	.pb-sm-7 {
		padding-bottom: 48px !important;
	}
	.pl-sm-7 {
		padding-left: 48px !important;
	}
	.py-sm-7 {
		padding-top: 48px !important;
		padding-bottom: 48px !important;
	}
	.p-sm-8 {
		padding: 64px !important;
	}
	.pt-sm-8 {
		padding-top: 64px !important;
	}
	.pr-sm-8 {
		padding-right: 64px !important;
	}
	.pb-sm-8 {
		padding-bottom: 64px !important;
	}
	.pl-sm-8 {
		padding-left: 64px !important;
	}
	.py-sm-8 {
		padding-top: 64px !important;
		padding-bottom: 64px !important;
	}
	.p-sm-9 {
		padding: 80px !important;
	}
	.pt-sm-9 {
		padding-top: 80px !important;
	}
	.pr-sm-9 {
		padding-right: 80px !important;
	}
	.pb-sm-9 {
		padding-bottom: 80px !important;
	}
	.pl-sm-9 {
		padding-left: 80px !important;
	}
	.py-sm-9 {
		padding-top: 80px !important;
		padding-bottom: 80px !important;
	}
	.p-sm-10 {
		padding: 96px !important;
	}
	.pt-sm-10 {
		padding-top: 96px !important;
	}
	.pr-sm-10 {
		padding-right: 96px !important;
	}
	.pb-sm-10 {
		padding-bottom: 96px !important;
	}
	.pl-sm-10 {
		padding-left: 96px !important;
	}
	.py-sm-10 {
		padding-top: 96px !important;
		padding-bottom: 96px !important;
	}
	.p-sm-11 {
		padding: 112px !important;
	}
	.pt-sm-11 {
		padding-top: 112px !important;
	}
	.pr-sm-11 {
		padding-right: 112px !important;
	}
	.pb-sm-11 {
		padding-bottom: 112px !important;
	}
	.pl-sm-11 {
		padding-left: 112px !important;
	}
	.py-sm-11 {
		padding-top: 112px !important;
		padding-bottom: 112px !important;
	}
	.p-sm-12 {
		padding: 128px !important;
	}
	.pt-sm-12 {
		padding-top: 128px !important;
	}
	.pr-sm-12 {
		padding-right: 128px !important;
	}
	.pb-sm-12 {
		padding-bottom: 128px !important;
	}
	.pl-sm-12 {
		padding-left: 128px !important;
	}
	.py-sm-12 {
		padding-top: 128px !important;
		padding-bottom: 128px !important;
	}
}
@media (min-width: 768px) {
	.p-md-0 {
		padding: 0 !important;
	}
	.pt-md-0 {
		padding-top: 0 !important;
	}
	.pr-md-0 {
		padding-right: 0 !important;
	}
	.pb-md-0 {
		padding-bottom: 0 !important;
	}
	.pl-md-0 {
		padding-left: 0 !important;
	}
	.py-md-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-md-1 {
		padding: 4px !important;
	}
	.pt-md-1 {
		padding-top: 4px !important;
	}
	.pr-md-1 {
		padding-right: 4px !important;
	}
	.pb-md-1 {
		padding-bottom: 4px !important;
	}
	.pl-md-1 {
		padding-left: 4px !important;
	}
	.py-md-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-md-2 {
		padding: 8px !important;
	}
	.pt-md-2 {
		padding-top: 8px !important;
	}
	.pr-md-2 {
		padding-right: 8px !important;
	}
	.pb-md-2 {
		padding-bottom: 8px !important;
	}
	.pl-md-2 {
		padding-left: 8px !important;
	}
	.py-md-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-md-3 {
		padding: 16px !important;
	}
	.pt-md-3 {
		padding-top: 16px !important;
	}
	.pr-md-3 {
		padding-right: 16px !important;
	}
	.pb-md-3 {
		padding-bottom: 16px !important;
	}
	.pl-md-3 {
		padding-left: 16px !important;
	}
	.py-md-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-md-4 {
		padding: 24px !important;
	}
	.pt-md-4 {
		padding-top: 24px !important;
	}
	.pr-md-4 {
		padding-right: 24px !important;
	}
	.pb-md-4 {
		padding-bottom: 24px !important;
	}
	.pl-md-4 {
		padding-left: 24px !important;
	}
	.py-md-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-md-5 {
		padding: 32px !important;
	}
	.pt-md-5 {
		padding-top: 32px !important;
	}
	.pr-md-5 {
		padding-right: 32px !important;
	}
	.pb-md-5 {
		padding-bottom: 32px !important;
	}
	.pl-md-5 {
		padding-left: 32px !important;
	}
	.py-md-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-md-6 {
		padding: 40px !important;
	}
	.pt-md-6 {
		padding-top: 40px !important;
	}
	.pr-md-6 {
		padding-right: 40px !important;
	}
	.pb-md-6 {
		padding-bottom: 40px !important;
	}
	.pl-md-6 {
		padding-left: 40px !important;
	}
	.py-md-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
	.p-md-7 {
		padding: 48px !important;
	}
	.pt-md-7 {
		padding-top: 48px !important;
	}
	.pr-md-7 {
		padding-right: 48px !important;
	}
	.pb-md-7 {
		padding-bottom: 48px !important;
	}
	.pl-md-7 {
		padding-left: 48px !important;
	}
	.py-md-7 {
		padding-top: 48px !important;
		padding-bottom: 48px !important;
	}
	.p-md-8 {
		padding: 64px !important;
	}
	.pt-md-8 {
		padding-top: 64px !important;
	}
	.pr-md-8 {
		padding-right: 64px !important;
	}
	.pb-md-8 {
		padding-bottom: 64px !important;
	}
	.pl-md-8 {
		padding-left: 64px !important;
	}
	.py-md-8 {
		padding-top: 64px !important;
		padding-bottom: 64px !important;
	}
	.p-md-9 {
		padding: 80px !important;
	}
	.pt-md-9 {
		padding-top: 80px !important;
	}
	.pr-md-9 {
		padding-right: 80px !important;
	}
	.pb-md-9 {
		padding-bottom: 80px !important;
	}
	.pl-md-9 {
		padding-left: 80px !important;
	}
	.py-md-9 {
		padding-top: 80px !important;
		padding-bottom: 80px !important;
	}
	.p-md-10 {
		padding: 96px !important;
	}
	.pt-md-10 {
		padding-top: 96px !important;
	}
	.pr-md-10 {
		padding-right: 96px !important;
	}
	.pb-md-10 {
		padding-bottom: 96px !important;
	}
	.pl-md-10 {
		padding-left: 96px !important;
	}
	.py-md-10 {
		padding-top: 96px !important;
		padding-bottom: 96px !important;
	}
	.p-md-11 {
		padding: 112px !important;
	}
	.pt-md-11 {
		padding-top: 112px !important;
	}
	.pr-md-11 {
		padding-right: 112px !important;
	}
	.pb-md-11 {
		padding-bottom: 112px !important;
	}
	.pl-md-11 {
		padding-left: 112px !important;
	}
	.py-md-11 {
		padding-top: 112px !important;
		padding-bottom: 112px !important;
	}
	.p-md-12 {
		padding: 128px !important;
	}
	.pt-md-12 {
		padding-top: 128px !important;
	}
	.pr-md-12 {
		padding-right: 128px !important;
	}
	.pb-md-12 {
		padding-bottom: 128px !important;
	}
	.pl-md-12 {
		padding-left: 128px !important;
	}
	.py-md-12 {
		padding-top: 128px !important;
		padding-bottom: 128px !important;
	}
}
@media (min-width: 1012px) {
	.p-lg-0 {
		padding: 0 !important;
	}
	.pt-lg-0 {
		padding-top: 0 !important;
	}
	.pr-lg-0 {
		padding-right: 0 !important;
	}
	.pb-lg-0 {
		padding-bottom: 0 !important;
	}
	.pl-lg-0 {
		padding-left: 0 !important;
	}
	.py-lg-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-lg-1 {
		padding: 4px !important;
	}
	.pt-lg-1 {
		padding-top: 4px !important;
	}
	.pr-lg-1 {
		padding-right: 4px !important;
	}
	.pb-lg-1 {
		padding-bottom: 4px !important;
	}
	.pl-lg-1 {
		padding-left: 4px !important;
	}
	.py-lg-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-lg-2 {
		padding: 8px !important;
	}
	.pt-lg-2 {
		padding-top: 8px !important;
	}
	.pr-lg-2 {
		padding-right: 8px !important;
	}
	.pb-lg-2 {
		padding-bottom: 8px !important;
	}
	.pl-lg-2 {
		padding-left: 8px !important;
	}
	.py-lg-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-lg-3 {
		padding: 16px !important;
	}
	.pt-lg-3 {
		padding-top: 16px !important;
	}
	.pr-lg-3 {
		padding-right: 16px !important;
	}
	.pb-lg-3 {
		padding-bottom: 16px !important;
	}
	.pl-lg-3 {
		padding-left: 16px !important;
	}
	.py-lg-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-lg-4 {
		padding: 24px !important;
	}
	.pt-lg-4 {
		padding-top: 24px !important;
	}
	.pr-lg-4 {
		padding-right: 24px !important;
	}
	.pb-lg-4 {
		padding-bottom: 24px !important;
	}
	.pl-lg-4 {
		padding-left: 24px !important;
	}
	.py-lg-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-lg-5 {
		padding: 32px !important;
	}
	.pt-lg-5 {
		padding-top: 32px !important;
	}
	.pr-lg-5 {
		padding-right: 32px !important;
	}
	.pb-lg-5 {
		padding-bottom: 32px !important;
	}
	.pl-lg-5 {
		padding-left: 32px !important;
	}
	.py-lg-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-lg-6 {
		padding: 40px !important;
	}
	.pt-lg-6 {
		padding-top: 40px !important;
	}
	.pr-lg-6 {
		padding-right: 40px !important;
	}
	.pb-lg-6 {
		padding-bottom: 40px !important;
	}
	.pl-lg-6 {
		padding-left: 40px !important;
	}
	.py-lg-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
	.p-lg-7 {
		padding: 48px !important;
	}
	.pt-lg-7 {
		padding-top: 48px !important;
	}
	.pr-lg-7 {
		padding-right: 48px !important;
	}
	.pb-lg-7 {
		padding-bottom: 48px !important;
	}
	.pl-lg-7 {
		padding-left: 48px !important;
	}
	.py-lg-7 {
		padding-top: 48px !important;
		padding-bottom: 48px !important;
	}
	.p-lg-8 {
		padding: 64px !important;
	}
	.pt-lg-8 {
		padding-top: 64px !important;
	}
	.pr-lg-8 {
		padding-right: 64px !important;
	}
	.pb-lg-8 {
		padding-bottom: 64px !important;
	}
	.pl-lg-8 {
		padding-left: 64px !important;
	}
	.py-lg-8 {
		padding-top: 64px !important;
		padding-bottom: 64px !important;
	}
	.p-lg-9 {
		padding: 80px !important;
	}
	.pt-lg-9 {
		padding-top: 80px !important;
	}
	.pr-lg-9 {
		padding-right: 80px !important;
	}
	.pb-lg-9 {
		padding-bottom: 80px !important;
	}
	.pl-lg-9 {
		padding-left: 80px !important;
	}
	.py-lg-9 {
		padding-top: 80px !important;
		padding-bottom: 80px !important;
	}
	.p-lg-10 {
		padding: 96px !important;
	}
	.pt-lg-10 {
		padding-top: 96px !important;
	}
	.pr-lg-10 {
		padding-right: 96px !important;
	}
	.pb-lg-10 {
		padding-bottom: 96px !important;
	}
	.pl-lg-10 {
		padding-left: 96px !important;
	}
	.py-lg-10 {
		padding-top: 96px !important;
		padding-bottom: 96px !important;
	}
	.p-lg-11 {
		padding: 112px !important;
	}
	.pt-lg-11 {
		padding-top: 112px !important;
	}
	.pr-lg-11 {
		padding-right: 112px !important;
	}
	.pb-lg-11 {
		padding-bottom: 112px !important;
	}
	.pl-lg-11 {
		padding-left: 112px !important;
	}
	.py-lg-11 {
		padding-top: 112px !important;
		padding-bottom: 112px !important;
	}
	.p-lg-12 {
		padding: 128px !important;
	}
	.pt-lg-12 {
		padding-top: 128px !important;
	}
	.pr-lg-12 {
		padding-right: 128px !important;
	}
	.pb-lg-12 {
		padding-bottom: 128px !important;
	}
	.pl-lg-12 {
		padding-left: 128px !important;
	}
	.py-lg-12 {
		padding-top: 128px !important;
		padding-bottom: 128px !important;
	}
}
@media (min-width: 1280px) {
	.p-xl-0 {
		padding: 0 !important;
	}
	.pt-xl-0 {
		padding-top: 0 !important;
	}
	.pr-xl-0 {
		padding-right: 0 !important;
	}
	.pb-xl-0 {
		padding-bottom: 0 !important;
	}
	.pl-xl-0 {
		padding-left: 0 !important;
	}
	.py-xl-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.p-xl-1 {
		padding: 4px !important;
	}
	.pt-xl-1 {
		padding-top: 4px !important;
	}
	.pr-xl-1 {
		padding-right: 4px !important;
	}
	.pb-xl-1 {
		padding-bottom: 4px !important;
	}
	.pl-xl-1 {
		padding-left: 4px !important;
	}
	.py-xl-1 {
		padding-top: 4px !important;
		padding-bottom: 4px !important;
	}
	.p-xl-2 {
		padding: 8px !important;
	}
	.pt-xl-2 {
		padding-top: 8px !important;
	}
	.pr-xl-2 {
		padding-right: 8px !important;
	}
	.pb-xl-2 {
		padding-bottom: 8px !important;
	}
	.pl-xl-2 {
		padding-left: 8px !important;
	}
	.py-xl-2 {
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.p-xl-3 {
		padding: 16px !important;
	}
	.pt-xl-3 {
		padding-top: 16px !important;
	}
	.pr-xl-3 {
		padding-right: 16px !important;
	}
	.pb-xl-3 {
		padding-bottom: 16px !important;
	}
	.pl-xl-3 {
		padding-left: 16px !important;
	}
	.py-xl-3 {
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.p-xl-4 {
		padding: 24px !important;
	}
	.pt-xl-4 {
		padding-top: 24px !important;
	}
	.pr-xl-4 {
		padding-right: 24px !important;
	}
	.pb-xl-4 {
		padding-bottom: 24px !important;
	}
	.pl-xl-4 {
		padding-left: 24px !important;
	}
	.py-xl-4 {
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.p-xl-5 {
		padding: 32px !important;
	}
	.pt-xl-5 {
		padding-top: 32px !important;
	}
	.pr-xl-5 {
		padding-right: 32px !important;
	}
	.pb-xl-5 {
		padding-bottom: 32px !important;
	}
	.pl-xl-5 {
		padding-left: 32px !important;
	}
	.py-xl-5 {
		padding-top: 32px !important;
		padding-bottom: 32px !important;
	}
	.p-xl-6 {
		padding: 40px !important;
	}
	.pt-xl-6 {
		padding-top: 40px !important;
	}
	.pr-xl-6 {
		padding-right: 40px !important;
	}
	.pb-xl-6 {
		padding-bottom: 40px !important;
	}
	.pl-xl-6 {
		padding-left: 40px !important;
	}
	.py-xl-6 {
		padding-top: 40px !important;
		padding-bottom: 40px !important;
	}
	.p-xl-7 {
		padding: 48px !important;
	}
	.pt-xl-7 {
		padding-top: 48px !important;
	}
	.pr-xl-7 {
		padding-right: 48px !important;
	}
	.pb-xl-7 {
		padding-bottom: 48px !important;
	}
	.pl-xl-7 {
		padding-left: 48px !important;
	}
	.py-xl-7 {
		padding-top: 48px !important;
		padding-bottom: 48px !important;
	}
	.p-xl-8 {
		padding: 64px !important;
	}
	.pt-xl-8 {
		padding-top: 64px !important;
	}
	.pr-xl-8 {
		padding-right: 64px !important;
	}
	.pb-xl-8 {
		padding-bottom: 64px !important;
	}
	.pl-xl-8 {
		padding-left: 64px !important;
	}
	.py-xl-8 {
		padding-top: 64px !important;
		padding-bottom: 64px !important;
	}
	.p-xl-9 {
		padding: 80px !important;
	}
	.pt-xl-9 {
		padding-top: 80px !important;
	}
	.pr-xl-9 {
		padding-right: 80px !important;
	}
	.pb-xl-9 {
		padding-bottom: 80px !important;
	}
	.pl-xl-9 {
		padding-left: 80px !important;
	}
	.py-xl-9 {
		padding-top: 80px !important;
		padding-bottom: 80px !important;
	}
	.p-xl-10 {
		padding: 96px !important;
	}
	.pt-xl-10 {
		padding-top: 96px !important;
	}
	.pr-xl-10 {
		padding-right: 96px !important;
	}
	.pb-xl-10 {
		padding-bottom: 96px !important;
	}
	.pl-xl-10 {
		padding-left: 96px !important;
	}
	.py-xl-10 {
		padding-top: 96px !important;
		padding-bottom: 96px !important;
	}
	.p-xl-11 {
		padding: 112px !important;
	}
	.pt-xl-11 {
		padding-top: 112px !important;
	}
	.pr-xl-11 {
		padding-right: 112px !important;
	}
	.pb-xl-11 {
		padding-bottom: 112px !important;
	}
	.pl-xl-11 {
		padding-left: 112px !important;
	}
	.py-xl-11 {
		padding-top: 112px !important;
		padding-bottom: 112px !important;
	}
	.p-xl-12 {
		padding: 128px !important;
	}
	.pt-xl-12 {
		padding-top: 128px !important;
	}
	.pr-xl-12 {
		padding-right: 128px !important;
	}
	.pb-xl-12 {
		padding-bottom: 128px !important;
	}
	.pl-xl-12 {
		padding-left: 128px !important;
	}
	.py-xl-12 {
		padding-top: 128px !important;
		padding-bottom: 128px !important;
	}
}

/*# sourceMappingURL=primer.css.map */
`