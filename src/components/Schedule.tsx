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
    day: "Jumat",
    subjects: [
      { name: "Renungan Pagi", teacher: "", room: "", time: "06.30 - 06.50" },
      { name: "Jam ke 0", teacher: "", room: "", time: "06.50 - 07.35" },
      { name: "Mata Pelajaran Pilihan 1", teacher: "", room: "", time: "07.35 - 08.15" },
      { name: "Mata Pelajaran Pilihan 2", teacher: "", room: "", time: "08.15 - 08.55" },
      { name: "Mata Pelajaran pilihan 3", teacher: "", room: "", time: "08.55 - 09.35" },
      { name: "Istirahat", teacher: "", room: "", time: "09.35 - 10.05" },
      { name: "Mata Pelajaran pilihan 4", teacher: "", room: "", time: "10.05 - 10.45" },
      { name: "Mata Pelajaran pilihan 5", teacher: "", room: "", time: "10.45 - 11.25" },
      { name: "Mata Pelajaran pilihan 6", teacher: "", room: "", time: "11.25 - 12.05" },
      { name: "Mata Pelajaran pilihan 7", teacher: "", room: "", time: "12.05 - 12.45" },
      { name: "Istirahat", teacher: "", room: "", time: "12.45 - 13.15" },
      { name: "Bahasa Inggris", teacher: "", room: "", time: "13.15 - 13.55" },
      { name: "Bahasa Inggris", teacher: "", room: "", time: "13.55 - 14.35" },
      { name: "Pulang", teacher: "", room: "", time: "14.35 - 15.20" },
    ]
  }
];

const Schedule = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          Agenda WorkSpace XI4 !!
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
                    className="p-4 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
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

      {/* Petugas Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-md mt-6">
          <Card className="schedule-card backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl font-bold text-primary">
                📋 PETUGAS RENUNGAN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-left space-y-1">
                <div className="text-sm">
                  <span className="font-medium">• Lagu, Doa : </span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">• Renungan, Doa : </span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">• Doa Pulang : </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tugas Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-md mt-6">
          <Card className="schedule-card backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl font-bold text-primary">
                📚 TUGAS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* MAPEL WAJIB Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-400">MAPEL WAJIB</h3>
                <div 
                  className="p-3 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => window.open('https://www.notion.so/24d34da2b55b80d48b7ed95137a780da?v=24d34da2b55b805996c0000c10c56883&source=copy_link', '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <span>😊</span>
                    <span className="text-sm">List Tugas XI-4 Mapel Wajib</span>
                  </div>
                </div>
                <p className="text-red-400 text-xs text-center">Tabel diatas bisa di Click!</p>
              </div>

              {/* File PPTX Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-400">File File PPTX Pembelajaran</h3>
                <div className="text-center">
                  <span className="text-blue-400 font-medium cursor-pointer hover:underline">CLICK DISINI</span>
                </div>
              </div>

              {/* Additional Items */}
              <div className="space-y-2">
                <div 
                  className="p-3 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => window.open('https://www.notion.so/24e34da2b55b8032979ee54179cd6830?v=24e34da2b55b800bbefe000cf9cb58aa&source=copy_link', '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <span>😊</span>
                    <span className="text-sm">Kalender PH 📅📄 (Wajib+Pilihan)</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span>😊</span>
                    <span className="text-sm">List Tugas XI-4 Mapel Pilihan (1)</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Schedule;