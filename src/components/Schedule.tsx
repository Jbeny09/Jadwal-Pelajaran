import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Subject {
  name: string;
  teacher: string;
  room: string;
  time: string;
}

interface DaySchedule {
  day: string;
  subjects: Subject[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Senin",
    subjects: [
      { name: "Matematika", teacher: "", room: "", time: "08:00 - 09:30" },
      { name: "Fisika", teacher: "", room: "", time: "09:45 - 11:15" },
      { name: "Bahasa Indonesia", teacher: "", room: "", time: "12:30 - 14:00" },
      { name: "Sejarah", teacher: "", room: "", time: "14:15 - 15:45" },
    ]
  }
];

const Schedule = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-glow">
          Jadwal Pelajaran
        </h1>
        <p className="text-muted-foreground text-lg">
          Kelas XI-4
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {scheduleData.map((dayData, index) => (
            <Card 
              key={dayData.day} 
              className="schedule-card backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-2xl font-bold text-primary">
                  {dayData.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dayData.subjects.map((subject, subjectIndex) => (
                  <div 
                    key={subjectIndex}
                    className="p-4 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="time-slot mb-2 text-sm font-medium text-muted-foreground">{subject.time}</div>
                    <div className="subject text-lg font-semibold">{subject.name}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Schedule;