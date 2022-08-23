const balenced = (expr) => {
    let stack = []
    for (let i = 0; i < expr.length; i++) {
        if(expr[i] == "{" || expr[i] == "[" || expr[i] == "(")
        {
            stack.push(expr[i])
        }

        let oldExpr;
        switch (expr[i]) {
            case "}":
                oldExpr = stack.pop()
                if(oldExpr != "{") return false
                break;

            case "]":
                oldExpr = stack.pop()
                if(oldExpr != "[") return false
                break;

            case ")":
                oldExpr = stack.pop()
                if(oldExpr != "(") return false
                break;
        
            default:
                break;
        }
        
    }

   const result =  stack.length == 0 ? true : false
   return result
}


let str = "abc(xyz{h][yellow})"
console.log(balenced(str))