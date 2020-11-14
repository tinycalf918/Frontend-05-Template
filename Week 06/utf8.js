function UTF8_Encoding(s) {
    var i, code, ret = [], len = s.length;
	for(i = 0; i < len; i++){
		code = s.charCodeAt(i);
		if(code > 0x0 && code <= 0x7f){
			//单字节
			//UTF-16 0000 - 007F
			//UTF-8  0xxxxxxx
			ret.push(code);
		}else if(code >= 0x80 && code <= 0x7ff){
			//双字节
			//UTF-16 0080 - 07FF
			//UTF-8  110xxxxx 10xxxxxx
			ret.push(
				//110xxxxx
				0xc0 | ((code >> 6) & 0x1f),
				//10xxxxxx
				0x80 | (code & 0x3f)
			);
		}else if(code >= 0x800 && code <= 0xffff){
			//三字节
			//UTF-16 0800 - FFFF
			//UTF-8  1110xxxx 10xxxxxx 10xxxxxx
			ret.push(
				//1110xxxx
				0xe0 | ((code >> 12) & 0xf),
				//10xxxxxx
				0x80 | ((code >> 6) & 0x3f),
				//10xxxxxx
				0x80 | (code & 0x3f)
			);
		}
	}
	
	return Buffer.from(ret);

  }
  console.log(UTF8_Encoding('中国'))