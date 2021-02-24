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

All inputs have a defualt value if not assigend when declearin thecmppnent in your template, thus you can just write this

```html
<gcon-battery> </gcon-battery>
```

Some icons have bespoke inputs, each of these will be elaborated on in the [documentation](https://www.notion.so/Garicon-Engineering-Wiki-f4c1f090dba94af9b76387735a5e6bbc)

### Releases

Release-1 - [Notes](https://www.notion.so/Release-1-dd7ad21c0a644de79f5c4cb34a5b0a57)
Release-2 - [Notes](https://www.notion.so/Release-2-90a191397c564068b88a40855ac354e1)
Release-3 - [Notes](https://www.notion.so/Release-3-e74de1618fd546ec9774208bad946743)
Release-4 - [Notes](https://www.notion.so/Release-5-a645e76f1f064b29b2019146624d2167)
Release-5 - [Notes](https://www.notion.so/Release-5-a645e76f1f064b29b2019146624d2167)