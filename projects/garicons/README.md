# Garicons

Open source Animated SVG Feather Icons

#### Shout Out

> [Feather](https://feathericons.com/) by [Cole Bemis](https://twitter.com/colebemis) ✊🏿

## Installation

```shell
npm install garicons
```

## Usage

import into your NgModules

```javascript
@NgModule({
    imports:[
        GariconsModule,
        ...
    ]
```

Access them anywhere.

```html
<gcon-battery
  [isCharging]="false"
  [dimension]="30"
  [strokeWidth]="2"
  [animationAction]="'hover'"
>
</gcon-battery>
```

### Features

#### Inputs shared by all icons

1. dimensions: number
2. strokeWidth: number
3. animationAction: 'hover' | 'onload' - more to come!

All inputs have a defualt value if not assigend when declearin thecmppnent in your template, thus you can just write.

```html
<gcon-battery> </gcon-battery>
```

Some icons have bespoke inputs, each of these will be elaborated on in the documentation
