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

1. Release-1 - [Notes](https://www.notion.so/Release-1-dd7ad21c0a644de79f5c4cb34a5b0a57)
2. Release-2 - [Notes](https://www.notion.so/Release-2-90a191397c564068b88a40855ac354e1)
3. Release-3 - [Notes](https://www.notion.so/Release-3-e74de1618fd546ec9774208bad946743)
4. Release-4 - [Notes](https://www.notion.so/Release-5-a645e76f1f064b29b2019146624d2167)
5. 3 and 4 are like the same thing Yo!
6. Release-6 - [Notes](https://www.notion.so/Release-6-3341ea9512a6458baaefe1a67c90bb7a)
8. Release-7 - [Notes](https://www.notion.so/Release-7-40780d9d662346ab87b3f5f1e60fdfa2)
7. Release-8 - [Notes](https://www.notion.so/Release-8-5fc715a92e2e4f459bceb98dde4b09c2)
7. Release-9 - [Notes](https://www.notion.so/Release-9-de5c50ba04eb461facae9c25c8d62c75)
8. Release-10 - [Notes](https://www.notion.so/Release-10-e424b3601ad748ee9a6d359f4215e90e)