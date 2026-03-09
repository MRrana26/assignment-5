<body>
    <div class="">
        <h3>1️⃣ What is the difference between var, let, and const?</h3>
        <h4>উত্তর: var vs let</h4>
        <ul>
            <li>var এটা অনেক  আগে ব্যবহার করা হতো। এখন ব্যবহার করা হয় না।</li>
            <li>কারণ এটা ব্যবহারে সমস্যা থেকে যায়।</li>
            <li>এটার variable একই name বার বার লেখা যায়। যার ফলে সমস্যা থেকে যায়।</li>
            <li>আর এটার মান (value) পরিবর্তন করা যায়।</li>
            <br>
            <br>
            <li>let: এটার variable একই name বার বার লেখা যায় না।</li>
            <li>যার ফলে আমাদের কোডে এবং বড় প্রজেক্টে সমস্যা কম তৈরী হয়।</li>
            <li>তবে (let) এর মান (value) পরিবর্তন করা যায়। </li>
        </ul>

        <h4>উত্তর: const</h4>
        <ul>
            <li>const এটা ব্যবহার করা হলো প্রফেশনাল</li>
            <li>কিন্তু যখন মান (value) পরিবর্তন করার প্রয়োজন হয় তখন এটা ব্যবহার করা হয় না।</li>
            <li>কারন const এর (value) মান পরিবর্তন করা যায় না।</li>
            <li>আর const এর variable একই name বার বার লেখা যায় না।</li>
        </ul>
    </div>

    <div>
        <h3>2️⃣ What is the spread operator (...)?</h3>
        <h4>উত্তর: Spread...</h4>
        <ul>
            <li>Spread... এটা ব্যবহার  করা হয় array or object কে বিছিয়ে দেওয়ার জন্য।</li>
            <li>[10, 20, 30] আমার কাছে array টি আছে আমি Spread... ব্যবহার করার মাধ্যমে</li>
            <li>সেটা কে 10 20 30 এভাবে  বিছিয়ে দিতে পারি</li>
            <li>এভাবে object কে ও কাজ করে।</li>
        </ul>
    </div>

    <div>
        <h3>3️⃣ What is the difference between map(), filter(), and forEach()?</h3>
        <h4>উত্তর: map(), filter(), and forEach()</h4>
        <ul>
            <li>map(), filter(), and forEach() এগুলো মূলত আমাদের কোড করাকে সহজ করে।</li>
            <li>map() use করে আমরা চাইলে একটি array এর সম্পুর্ণ মান পরিবর্তন করতে পারি</li>
            <li>const doubles = numbers.map(num => num * 2) এটা করলে numbers array কে সে দিগুণ করে দিবে।</li>
            <br>
            <br>
            <li>filter() করে আমরা array থেকে ফিল্টারিং মান বের করতে পারি।</li>
            <li>const nums = [1, 2, 4, 5, 6]</li>
            <li>যেমন: const nums = numbers.map(num => num > 2) এটা আমাকে 2 এর উপরে যে সংখ্যা গুলো আছে তা দিবে।</li>
            <br>
            <br>
            <li>forEach() এটা কিছুই না এটা হলো loop</li>
            <li>loop এ আমরা একাধিক লাইন লেখি আর এটা এক লাইনেই সমাধান</li>
            <li>forEach()  ব্যাবহারে সমস্যা কম তৈরী হয়।</li>
            <li>forEach() হলো আধুনিক ES6</li>
            
        </ul>
    </div>


    <div>
        <h3>4️⃣ What is an arrow function?</h3>
        <h4>উত্তর: arrow function</h4>
        <ul>
            <li>function এর সংক্ষিপ্ত রূপ হলো arrow function</li>
            <li>function এর একটি নাম দিতে হয় arrow function এর নাম দিতে হয় না।</li>
            <li>যেমন: function sum(a, b){ <br>
                        return a + b; <br>
                } </li> <br><br>
            <li>arrow function: <br>
            1. const sum = (a, b) => {<br>
            return a + b } <br> <br>
        2. const sum = (a, b) => a + b;</li>
        <br>
        <li>ES6 এ arrow function ব্যবহার করা হয়।</li>
        </ul>
    </div>
    
    
    <div>
        <h3>5️⃣ What are template literals?</h3>
        <h4>উত্তর: template literals</h4>
        <ul>
            <li>template literals এট দিয়ে আমরা string এর ভিতরে variable set করতে পারি।</li>
            <li>let name = 'Masud Rahman';
                <br>
                console.log("My Name is: ${name}");
            </li>
            <li>`` এটা হলো বেট্টিক (backtik) এর ভিতরে ব্যবহার করা যায় যা খুব powerfull জিনিস</li>
        </ul>
    </div>
</body>