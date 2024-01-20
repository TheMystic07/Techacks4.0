import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { script } = req.body;

    const program = {
        script,
        language: "php",
        versionIndex: "0",
        clientId: "f3e4cd623dc583ddce58818e368c11eb", // Replace with your actual credentials
        clientSecret: "d742ba70414253c6ddb80d71fba11f300ad29353479118a6e30dc1e5e5e36768" // Replace with your actual credentials
    };

    try {
        const response = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            body: JSON.stringify(program),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to execute PHP code' });
    }
}
