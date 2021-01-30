### DevTools - Debugging
- Screenshot of breakpoints: [Breakpoint Screenshot](Breakpoint.jpg)
- Screenshot of watch expressions list: [Watch expressions list](WatchExpressionsList.jpg)
- What was the bug?
  - The bug was that `num1` and `num2` are both string types, and thus by adding `num1` and `num2`, result was concatenating the value of both rather than adding the values which results in the wrong output. 
- How would you fix it? Include a screen shot of your solution.
  - To fix it, I would convert both `num1` and `num2` which are currently string types to number types using `Number(num1)` and `Number(num2)`. I would perform this conversion in line 9 where `result` is being set and so, line 9 which is currently `let result = num1 + num2` will become `let result = Number(num1) + Number(num2)`.  
  Solution in Debugger: [Solution Screenshot](SolutionDebugger.jpg)  
  Solution results in Correct Output on Screen: [Correct Output](SolutionOnScreen.jpg)  

### DevTools - Network Tab 
1. The name of the new json file is **citylots.json**
2. The file that initiated the download of the new file is **part2.js**
3. It's file size is **11.7 MB**
4. It took **42.46 seconds** to download it.
5. My User-Agent for the browser that made the request is **Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36**
6. The type of server it came from is **Apache**.
7. The file was last modified on **Tue, 26 Jan 2021 22:14:13 GMT**.
8. The Content-Type of this file is **application/json**.
9. The method **`fetch('./citylots.json')`** inside the initiating file, part2.js, made the request. Thus, a fetch() method was used.