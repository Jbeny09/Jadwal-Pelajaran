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
      { name: "Matematika", teacher: "Pak Ahmad", room: "Kelas 12A", time: "08:00 - 09:30" },
      { name: "Fisika", teacher: "Bu Sarah", room: "Lab Fisika", time: "09:45 - 11:15" },
      { name: "Bahasa Indonesia", teacher: "Pak Budi", room: "Kelas 12A", time: "12:30 - 14:00" },
      { name: "Sejarah", teacher: "Bu Diana", room: "Kelas 12A", time: "14:15 - 15:45" },
    ]
  },
  {
    day: "Selasa",
    subjects: [
      { name: "Kimia", teacher: "Bu Lisa", room: "Lab Kimia", time: "08:00 - 09:30" },
      { name: "Bahasa Inggris", teacher: "Pak John", room: "Kelas 12A", time: "09:45 - 11:15" },
      { name: "Ekonomi", teacher: "Bu Maria", room: "Kelas 12A", time: "12:30 - 14:00" },
      { name: "Biologi", teacher: "Pak Rahman", room: "Lab Bio", time: "14:15 - 15:45" },
    ]
  },
  {
    day: "Rabu",
    subjects: [
      { name: "Matematika", teacher: "Pak Ahmad", room: "Kelas 12A", time: "08:00 - 09:30" },
      { name: "Geografi", teacher: "Bu Sari", room: "Kelas 12A", time: "09:45 - 11:15" },
      { name: "Seni Budaya", teacher: "Pak Andi", room: "Ruang Seni", time: "12:30 - 14:00" },
      { name: "Olahraga", teacher: "Pak Yoga", room: "Lapangan", time: "14:15 - 15:45" },
    ]
  },
  {
    day: "Kamis",
    subjects: [
      { name: "PKN", teacher: "Bu Rina", room: "Kelas 12A", time: "08:00 - 09:30" },
      { name: "Fisika", teacher: "Bu Sarah", room: "Lab Fisika", time: "09:45 - 11:15" },
      { name: "Matematika", teacher: "Pak Ahmad", room: "Kelas 12A", time: "12:30 - 14:00" },
      { name: "TIK", teacher: "Pak David", room: "Lab Komputer", time: "14:15 - 15:45" },
    ]
  },
  {
    day: "Jumat",
    subjects: [
      { name: "Agama", teacher: "Pak Imam", room: "Kelas 12A", time: "08:00 - 09:30" },
      { name: "Bahasa Indonesia", teacher: "Pak Budi", room: "Kelas 12A", time: "09:45 - 11:15" },
      { name: "Konseling", teacher: "Bu Counselor", room: "Ruang BK", time: "12:30 - 14:00" },
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
          Kelas 12A - Semester Ganjil 2024
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {scheduleData.map((dayData, index) => (
          <Card 
            key={dayData.day} 
            className="schedule-card backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-xl font-bold text-primary">
                {dayData.day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dayData.subjects.map((subject, subjectIndex) => (
                <div 
                  key={subjectIndex}
                  className="p-3 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="time-slot mb-1">{subject.time}</div>
                  <div className="subject mb-1">{subject.name}</div>
                  <div className="teacher mb-1">{subject.teacher}</div>
                  <div className="text-xs text-muted-foreground">{subject.room}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground mt-8 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
        <p className="mb-2">⏰ Istirahat: 11:15 - 12:30</p>
        <p>📚 Jam Efektif: 08:00 - 15:45</p>
      </div>
    </div>
  );
};

export default Schedule;