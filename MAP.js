
/**
 * MAP class
 * @class MAP
 * @constructor
 * @version 2.1.0
 * @description this is custom class for split file set -> sort -> split -> fill
 * @author LongDang - darklong - ZuelligVietNam
 */


 var MAP = function (list) {
	
		
    this.elements = Object.create({})
    
		this.keyList = []
		    
		this.i = 0
   
		this.files = 1
    
		this.filesSplitted = []
		
		this.splitCondition = [] 
		
    if (list && list.length)
        this.setLocal(list)
}

MAP.prototype.createField = function () {
			//customize for only case excel
    this.indexCache = 0
		this.x = []
    
}

MAP.prototype.clear = function () {
		// make can be garbage collected.
   this.elements = null  
}

MAP.prototype.setLocal = function (items) {
    for (var i = 0; i < items.length; i++) {
        var item, key, value;
        item = items[i]
        key = Object.keys(item)[0]
        value = item[key]
        this.elements[key] = value
    }
}


MAP.prototype.set = function (key, value) {
    this.keyList[this.i] = key
    this.elements[key] = value
    this.i++
}

/**
 * sortAndSet
 * 
 * @param {*} key 
 * @param {*} value 
 * @version 2
 */

MAP.prototype.sortAndSet = function (key, value) {

    this.elements[key] = value

    if (!this.i) {
        
        this.keyList[this.i] = key
        this.i++
        return
    }

    if (this.keyList[this.i - 1] < key) {
       
        this.keyList[this.i] = key
        this.i++
    } else {
        var index = binarySearch(this.keyList,0,this.i - 1,key)
        this.keyList.splice(index,0,key)
      
        this.i++
    }
}



MAP.prototype.get = function (key) {
    return this.elements[key]
}


MAP.prototype.sort = function () {


    if (this.keyList.length <= 1) {
        return this.keyList;
    } else {

        var n = this.keyList.length, i = 0;
        while (i < n - 1) {
            var min = i;
            var j = i + 1;
            while (j < n) {
                if (this.keyList[j] < this.keyList[min]) min = j;
                j++
            }
            swap(this.keyList,i,min)
            // var temp = this.keyList[i]
            // this.keyList[i] = this.keyList[min]
            // this.keyList[min] = temp
            i++
        }
    }
}

MAP.prototype.fill = function () {
    if (this.keyList.length <= 1) {
        return this.elements;
    } else {
        var arrF = Array(this.keyList.length)

        var i = 0
        while (i < this.keyList.length) {
            var value = this.elements[this.keyList[i]];
            arrF[i] = (value)
            i++
        }
        return arrF
    }
}

/**
 * splitBy function
 * @function splitBy
 * @version 2.0.1
 * @author LongDang - darklong - ZuelligVietNam
 */


MAP.prototype.splitBy  = function (limit) {

    var start = 0, end = limit - 1, size = this.keyList.length, filenum = 1 
		
		// handle case limit larger than size
		if(limit >= size) {
			
			while(start < size) { 
        this.stick(this.keyList[start], filenum)
         start++
      }
			
	    this.files = filenum		
			return
		}
			
    while(start < size) {

        var repetitionNum = 0
				
        if( compare( this.keyList[end], this.keyList[end+1] ) ) {
					
          repetitionNum = lookBack(end, this.keyList)
          
					//if(repetitionNum === 0)
					repetitionNum++
					
          while(start <= end - repetitionNum ) {
              this.stick(this.keyList[start], filenum)
              start++
          }

					var temp = end + limit - repetitionNum
          
					end = temp <= size ? temp : size - 1
										filenum++ 
        } else {
            
          while(start <= end) { 
            this.stick(this.keyList[start], filenum)
             start++
          }
          
          var temp = end + limit

          end = temp <= size ? temp : size - 1
         
          filenum++
        }
    }
		
		filenum--
    this.files = filenum
		
		return
}

function lookBack(start, list) {
    
    if(start < 0) 
        return 0
    if( !compare(list[start], list[start -1]) ) {
        return 0
    }
    return lookBack(start-1,list) + 1
}

//set filenum by key
MAP.prototype.stick = function (key, num) {
    this.elements[key]._fileSplit = num
}


MAP.prototype.size = function () {
    return this.keyList.length
}


function binarySearch(arr,left, right, x) {
    if(right >= left) {
        
        var middle = Math.round( ( left + (right -1) ) / 2 )
        
        if (arr[middle] < x && arr[middle+1] > x)
            return middle+1;
        if(  middle == 0 && arr[middle] > x )
            return 0

        if (arr[middle] > x)
            return binarySearch(arr, left, middle - 1, x);

        return binarySearch(arr, middle + 1, right, x);
    }
}


function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function compare(str1,str2) {
	 if(typeof str1 !== 'string' || typeof str2 !== 'string')
        return false
	var length = str1.split('@').length - 1
	return str1.split('@').splice(0,length).join('@') ==  str2.split('@').splice(0,length).join('@')		
}