#adapt-contrib-pointGmcq

A variation on the GMCQ component that enables point on an image

##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-contrib-pointGmcq

This component can also be installed by adding the component to the adapt.json file before running `adapt install`:

        "adapt-contrib-pointGmcq": "*"

##Usage

To be completed

##Settings overview
 
An complete example of this components settings can be found in the [example.json](https://github.com/adaptlearning/adapt-contrib-pointGmcq/blob/master/example.json) file. A description of the core settings can be found at: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)

Further settings for this component are:

####_component

This value must be: `point-gmcq`

####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####_attempts

Default: `1`

Specifies the number of attempts for this question.

####_isRandom

Default: `false`

Setting this value to `true` will cause the `_items` to appear in a random order each time this component is loaded.

####_selectable

Defines the number of `_items` that can be selected.

####_graphic

The image for this graphical multiple choice question is defined within this element. This element should contain only one value for `alt` and `src`.

####alt

An alternative text value for the image can be entered here.

####src

Enter a path to the image. Paths should be relative to the src folder, e.g.

course/en/images/origami-hotgraphic.jpg"

####_items

Multiple items can be entered. Each item represents one choice for the graphical multiple choice question and contains values for `_top`, `_left` and `_shouldBeSelected`.

####_top

Each question hot spot must contain `_top` and `_left` coordinates to position them on the question graphic. 

Enter the number of pixels this hot spot should be from the top border of the main graphic.

####_left

Enter the number of pixels this hot spot should be from the left border of the main graphic.

####_shouldBeSelected

Value can be `true` or `false`. Use `true` for items that must be selected for a correct answer. The value of `_selectable` must correspond to the number of `_items` where `_shouldBeSelected` is set to `true`.


##Limitations

To be completed.

##Browser spec

This component has been tested to the standard Adapt browser specification.