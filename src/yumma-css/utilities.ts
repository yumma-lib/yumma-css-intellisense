import { generateUtilities } from '../utils/dynamicUtilities';

export const utilities = [
    // backgrounds & borders
    {
        'prefix': 'rad-',
        'description': 'border-radius',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '4px' },
            { 'name': '2', 'property': '8px' },
            { 'name': '3', 'property': '16px' },
            { 'name': '4', 'property': '24px' },
            { 'name': '5', 'property': '32px' },
            { 'name': '6', 'property': '40px' },
            { 'name': '7', 'property': '48px' },
            { 'name': '8', 'property': '56px' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'rad-bl-',
        'description': 'border-bottom-left-radius',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '4px' },
            { 'name': '2', 'property': '8px' },
            { 'name': '3', 'property': '16px' },
            { 'name': '4', 'property': '24px' },
            { 'name': '5', 'property': '32px' },
            { 'name': '6', 'property': '40px' },
            { 'name': '7', 'property': '48px' },
            { 'name': '8', 'property': '56px' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'rad-br-',
        'description': 'border-bottom-right-radius',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '4px' },
            { 'name': '2', 'property': '8px' },
            { 'name': '3', 'property': '16px' },
            { 'name': '4', 'property': '24px' },
            { 'name': '5', 'property': '32px' },
            { 'name': '6', 'property': '40px' },
            { 'name': '7', 'property': '48px' },
            { 'name': '8', 'property': '56px' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'rad-tl-',
        'description': 'border-top-left-radius',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '4px' },
            { 'name': '2', 'property': '8px' },
            { 'name': '3', 'property': '16px' },
            { 'name': '4', 'property': '24px' },
            { 'name': '5', 'property': '32px' },
            { 'name': '6', 'property': '40px' },
            { 'name': '7', 'property': '48px' },
            { 'name': '8', 'property': '56px' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'rad-tr-',
        'description': 'border-top-right-radius',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '4px' },
            { 'name': '2', 'property': '8px' },
            { 'name': '3', 'property': '16px' },
            { 'name': '4', 'property': '24px' },
            { 'name': '5', 'property': '32px' },
            { 'name': '6', 'property': '40px' },
            { 'name': '7', 'property': '48px' },
            { 'name': '8', 'property': '56px' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'b-',
        'description': 'border-width',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '1px' },
            { 'name': '2', 'property': '2px' },
            { 'name': '3', 'property': '4px' },
            { 'name': '4', 'property': '6px' },
            { 'name': '5', 'property': '8px' },
            { 'name': '6', 'property': '10px' },
            { 'name': '7', 'property': '12px' },
            { 'name': '8', 'property': '14px' }
        ]
    },
    {
        'prefix': 'bb-',
        'description': 'border-bottom-width',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '1px' },
            { 'name': '2', 'property': '2px' },
            { 'name': '3', 'property': '4px' },
            { 'name': '4', 'property': '6px' },
            { 'name': '5', 'property': '8px' },
            { 'name': '6', 'property': '10px' },
            { 'name': '7', 'property': '12px' },
            { 'name': '8', 'property': '14px' }
        ]
    },
    {
        'prefix': 'bl-',
        'description': 'border-left-width',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '1px' },
            { 'name': '2', 'property': '2px' },
            { 'name': '3', 'property': '4px' },
            { 'name': '4', 'property': '6px' },
            { 'name': '5', 'property': '8px' },
            { 'name': '6', 'property': '10px' },
            { 'name': '7', 'property': '12px' },
            { 'name': '8', 'property': '14px' }
        ]
    },
    {
        'prefix': 'br-',
        'description': 'border-right-width',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '1px' },
            { 'name': '2', 'property': '2px' },
            { 'name': '3', 'property': '4px' },
            { 'name': '4', 'property': '6px' },
            { 'name': '5', 'property': '8px' },
            { 'name': '6', 'property': '10px' },
            { 'name': '7', 'property': '12px' },
            { 'name': '8', 'property': '14px' }
        ]
    },
    {
        'prefix': 'bt-',
        'description': 'border-top-width',
        'values': [
            { 'name': '0', 'property': '0px' },
            { 'name': '1', 'property': '1px' },
            { 'name': '2', 'property': '2px' },
            { 'name': '3', 'property': '4px' },
            { 'name': '4', 'property': '6px' },
            { 'name': '5', 'property': '8px' },
            { 'name': '6', 'property': '10px' },
            { 'name': '7', 'property': '12px' },
            { 'name': '8', 'property': '14px' }
        ]
    },

    // box model
    {
        'prefix': 'bs-',
        'description': 'box-sizing',
        'values': [
            { 'name': 'bb', 'property': 'border-box' },
            { 'name': 'cb', 'property': 'content-box' }
        ]
    },
    {
        prefix: 'dim-',
        description: 'dimension',
        values: [
            ...generateUtilities('dim-', '', ['height', 'width'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'max-dim-',
        description: 'dimension',
        values: [
            ...generateUtilities('max-dim-', '', ['max-height', 'min-width'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'min-dim-',
        description: 'max-height',
        values: [
            ...generateUtilities('min-dim-', '', ['min-height', 'min-width'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'h-',
        description: 'height',
        values: [
            ...generateUtilities('h-', 'height', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'max-h-',
        description: 'max-height',
        values: [
            ...generateUtilities('max-h-', 'max-height', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'min-h-',
        description: 'max-height',
        values: [
            ...generateUtilities('min-h-', 'min-height', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'm-',
        description: 'margin',
        values: [
            ...generateUtilities('m-', 'margin', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'mb-',
        description: 'margin-bottom',
        values: [
            ...generateUtilities('pb-', 'margin-bottom', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'ml-',
        description: 'margin-left',
        values: [
            ...generateUtilities('pl-', 'margin-left', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'mr-',
        description: 'margin-right',
        values: [
            ...generateUtilities('pr-', 'margin-right', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'mt-',
        description: 'margin-top',
        values: [
            ...generateUtilities('pt-', 'margin-top', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'mx-',
        description: 'margin x',
        values: [
            ...generateUtilities('px-', 'margin', ['margin-left', 'margin-right'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'my-',
        description: 'margin y',
        values: [
            ...generateUtilities('py-', 'margin', ['margin-bottom', 'margin-top'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'p-',
        description: 'padding',
        values: [
            ...generateUtilities('p-', 'padding', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'pb-',
        description: 'padding-bottom',
        values: [
            ...generateUtilities('pb-', 'padding-bottom', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'pl-',
        description: 'padding-left',
        values: [
            ...generateUtilities('pl-', 'padding-left', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'pr-',
        description: 'padding-right',
        values: [
            ...generateUtilities('pr-', 'padding-right', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'pt-',
        description: 'padding-top',
        values: [
            ...generateUtilities('pt-', 'padding-top', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'px-',
        description: 'padding x',
        values: [
            ...generateUtilities('px-', 'padding', ['padding-left', 'padding-right'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'py-',
        description: 'padding y',
        values: [
            ...generateUtilities('py-', 'padding', ['padding-bottom', 'padding-top'], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        prefix: 'max-w-',
        description: 'max-width',
        values: [
            ...generateUtilities('max-w-', 'max-width', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'min-w-',
        description: 'min-width',
        values: [
            ...generateUtilities('min-w-', 'min-width', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },
    {
        prefix: 'w-',
        description: 'width',
        values: [
            ...generateUtilities('w-', 'width', [], 100, 0.25, 'rem'),
            { name: 'auto', property: 'auto' },
            { name: 'full', property: '100%' },
            { name: 'half', property: '50%' },
            { name: 'fc', property: 'fit-content' },
            { name: '1/1', property: '100dvh' },
            { name: '1/2', property: '50dvh' }
        ]
    },

    // effects & filters
    {
        'prefix': 'bs-',
        'description': 'box-shadow',
        'values': [
            { 'name': 'none', 'property': 'none' },
            { 'name': 'xs', 'property': '1px 3px 5px -3px rgba(0,0,0,0.1)' },
            { 'name': 'sm', 'property': '1px 3px 5px -2px rgba(0,0,0,0.1)' },
            { 'name': 'md', 'property': '1px 3px 5px -1px rgba(0,0,0,0.1)' },
            { 'name': 'lg', 'property': '1px 3px 5px 1px rgba(0,0,0,0.1)' },
            { 'name': 'xl', 'property': '1px 3px 5px 2px rgba(0,0,0,0.1)' }
        ]
    },
    {
        'prefix': 'o-',
        'description': 'opacity',
        'values': [
            { 'name': '10', 'property': '0.1' },
            { 'name': '20', 'property': '0.2' },
            { 'name': '30', 'property': '0.3' },
            { 'name': '40', 'property': '0.4' },
            { 'name': '50', 'property': '0.5' },
            { 'name': '6', 'property': '0.6' },
            { 'name': '70', 'property': '0.7' },
            { 'name': '80', 'property': '0.8' },
            { 'name': '90', 'property': '0.9' },
            { 'name': '100', 'property': '1' }
        ]
    },

    // flexbox & grid
    {
        prefix: 'fb-',
        description: 'flex-basis',
        values: [
            ...generateUtilities('fb-', 'flex-basis', [], 100, 1, 'rem'),
            { name: 'auto', property: 'auto' }
        ]
    },
    {
        'prefix': 'fd-',
        'description': 'flex-direction',
        'values': [
            { 'name': 'c', 'property': 'column' },
            { 'name': 'cr', 'property': 'column-reverse' },
            { 'name': 'r', 'property': 'row' },
            { 'name': 'rr', 'property': 'row-reverse' }
        ]
    },
    {
        'prefix': 'fg-',
        'description': 'flex-grow',
        'values': [
            { 'name': '0', 'property': '0' },
            { 'name': '1', 'property': '1' },
            { 'name': '2', 'property': '2' },
            { 'name': '3', 'property': '3' },
            { 'name': '4', 'property': '4' },
            { 'name': '5', 'property': '5' },
            { 'name': '6', 'property': '6' },
            { 'name': '7', 'property': '7' },
            { 'name': '8', 'property': '8' }
        ]
    },
    {
        'prefix': 'fs-',
        'description': 'flex-shrink',
        'values': [
            { 'name': '0', 'property': '0' },
            { 'name': '1', 'property': '1' },
            { 'name': '2', 'property': '2' },
            { 'name': '3', 'property': '3' },
            { 'name': '4', 'property': '4' },
            { 'name': '5', 'property': '5' },
            { 'name': '6', 'property': '6' },
            { 'name': '7', 'property': '7' },
            { 'name': '8', 'property': '8' }
        ]
    },
    {
        'prefix': 'fw-',
        'description': 'flex-wrap',
        'values': [
            { 'name': 'nw', 'property': 'nowrap' },
            { 'name': 'w', 'property': 'wrap' },
            { 'name': 'wr', 'property': 'wrap-reverse' }
        ]
    },
    {
        'prefix': 'f-',
        'description': 'flex',
        'values': [
            { 'name': '0', 'property': '0' },
            { 'name': '1', 'property': '1' },
            { 'name': '2', 'property': '2' },
            { 'name': '3', 'property': '3' },
            { 'name': '4', 'property': '4' },
            { 'name': '5', 'property': '5' },
            { 'name': '6', 'property': '6' },
            { 'name': '7', 'property': '7' },
            { 'name': '8', 'property': '8' },
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'full', 'property': '100%' },
            { 'name': 'half', 'property': '50%' }
        ]
    },
    {
        'prefix': 'gac-',
        'description': 'grid-auto-columns',
        'values': [
            { 'name': 'min', 'property': 'min-content' },
            { 'name': 'max', 'property': 'max-content' },
            { 'name': 'auto', 'property': 'auto' }
        ]
    },
    {
        'prefix': 'gaf-',
        'description': 'grid-auto-flow',
        'values': [
            { 'name': 'r', 'property': 'row' },
            { 'name': 'c', 'property': 'column' },
            { 'name': 'd', 'property': 'dense' }
        ]
    },
    {
        'prefix': 'gar-',
        'description': 'grid-auto-rows',
        'values': [
            { 'name': 'min', 'property': 'min-content' },
            { 'name': 'max', 'property': 'max-content' },
            { 'name': 'auto', 'property': 'auto' }
        ]
    },
    {
        'prefix': 'gtc-',
        'description': 'grid-template-columns',
        'values': [
            { 'name': '1', 'property': 'repeat(1, minmax(0, 1fr))' },
            { 'name': '2', 'property': 'repeat(2, minmax(0, 1fr))' },
            { 'name': '3', 'property': 'repeat(3, minmax(0, 1fr))' },
            { 'name': '4', 'property': 'repeat(4, minmax(0, 1fr))' },
            { 'name': '5', 'property': 'repeat(5, minmax(0, 1fr))' },
            { 'name': '6', 'property': 'repeat(6, minmax(0, 1fr))' },
            { 'name': '7', 'property': 'repeat(7, minmax(0, 1fr))' },
            { 'name': '8', 'property': 'repeat(8, minmax(0, 1fr))' },
            { 'name': '9', 'property': 'repeat(9, minmax(0, 1fr))' },
            { 'name': '10', 'property': 'repeat(10, minmax(0, 1fr))' },
            { 'name': '11', 'property': 'repeat(11, minmax(0, 1fr))' }
        ]
    },
    {
        'prefix': 'gtr-',
        'description': 'grid-template-rows',
        'values': [
            { 'name': '1', 'property': 'repeat(1, minmax(0, 1fr))' },
            { 'name': '2', 'property': 'repeat(2, minmax(0, 1fr))' },
            { 'name': '3', 'property': 'repeat(3, minmax(0, 1fr))' },
            { 'name': '4', 'property': 'repeat(4, minmax(0, 1fr))' },
            { 'name': '5', 'property': 'repeat(5, minmax(0, 1fr))' },
            { 'name': '6', 'property': 'repeat(6, minmax(0, 1fr))' },
            { 'name': '7', 'property': 'repeat(7, minmax(0, 1fr))' },
            { 'name': '8', 'property': 'repeat(8, minmax(0, 1fr))' },
            { 'name': '9', 'property': 'repeat(9, minmax(0, 1fr))' },
            { 'name': '10', 'property': 'repeat(10, minmax(0, 1fr))' },
            { 'name': '11', 'property': 'repeat(11, minmax(0, 1fr))' },
            { 'name': '12', 'property': 'repeat(12, minmax(0, 1fr))' },
            { 'name': '13', 'property': 'repeat(13, minmax(0, 1fr))' },
            { 'name': '14', 'property': 'repeat(14, minmax(0, 1fr))' },
            { 'name': '15', 'property': 'repeat(15, minmax(0, 1fr))' },
            { 'name': '16', 'property': 'repeat(16, minmax(0, 1fr))' }
        ]
    },
    {
        'prefix': 'ac-',
        'description': 'align-content',
        'values': [
            { 'name': 'c', 'property': 'center' },
            { 'name': 's', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' },
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'sb', 'property': 'space-between' },
            { 'name': 'sa', 'property': 'space-around' },
            { 'name': 'se', 'property': 'space-evenly' },
            { 'name': 'stretch', 'property': 'stretch' }
        ]
    },
    {
        'prefix': 'ai-',
        'description': 'align-items',
        'values': [
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'stretch', 'property': 'stretch' },
            { 'name': 'c', 'property': 'center' },
            { 'name': 'start', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' }
        ]
    },
    {
        'prefix': 'as-',
        'description': 'align-self',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'c', 'property': 'center' },
            { 'name': 'start', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' },
            { 'name': 'stretch', 'property': 'stretch' }
        ]
    },
    {
        'prefix': 'cg-',
        'description': 'column-gap',
        'values': [
            { 'name': '1', 'property': '0.25rem' },
            { 'name': '2', 'property': '0.5rem' },
            { 'name': '3', 'property': '0.75rem' },
            { 'name': '4', 'property': '1rem' },
            { 'name': '5', 'property': '1.25rem' },
            { 'name': '6', 'property': '1.5rem' },
            { 'name': '7', 'property': '1.75rem' },
            { 'name': '8', 'property': '2rem' },
            { 'name': '9', 'property': '2.25rem' },
            { 'name': '10', 'property': '2.5rem' },
            { 'name': '11', 'property': '2.75rem' },
            { 'name': '12', 'property': '3rem' },
            { 'name': '13', 'property': '3.25rem' },
            { 'name': '14', 'property': '3.5rem' },
            { 'name': '15', 'property': '3.75rem' },
            { 'name': '16', 'property': '4rem' }
        ]
    },
    {
        'prefix': 'jc-',
        'description': 'justify-content',
        'values': [
            { 'name': 'c', 'property': 'center' },
            { 'name': 's', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' },
            { 'name': 'l', 'property': 'left' },
            { 'name': 'r', 'property': 'right' },
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'sb', 'property': 'space-between' },
            { 'name': 'sa', 'property': 'space-around' },
            { 'name': 'se', 'property': 'space-evenly' },
            { 'name': 'stretch', 'property': 'stretch' }
        ]
    },
    {
        'prefix': 'ji-',
        'description': 'justify-items',
        'values': [
            { 'name': 'c', 'property': 'center' },
            { 'name': 's', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' },
            { 'name': 'l', 'property': 'left' },
            { 'name': 'r', 'property': 'right' },
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'sb', 'property': 'space-between' },
            { 'name': 'sa', 'property': 'space-around' },
            { 'name': 'se', 'property': 'space-evenly' },
            { 'name': 'stretch', 'property': 'stretch' }
        ]
    },
    {
        'prefix': 'js-',
        'description': 'justify-self',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'n', 'property': 'normal' },
            { 'name': 'stretch', 'property': 'stretch' },
            { 'name': 'c', 'property': 'center' },
            { 'name': 's', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'fs', 'property': 'flex-start' },
            { 'name': 'fe', 'property': 'flex-end' },
            { 'name': 'l', 'property': 'left' },
            { 'name': 'r', 'property': 'right' }
        ]
    },
    {
        'prefix': 'rg-',
        'description': 'row-gap',
        'values': [
            { 'name': '1', 'property': '0.25rem' },
            { 'name': '2', 'property': '0.5rem' },
            { 'name': '3', 'property': '0.75rem' },
            { 'name': '4', 'property': '1rem' },
            { 'name': '5', 'property': '1.25rem' },
            { 'name': '6', 'property': '1.5rem' },
            { 'name': '7', 'property': '1.75rem' },
            { 'name': '8', 'property': '2rem' },
            { 'name': '9', 'property': '2.25rem' },
            { 'name': '10', 'property': '2.5rem' },
            { 'name': '11', 'property': '2.75rem' },
            { 'name': '12', 'property': '3rem' },
            { 'name': '13', 'property': '3.25rem' },
            { 'name': '14', 'property': '3.5rem' },
            { 'name': '15', 'property': '3.75rem' },
            { 'name': '16', 'property': '4rem' }
        ]
    },

    // miscellaneous
    {
        'prefix': 'a-',
        'description': 'appearance',
        'values': [
            { 'name': 'none', 'property': 'none' },
            { 'name': 'auto', 'property': 'auto' }
        ]
    },
    {
        'prefix': 'c-',
        'description': 'cursor',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'p', 'property': 'pointer' },
            { 'name': 't', 'property': 'text' },
            { 'name': 'm', 'property': 'move' },
            { 'name': 'na', 'property': 'not-allowed' },
            { 'name': 'c', 'property': 'crosshair' },
            { 'name': 'h', 'property': 'help' },
            { 'name': 'er', 'property': 'e-resize' },
            { 'name': 'nr', 'property': 'n-resize' },
            { 'name': 'w', 'property': 'wait' }
        ]
    },
    {
        'prefix': 'pe-',
        'description': 'pointer-events',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'r-',
        'description': 'resize',
        'values': [
            { 'name': 'b', 'property': 'both' },
            { 'name': 'h', 'property': 'horizontal' },
            { 'name': 'none', 'property': 'none' },
            { 'name': 'v', 'property': 'vertical' }
        ]
    },
    {
        'prefix': 'us-',
        'description': 'user-select',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'none', 'property': 'none' }
        ]
    },

    // positioning
    {
        'prefix': 'cols-',
        'description': 'columns',
        'values': [
            { 'name': '1', 'property': '1' },
            { 'name': '2', 'property': '2' },
            { 'name': '3', 'property': '3' },
            { 'name': '4', 'property': '4' },
            { 'name': '5', 'property': '5' },
            { 'name': '6', 'property': '6' },
            { 'name': '7', 'property': '7' },
            { 'name': '8', 'property': '8' },
            { 'name': '9', 'property': '9' },
            { 'name': '10', 'property': '10' },
            { 'name': '11', 'property': '11' },
            { 'name': '12', 'property': '12' },
            { 'name': '13', 'property': '13' },
            { 'name': '14', 'property': '14' },
            { 'name': '15', 'property': '15' },
            { 'name': '16', 'property': '16' }
        ]
    },
    {
        'prefix': 'dir-b-',
        'description': 'bottom',
        'values': [
            { 'name': '0', 'property': '0rem' },
            { 'name': '1', 'property': '1rem' },
            { 'name': '2', 'property': '2rem' },
            { 'name': '3', 'property': '4rem' },
            { 'name': '4', 'property': '6rem' },
            { 'name': '5', 'property': '8rem' },
            { 'name': '6', 'property': '10rem' },
            { 'name': '7', 'property': '12rem' },
            { 'name': '8', 'property': '14rem' },
            { 'name': '9', 'property': '16rem' },
            { 'name': '10', 'property': '18rem' },
            { 'name': '11', 'property': '20rem' },
            { 'name': '12', 'property': '22rem' },
            { 'name': '13', 'property': '24rem' },
            { 'name': '14', 'property': '26rem' },
            { 'name': '15', 'property': '28rem' },
            { 'name': '16', 'property': '30rem' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'dir-i-',
        'description': 'inset',
        'values': [
            { 'name': '0', 'property': '0rem' },
            { 'name': '1', 'property': '1rem' },
            { 'name': '2', 'property': '2rem' },
            { 'name': '3', 'property': '4rem' },
            { 'name': '4', 'property': '6rem' },
            { 'name': '5', 'property': '8rem' },
            { 'name': '6', 'property': '10rem' },
            { 'name': '7', 'property': '12rem' },
            { 'name': '8', 'property': '14rem' },
            { 'name': '9', 'property': '16rem' },
            { 'name': '10', 'property': '18rem' },
            { 'name': '11', 'property': '20rem' },
            { 'name': '12', 'property': '22rem' },
            { 'name': '13', 'property': '24rem' },
            { 'name': '14', 'property': '26rem' },
            { 'name': '15', 'property': '28rem' },
            { 'name': '16', 'property': '30rem' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'dir-l-',
        'description': 'left',
        'values': [
            { 'name': '0', 'property': '0rem' },
            { 'name': '1', 'property': '1rem' },
            { 'name': '2', 'property': '2rem' },
            { 'name': '3', 'property': '4rem' },
            { 'name': '4', 'property': '6rem' },
            { 'name': '5', 'property': '8rem' },
            { 'name': '6', 'property': '10rem' },
            { 'name': '7', 'property': '12rem' },
            { 'name': '8', 'property': '14rem' },
            { 'name': '9', 'property': '16rem' },
            { 'name': '10', 'property': '18rem' },
            { 'name': '11', 'property': '20rem' },
            { 'name': '12', 'property': '22rem' },
            { 'name': '13', 'property': '24rem' },
            { 'name': '14', 'property': '26rem' },
            { 'name': '15', 'property': '28rem' },
            { 'name': '16', 'property': '30rem' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'dir-r-',
        'description': 'right',
        'values': [
            { 'name': '0', 'property': '0rem' },
            { 'name': '1', 'property': '1rem' },
            { 'name': '2', 'property': '2rem' },
            { 'name': '3', 'property': '4rem' },
            { 'name': '4', 'property': '6rem' },
            { 'name': '5', 'property': '8rem' },
            { 'name': '6', 'property': '10rem' },
            { 'name': '7', 'property': '12rem' },
            { 'name': '8', 'property': '14rem' },
            { 'name': '9', 'property': '16rem' },
            { 'name': '10', 'property': '18rem' },
            { 'name': '11', 'property': '20rem' },
            { 'name': '12', 'property': '22rem' },
            { 'name': '13', 'property': '24rem' },
            { 'name': '14', 'property': '26rem' },
            { 'name': '15', 'property': '28rem' },
            { 'name': '16', 'property': '30rem' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'dir-t-',
        'description': 'top',
        'values': [
            { 'name': '0', 'property': '0rem' },
            { 'name': '1', 'property': '1rem' },
            { 'name': '2', 'property': '2rem' },
            { 'name': '3', 'property': '4rem' },
            { 'name': '4', 'property': '6rem' },
            { 'name': '5', 'property': '8rem' },
            { 'name': '6', 'property': '10rem' },
            { 'name': '7', 'property': '12rem' },
            { 'name': '8', 'property': '14rem' },
            { 'name': '9', 'property': '16rem' },
            { 'name': '10', 'property': '18rem' },
            { 'name': '11', 'property': '20rem' },
            { 'name': '12', 'property': '22rem' },
            { 'name': '13', 'property': '24rem' },
            { 'name': '14', 'property': '26rem' },
            { 'name': '15', 'property': '28rem' },
            { 'name': '16', 'property': '30rem' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'd-',
        'description': 'display',
        'values': [
            { 'name': 'b', 'property': 'block' },
            { 'name': 'i', 'property': 'inline' },
            { 'name': 'ib', 'property': 'inline-block' },
            { 'name': 'f', 'property': 'flex' },
            { 'name': 'if', 'property': 'inline-flex' },
            { 'name': 'g', 'property': 'grid' },
            { 'name': 'fr', 'property': 'flow-root' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        'prefix': 'f-',
        'description': 'float',
        'values': [
            { 'name': 'none', 'property': 'none' },
            { 'name': 'l', 'property': 'left' },
            { 'name': 'r', 'property': 'right' },
            { 'name': 'is', 'property': 'inline-start' },
            { 'name': 'ie', 'property': 'inline-end' }
        ]
    },
    {
        'prefix': 'ovf-',
        'description': 'overflow',
        'values': [
            { 'name': 'auto', 'property': 'auto' },
            { 'name': 'c', 'property': 'clip' },
            { 'name': 'h', 'property': 'hidden' },
            { 'name': 's', 'property': 'scroll' },
            { 'name': 'v', 'property': 'visible' }
        ]
    },
    {
        'prefix': 'pos-',
        'description': 'position',
        'values': [
            { 'name': 'a', 'property': 'absolute' },
            { 'name': 'f', 'property': 'fixed' },
            { 'name': 'r', 'property': 'relative' },
            { 'name': 'static', 'property': 'static' },
            { 'name': 'sticky', 'property': 'sticky' }
        ]
    },
    {
        'prefix': 'zi-',
        'description': 'z-index',
        'values': [
            { 'name': '0', 'property': '0' },
            { 'name': '10', 'property': '10' },
            { 'name': '20', 'property': '20' },
            { 'name': '30', 'property': '30' },
            { 'name': '40', 'property': '40' },
            { 'name': '50', 'property': '50' },
            { 'name': '60', 'property': '60' },
            { 'name': '70', 'property': '70' },
            { 'name': '80', 'property': '80' },
            { 'name': '90', 'property': '90' },
            { 'name': 'auto', 'property': 'auto' }
        ]
    },

    // typography
    {
        'prefix': 'ff-',
        'description': 'font-family',
        'values': [
            { 'name': 'c', 'property': 'Charter, Cambria, serif' },
            { 'name': 'm', 'property': 'ui-monospace, Consolas, monospace' },
            { 'name': 's', 'property': 'system-ui, sans-serif' }
        ]
    },
    {
        'prefix': 'fs-',
        'description': 'font-size',
        'values': [
            { 'name': 'xs', 'property': '12px' },
            { 'name': 'sm', 'property': '14.4px' },
            { 'name': 'md', 'property': '16px' },
            { 'name': 'lg', 'property': '19.2px' },
            { 'name': 'xl', 'property': '23.04px' },
            { 'name': '2xl', 'property': '30.08px' },
            { 'name': '3xl', 'property': '35.52px' },
            { 'name': '6xl', 'property': '58.56px' }
        ]
    },
    {
        'prefix': 'fw-',
        'description': 'font-weight',
        'values': [
            { 'name': '100', 'property': '100' },
            { 'name': '200', 'property': '200' },
            { 'name': '300', 'property': '300' },
            { 'name': '400', 'property': '400' },
            { 'name': '500', 'property': '500' },
            { 'name': '600', 'property': '600' },
            { 'name': '700', 'property': '700' },
            { 'name': '800', 'property': '800' },
            { 'name': '900', 'property': '900' }
        ]
    },
    {
        'prefix': 'lh-',
        'description': 'line-height',
        'values': [
            { 'name': '1', 'property': '1' },
            { 'name': '2', 'property': '1.25' },
            { 'name': '3', 'property': '1.375' },
            { 'name': '4', 'property': '1.5' },
            { 'name': '5', 'property': '1.625' },
            { 'name': '6', 'property': '2' }
        ]
    },
    {
        'prefix': 'lst-',
        'description': 'list-style-type',
        'values': [
            { 'name': 'd', 'property': 'disc' },
            { 'name': 'c', 'property': 'circle' },
            { 'name': 's', 'property': 'square' }
        ]
    },
    {
        'prefix': 'ta-',
        'description': 'text-align',
        'values': [
            { 'name': 's', 'property': 'start' },
            { 'name': 'e', 'property': 'end' },
            { 'name': 'l', 'property': 'left' },
            { 'name': 'r', 'property': 'right' },
            { 'name': 'c', 'property': 'center' },
            { 'name': 'j', 'property': 'justify' },
            { 'name': 'ja', 'property': 'justify-all' },
            { 'name': 'mp', 'property': 'match-parent' }
        ]
    },
    {
        'prefix': 'tdl-',
        'description': 'text-decoration-line',
        'values': [
            { 'name': 'none', 'property': 'none' },
            { 'name': 'u', 'property': 'underline' },
            { 'name': 'o', 'property': 'overline' },
            { 'name': 'lt', 'property': 'line-through' }
        ]
    },
    {
        'prefix': 'td-',
        'description': 'text-decoration',
        'values': [
            { 'name': 'u', 'property': 'underline' },
            { 'name': 'none', 'property': 'none' }
        ]
    },
    {
        prefix: 'ow-',
        description: 'word-break',
        values: [
            { name: 'ow', property: 'break-word' },
            { name: 'ow', property: 'keep-all' },
            { name: 'ow', property: 'normal' }
        ]
    },
];