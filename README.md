# Savage Worlds Interactive Character sheet

An interactive character sheet for the TTRPG savage worlds. 

[Live Page](https://tomahawk-jupiter.github.io/savage-worlds/)

## What It Does

- You can roll dice (it applies some of the rules automatically to the dice rolls)
- you can roll dice without these rules applied too, sometimes you need to be able to do this in the game
- Improve different character stats
- Fill in text fields like name, background info, etc.
- You can add new equipment, equip / unequip weapons and armour
- Armour is automtically added to the derived stats
- Level up the character
- I tried to base the look of the sheet loosely on the one in the book
- The character sheet can be saved in local storage
- There are some archetype characters with some stats preset

You need to know the rules for the game to make more sense of how to use it.

## Save Characters

It uses local storage for saving / loading character sheets. Can save multiple.

## Redux

I use React and Redux for the state management. There are notes for how to use Redux in `redux_notes.md`. This is the fist time I've used redux.

## Layout

Its not currently responsive, the min width is 900px.

Its quite a complex layout and I'm not sure how to approach the layout for smaller screens. I primarily designed it for a tablet sized screen, but mainly I was just trying to get all the components on a single page. 

I might try to redesign the layout in the future, perhaps with tabs that can be maximized / minimized or display components in different tabs, a bit like it already is but with more tabs. Its quite alot of info to fit on a phone sized screen.

## Setup

I manually setup webpack instead of using create react app so it makes a good reference for a simple webpack React setup.
