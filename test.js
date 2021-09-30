const _ = require('lodash')
var a = {
    separator: "_",
    node: 2,
    tree: [
        {
            is: 'ZDP1'
        },
        {
            include: ['KUNNR'],
            separator: '&'
        }
    ]
}

function checkStructureName( str, structure) {

    function is (strA, strB) {
        return strA === strB
    }

    function include(str, include, separator) {

        return _.include(str, include)
    }

    separator = structure.separator 

    arr = str.split(separator)

    if(structure.node < arr.length)
        throw new Error(`The node is invalid`)

    for(const id in structure.tree) {

        const branch = structure.tree[id]
        
        for(const twig in branch) 
        {
            switch(twig) {
                case 'is':
                    if ( !is(arr[id],branch[twig] ) )
                        throw new Error(`The value of tree is not true at ${id} `)
                    break
                case 'include':

            }
        }
    }

    return true
}


// checkStructureName('ZDP01_KUNNR',a)

console.log( _.includes(['KUNNR','KVGR1','KDGRP','KVGR2'],['KUNNR','KVGR2'] ) )
console.log(
_.every(
    'KUNNR&KVGR1'.split('&'),
    (el) => _.includes(['KUNNR','KVGR1','KDGRP','KVGR2'], el)
)
)