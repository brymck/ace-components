import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

// All keybindings
import 'brace/keybinding/emacs';
import 'brace/keybinding/vim';

// All modes
import 'brace/mode/abap';
import 'brace/mode/abc';
import 'brace/mode/actionscript';
import 'brace/mode/ada';
import 'brace/mode/apache_conf';
import 'brace/mode/applescript';
import 'brace/mode/asciidoc';
import 'brace/mode/assembly_x86';
import 'brace/mode/autohotkey';
import 'brace/mode/batchfile';
import 'brace/mode/bro';
import 'brace/mode/c9search';
import 'brace/mode/c_cpp';
import 'brace/mode/cirru';
import 'brace/mode/clojure';
import 'brace/mode/cobol';
import 'brace/mode/coffee';
import 'brace/mode/coldfusion';
import 'brace/mode/csharp';
import 'brace/mode/csound_document';
import 'brace/mode/csound_orchestra';
import 'brace/mode/csound_score';
import 'brace/mode/css';
import 'brace/mode/curly';
import 'brace/mode/d';
import 'brace/mode/dart';
import 'brace/mode/diff';
import 'brace/mode/django';
import 'brace/mode/dockerfile';
import 'brace/mode/dot';
import 'brace/mode/drools';
import 'brace/mode/eiffel';
import 'brace/mode/ejs';
import 'brace/mode/elixir';
import 'brace/mode/elm';
import 'brace/mode/erlang';
import 'brace/mode/forth';
import 'brace/mode/fortran';
import 'brace/mode/ftl';
import 'brace/mode/gcode';
import 'brace/mode/gherkin';
import 'brace/mode/gitignore';
import 'brace/mode/glsl';
import 'brace/mode/gobstones';
import 'brace/mode/golang';
import 'brace/mode/graphqlschema';
import 'brace/mode/groovy';
import 'brace/mode/haml';
import 'brace/mode/handlebars';
import 'brace/mode/haskell';
import 'brace/mode/haskell_cabal';
import 'brace/mode/haxe';
import 'brace/mode/hjson';
import 'brace/mode/html';
import 'brace/mode/html_elixir';
import 'brace/mode/html_ruby';
import 'brace/mode/ini';
import 'brace/mode/io';
import 'brace/mode/jack';
import 'brace/mode/jade';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/jsoniq';
import 'brace/mode/jsp';
import 'brace/mode/jssm';
import 'brace/mode/jsx';
import 'brace/mode/julia';
import 'brace/mode/kotlin';
import 'brace/mode/latex';
import 'brace/mode/lean';
import 'brace/mode/less';
import 'brace/mode/liquid';
import 'brace/mode/lisp';
import 'brace/mode/live_script';
import 'brace/mode/livescript';
import 'brace/mode/logiql';
import 'brace/mode/lsl';
import 'brace/mode/lua';
import 'brace/mode/luapage';
import 'brace/mode/lucene';
import 'brace/mode/makefile';
import 'brace/mode/markdown';
import 'brace/mode/mask';
import 'brace/mode/matlab';
import 'brace/mode/mavens_mate_log';
import 'brace/mode/maze';
import 'brace/mode/mel';
import 'brace/mode/mips_assembler';
import 'brace/mode/mipsassembler';
import 'brace/mode/mushcode';
import 'brace/mode/mysql';
import 'brace/mode/nix';
import 'brace/mode/nsis';
import 'brace/mode/objectivec';
import 'brace/mode/ocaml';
import 'brace/mode/pascal';
import 'brace/mode/perl';
import 'brace/mode/pgsql';
import 'brace/mode/php';
import 'brace/mode/pig';
import 'brace/mode/plain_text';
import 'brace/mode/powershell';
import 'brace/mode/praat';
import 'brace/mode/prolog';
import 'brace/mode/properties';
import 'brace/mode/protobuf';
import 'brace/mode/python';
import 'brace/mode/r';
import 'brace/mode/razor';
import 'brace/mode/rdoc';
import 'brace/mode/red';
import 'brace/mode/rhtml';
import 'brace/mode/rst';
import 'brace/mode/ruby';
import 'brace/mode/rust';
import 'brace/mode/sass';
import 'brace/mode/scad';
import 'brace/mode/scala';
import 'brace/mode/scheme';
import 'brace/mode/scss';
import 'brace/mode/sh';
import 'brace/mode/sjs';
import 'brace/mode/smarty';
import 'brace/mode/snippets';
import 'brace/mode/soy_template';
import 'brace/mode/space';
import 'brace/mode/sparql';
import 'brace/mode/sql';
import 'brace/mode/sqlserver';
import 'brace/mode/stylus';
import 'brace/mode/svg';
import 'brace/mode/swift';
import 'brace/mode/swig';
import 'brace/mode/tcl';
import 'brace/mode/tex';
import 'brace/mode/text';
import 'brace/mode/textile';
import 'brace/mode/toml';
import 'brace/mode/tsx';
import 'brace/mode/turtle';
import 'brace/mode/twig';
import 'brace/mode/typescript';
import 'brace/mode/vala';
import 'brace/mode/vbscript';
import 'brace/mode/velocity';
import 'brace/mode/verilog';
import 'brace/mode/vhdl';
import 'brace/mode/wollok';
import 'brace/mode/xml';
import 'brace/mode/xquery';
import 'brace/mode/yaml';

// All themes
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';
import 'brace/theme/cobalt';
import 'brace/theme/crimson_editor';
import 'brace/theme/dawn';
import 'brace/theme/dracula';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import 'brace/theme/github';
import 'brace/theme/gob';
import 'brace/theme/gruvbox';
import 'brace/theme/idle_fingers';
import 'brace/theme/iplastic';
import 'brace/theme/katzenmilch';
import 'brace/theme/kr_theme';
import 'brace/theme/kuroir';
import 'brace/theme/merbivore';
import 'brace/theme/merbivore_soft';
import 'brace/theme/mono_industrial';
import 'brace/theme/monokai';
import 'brace/theme/pastel_on_dark';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/sqlserver';
import 'brace/theme/terminal';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night';
import 'brace/theme/tomorrow_night_blue';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow_night_eighties';
import 'brace/theme/twilight';
import 'brace/theme/vibrant_ink';
import 'brace/theme/xcode';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const Ace = (props) => {
    const name = props.name || props.id;
    return (
        <AceEditor
            name={name}
            onChange={(value) => {
                if (props.setProps) props.setProps({value: value});
            }}
            {...props}
        />
    );
};

Ace.defaultProps = {
    mode: 'python',
    theme: 'solarized_light'
};

Ace.propTypes = {
    id: PropTypes.string,
    mode: PropTypes.string,
    focus: PropTypes.bool,
    theme: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    showGutter: PropTypes.bool,
    onChange: PropTypes.func,
    onCopy: PropTypes.func,
    onPaste: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onScroll: PropTypes.func,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onLoad: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onCursorChange: PropTypes.func,
    onBeforeLoad: PropTypes.func,
    onValidate: PropTypes.func,
    minLines: PropTypes.number,
    maxLines: PropTypes.number,
    readOnly: PropTypes.bool,
    highlightActiveLine: PropTypes.bool,
    tabSize: PropTypes.number,
    showPrintMargin: PropTypes.bool,
    cursorStart: PropTypes.number,
    debounceChangePeriod: PropTypes.number,
    editorProps: PropTypes.object,
    setOptions: PropTypes.object,
    style: PropTypes.object,
    scrollMargin: PropTypes.array,
    annotations: PropTypes.array,
    markers: PropTypes.array,
    keyboardHandler: PropTypes.string,
    wrapEnabled: PropTypes.bool,
    enableBasicAutocompletion: PropTypes.oneOfType([
         PropTypes.bool,
        PropTypes.array
    ]),
    enableLiveAutocompletion: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.array
    ]),
    commands: PropTypes.array,
    setProps: PropTypes.func
};

export default Ace;
