export default function guardraill(mathfunction) {
    const queue = [];
    try {
        queue.push(mathfunction());

    }
   catch(error) {
    queue.push(error.toString());

    } finally{
        queue.push("Guardrail was processed");
        return queue;
    }
}