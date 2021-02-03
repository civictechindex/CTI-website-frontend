# Material-UI

The CTI site uses Material-UI, also called MUI. See [material-ui.com](https://material-ui.com/) for the main documentation you'll need.

Whenever it makes sense to do so, use MUI components in a React page or component:
To arrange items on a page, use `<Grid component>` and `<Grid item>`.
Instead of using an `<p>` tag, use `<Typography variant='body1'>`.
And the list goes on.

As a rule of thumb, a React page or component should be contructed entirely of MUI components and should not contain plain HTML elements. It's not that using `<div>` and `<p>` tags and such is a problem. They will work just fine. Rather, this is an internal coding choice, not a technical requirement, and its purpose is that it should lead to consistent UI implementation.

## Idiosyncratic syntax

Material-UI can be used in many ways, from CSS to styled components to JSS. We are choosing to focus on JSS, a way of writing CSS in JavaScript. React-JSS comes bundled with MUI, so we do not need to import it separately.

JSS syntax is idiosyncratic. You may find it a little unusual when you first start working with it. MUI uses React-JSS basic syntax, and its syntax for a theme and its use of `props`. To learn more about, say, using the string `'& p'` or `'@global'` as the key of an styling object's key/value pair, see [the React-JSS documentation](https://cssinjs.org/react-jss).

## Global Styling

### Theme file

The file `src/theme-mui.js` contains an `overrides` section.
This is the preferred place to style all instances of a component across the website.
As one example, MUI's `<Button>` has been customized significantly in our theme.

`theme-mui.js` also contains the implementation of our theme's color and font settings, and more.

### Global styles file, JS

The file `src/styles.js` is another place to make global changes, in two ways.

As a first example, the class `'.card240'` (placeholder name) is defined in the `'@global'` section of this document.
That means that `className='card240'` is available for any element throughout the project.

Secondly, styling objects can also be added at the top level, not under '@global':

```javascript
  '@global: {
    // @global section goes here
  },
  uniqueName: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.font.small.fontSize,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.font.paragraph.fontSize,
    },
  },
```

This way, if you include `const classes = useStyles()` in a component, then `className={classes.uniqueName}` is available in that component to deal with breakpoints, in this theoretical example.

Unlike declaring a plain CSS class in `src/styles.css`, classes here are built programmatically and can reference the MUI theme when declaring spacing, font, color, etc.
For this reason, declaring global classes here is preferred.
Feel free to put anything we need here, but avoid putting something here that is not global.

### Global styles file, CSS

The file `src/styles.css` is a standard CSS file used throughout the project.
Use this for traditional CSS declarations, but this method is not preferred.
This file needs to be imported into any component that uses its classes.
[ _TODO: Is this true? TODO: Are we going to keep this file?_ ]

## Local Styling

At times it will make sense to have a local piece of in-line styling.

```javascript
<Typography variant='h3' style={{ color: '#D8D8D8' }}>
```

We have a preference to **avoid in-line styling** like this, especially if you hard-code some value that actually applies project-wide. Rather, we prefer to re-use design, so make this a global change if possible. **Avoid using hard-coded colors, fonts, and other styling in individual components.** There may be cases where a simple piece of local styling makes sense, but be sure it's the best way to go.

In the case that there is a valid reason to have a local piece of stying just for one component, and it's not a simple static piece of code, we prefer `useTheme()` or `makeStyles()`/`useStyles()` to be able to reference the theme settings or to implement dynamic styling. **The two preferred approaches are along the lines of the following examples.**

### useTheme()

```javascript
import { darken, useTheme } from '@material-ui/core/styles'

const XYZcomponent = () => {
  const theme = useTheme();
  const localColor = darken(theme.palette.grey[300], 0.5)

  return (
    <Typography variant='h3' style={{ color: localColor }}>
  )
}
```

### makeStyles()

```javascript
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  foo: {
    bar: (props) => props.baz * 2,
    color: theme.palette.grey[300]
  }
}))

const XYZcomponent = () => {
  const [baz, setBaz] = useState('')
  const classes = useStyles({ baz })

  return (
    <Typography variant='h3' className={classes.foo}>
  )
}
```

## Is there any other way?

There are many other ways to apply styling changes.
For the time being, let's avoid other ways without first coming to an agreement amongst the dev team.
If you want to use another method of stying, please bring up the topic in team meetings!
