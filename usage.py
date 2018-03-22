import ace_components
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    ace_components.Ace(
        id='editor',
        value="def say_hi():\n    print('Hello, world!')",
    ),
    html.Button('Submit', id='submit'),
    html.Div(id='output'),
])


@app.callback(Output('output', 'children'),
              [Input('submit', 'n_clicks')],
              [State('editor', 'value')])
def display_output(clicks, content):
    app.server.logger.info('Clicks: {}'.format(clicks))
    app.server.logger.info('Received input:\n{}'.format(content))
    return 'You have entered {}'.format(content)


if __name__ == '__main__':
    app.run_server(debug=True)
