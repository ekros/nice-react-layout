# Nice React Layout
Create complex and nice Flexbox-based layouts, without even knowing what flexbox means.

## Installation
```sh
yarn add nice-react-layout
```

## Motivation
The aim of this project is to have a reduced set of components to create flexbox-based layouts abstracting the knowledge needed to understand how flexbox works.

## Features
- Easy to learn: Just combine layouts and panels.
- Create collapsible sidebars with ease.
- Automagically colorize panels with random colors to speed-up prototyping.
- Resizable panels. Just add separators to your layouts.

## Basic Usage
Creating a simple layout is as easy as this:

```javascript
  <HorizontalLayout mockup>
    <Panel />
    <Panel />
  </HorizontalLayout>
```

It renders an horizontal layout with two panels of the same size (they have proportion=1 by default). Thanks to the 'mockup' prop it paints every panel with a random color, easing the layout prototyping process.
<br />
In both horizontal and vertical layouts add the prop 'proportion' with the proportional part it takes from the available space. This example creates a typical sidebar + content layout:
```javascript
  <HorizontalLayout mockup>
    <Panel proportion={1} />
    <Panel proportion={4} />
  </HorizontalLayout>
```
<br />
Do you want to add a separator between both panels? Use the Separator component:
```javascript
  <HorizontalLayout mockup>
    <Panel proportion={1} />
    <Separator />
    <Panel proportion={4} />
  </HorizontalLayout>
```
<br />
You can nest layouts. Let's add a vertical layout, with its own Separator, inside the right panel:
```javascript
  <HorizontalLayout mockup>
    <Panel proportion={1} />
    <Separator />
    <Panel proportion={4}>
      <VerticalLayout mockup>
        <Panel />
        <Separator />
        <Panel />
      </VerticalLayout>
    </Panel>
  </HorizontalLayout>
```

For a complete example with every feature, see the Example.js file.

## Components
### HorizontalLayout
It creates an horizontal layout. This is shorthand component for:
```javascript
  <Layout orientation="horizontal" />
```
### VerticalLayout
It creates vertical layout layout. This is a shorthand component for:
```javascript
  <Layout orientation="vertical" />
```

### Layout
Creates a layout.
##### Props
| Prop          | Description                                |
| ------------- | ------------------------------------------ |
| collapseSize  | Collapsible panels size when collapsed     |
| customCss     | Custom layout CSS object                   |
| mockup        | Render in mockup mode                      |
| orientation   | 'vertical' or 'horizontal'                 |
| reverse       | Render layout in reverse order             |

### Panel
Here is where your content goes.
If you are familiar with flexbox, this is like a "flex item" with a flex value of 1 by default. If not, don't worry, you don't need to know that :)
##### Props
| Prop                           | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| centered                       | Center panel content                                       |
| collapsible                    | The panel can be collapsed                                 |
| collapsed                      | Is the panel collapsed?                                    |
| collapseButtonClass            | Adds a class to the collapse button                        |
| collapseButtonContent          | A String or element                                        |
| collapseButtonCollapsedContent | A String or element                                        |
| collapseButtonStyle            | Inject inline CSS to the collapse button                   |
| collapsePanel                  | Called when collapse button is clicked                     |
| collapseSwitch                 | Custom collapse element (renders button if not provided)   |
| customCss                      | Custom panel CSS object (injects it as an inline style)    |
| minHeight                      | Minimum panel height                                       |
| minWidth                       | Minimum panel width                                        |
| mockup                         | Render in mockup mode                                      |
| orientation                    | 'vertical' or 'horizontal'                                 |
| proportion                     | Proportion it uses from the available space (default = 1)  |
| reverse                        | Render layout in reverse order                             |
| sidebar                        | Don't do much by it self. It is a requirement for sidebar props like 'collapsible'                             |
### Separator
It separates panels and allows them to be resized. This is optional.
##### Props
| Prop                           | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| defaultDblClickPos             | Position where the separator goes when double-clicked      |
| disabled                       | Is disabled?                                               |
| onSeparatorDoubleClick         | Action called when the separator is double-clicked         |
| onSeparatorMouseDown           | Action called when the mouse is over the separator         |
### Spacer
It renders a blank space. Useful when you need to leave spaces between panels.
##### Props
| Prop                           | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| size                           | Separator size in pixels                                   |
