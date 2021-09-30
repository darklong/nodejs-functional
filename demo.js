const fs = require('fs')
const csv = require('csv');
const parse = csv.parse;


let columns = ['KSCHL','VKORG', 'PRODH1', 'PRODH2', 'KUNNR', 'KVGR1', 'KDGRP', 'KVGR2', 'KDKG1', 'KDKG2', 'KDKG3', 'KDKG4', 'KDKG5', 'MVGR1', 'MATNR', 'KZBZG', 'KSTBM', 'KBETR', 'KONWA', 'KPEIN', 'KMEIN', 'ANZAUF', 'DATAB', 'DATBI', 'LTX01', 'LTX02', 'LTX03', 'KBSTAT']
        
        
        let data1 =  fs.readFileSync(`C:\\Users\\Admin\\workspace\\nodejs\\masterdataUpload\\out\\ZDP1_KUNNR_1ck_3050.csv_1.csv`,'utf8')
        let data2 =  fs.readFileSync(`C:\\Users\\Admin\\workspace\\nodejs\\masterdataUpload\\true_result\\ZDP1_KUNNR_1ck_3050_SENDING_1.csv`,'utf8')


        parse(data1, { columns: columns, delimiter:',' }, function (error, records1, info) {
            console.log(records1.length)
            parse(data2, { columns: columns, delimiter:',' }, function (error, records2, info) {
                console.log(records2)
            });

        });
