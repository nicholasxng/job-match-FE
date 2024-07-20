async function submitForm() {
    const resume = document.getElementById('resume').value;
    const jobDescription = document.getElementById('jobDescription').value;

    const response = await fetch('/match', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription }),
    });

    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
}
