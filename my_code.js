
function logObject(obj) {
    for (let key in obj) {
        console.log(key + ":\n", obj[key]);
        if (typeof obj[key] === 'object')
            logObject(obj[key]);
    }
}

//===============+===============+===============+===============

function areEqual(address1, address2) {
    // 참조값 같으면 조기 리턴
    if (typeof address1 === typeof address2 === 'object' && address1 === address2)
        return true;

    // null, undefined
    if (address1 === null || address1 === undefined || address2 === null || address2 === undefined) {
        if (address1 === address2)
            return true;
        return false;
    }

    // 여기서부터 constructor.name 사용 가능

    // 어레이 길이 체크
    if (address1.constructor.name === address2.constructor.name === 'Array'
        && address1.length !== address2.length)
        return false;
    
    // 타입 비교
    if (address1.constructor.name === address2.constructor.name) {
        // 내부에 대해 반복을 돌면서 값 비교 후 다르다면 return false
        for (let key in address1) { 
            // 타입이 프리미티브면서 양쪽의 값이 다르다면 return false
            if (address1[key] !== Object(address1[key]) && address1[key] !== address2[key])
                return false;

            /* 객체라면 그 안에 또 다른 객체가 있는지 재귀적으로 들어가면서 탐색
            도중에 프리미티브에 대해서 값을 비교해서 하나라도 틀리다면 return false (재귀 종료) */
            else if (typeof address1[key] === 'object')
                if (!areEqual(address1[key], address2[key]))
                    return false;

            // 함수는 체크 안함
        }
        // 반복이 끝났다면 체크 완료
        return true;
    }
    // 타입 비교 실패
    return false;
}

//===============+===============+===============+===============

function PriceLevel(levelName, highestPrice) {
    this.levelName = levelName;
    this.highestPrice = highestPrice;
}

function PriceLevelModule() {
    this.priceLevels = [];
    this.CheckIntegrity = function() {
        let prevPrice = 0;
        for (let key in this.priceLevels) {
            // PriceLevel 객체가 맞는지
            if (this.priceLevels[key].constructor.name !== 'PriceLevel')
                return false;
            // 이전 가격보다 현재 가격이 높은지
            if (this.priceLevels[key].highestPrice <= prevPrice)
                return false;

            prevPrice = this.priceLevels[key].highestPrice;
        }
        return true;
    };
    this.AddLevel = function(levelName, highestPrice) {
        this.priceLevels.push(new PriceLevel(levelName, highestPrice));
        return this.CheckIntegrity();
    };
    this.GetPriceLevelString = function(price) {
        if (price <= 0)
            return null;

        for (let i of this.priceLevels)
            if (price <= i.highestPrice)
                return i.levelName;

        return null;
    };
}