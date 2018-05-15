# Bullhorn Call to Listen Button Widget

Allow your audience to listen data-free by dialing-in to your audio content by using Bullhorn's Call to Listen Plugin. Just specify your media link and the widget will receive and display a phone number for your listeners to call. It's that easy!

Check this [Demo](https://bullhornapp.github.io/listen-button-widget/docs/demo.html)

## Usage

You can download minified `widget.js` file from `dist` folder.
Simply add this script on your page:

```HTML
<script src="/dist/widget.js"></script>
```

Place the button anywhere you need and script will parse it automatically:

```HTML
<div class="listen-button-widget" data-src="https://storage.carrierx.com/f/ef4e3cd5-ecbc-4a64-b813-28d51c852573.wav"></div>
```

## Customization

Widget supports parameters:
* `data-src` - media source URL;
* `data-text` - button text;
* `data-api` - your own custom server URL;

## Programmatic usage

You can manually initialize the declarative buttons:

```JavaScript
window.ListenButtonWidget.init();
```

or add optional customization:

```JavaScript
window.ListenButtonWidget.init('.my-custom-container', {
  src: 'https://storage.carrierx.com/f/ef4e3cd5-ecbc-4a64-b813-28d51c852573.wav',
  text: 'Call to Listen'
});
```

### Styling

Customize everything you need through CSS:

```CSS
.listen-button-widget .lbw-listen-button {
  background-color: #17b517;
}
```

### Build from source

Use NPM or Yarn:

```yarn build```

## License

Code licensed under the MIT License: http://opensource.org/licenses/MIT
