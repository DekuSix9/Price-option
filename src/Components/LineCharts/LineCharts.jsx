import { LineChart, Line, XAxis, YAxis  } from 'recharts';

const LineCharts = () => {
    const subjectMarksData=[
        { "id": 1, "name": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 82 },
        { "id": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 74, "chemistryMarks": 79 },
        { "id": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 88, "chemistryMarks": 91 },
        { "id": 4, "name": "David", "mathMarks": 74, "physicsMarks": 69, "chemistryMarks": 72 },
        { "id": 5, "name": "Emma", "mathMarks": 88, "physicsMarks": 84, "chemistryMarks": 85 },
        { "id": 6, "name": "Frank", "mathMarks": 80, "physicsMarks": 76, "chemistryMarks": 78 },
        { "id": 7, "name": "Grace", "mathMarks": 95, "physicsMarks": 92, "chemistryMarks": 94 },
        { "id": 8, "name": "Henry", "mathMarks": 70, "physicsMarks": 65, "chemistryMarks": 68 },
        { "id": 9, "name": "Isla", "mathMarks": 90, "physicsMarks": 86, "chemistryMarks": 89 },
        { "id": 10, "name": "Jack", "mathMarks": 76, "physicsMarks": 72, "chemistryMarks": 74 }
      ]
      
      
    return (
        <div>
            <LineChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;