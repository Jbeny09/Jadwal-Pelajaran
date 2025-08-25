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
    day: "Selasa",
    subjects: [
      { name: "Renungan Pagi", teacher: "", room: "", time: "06.30 - 06.50" },
      { name: "Mandarin", teacher: "", room: "", time: "06.50 - 07.35" },
      { name: "PAK", teacher: "", room: "", time: "07.35 - 08.05" },
      { name: "Matematika", teacher: "", room: "", time: "08.05 - 08.35" },
      { name: "Matematika", teacher: "", room: "", time: "08.35 - 09.05" },
      { name: "Mata Pelajaran pilihan 1", teacher: "", room: "", time: "09.05 - 09.30" },
      { name: "Istirahat", teacher: "", room: "", time: "09.30 - 10.00" },
      { name: "Mata Pelajaran pilihan 2", teacher: "", room: "", time: "10.00 - 10.30" },
      { name: "Career Day - Briefing Kegiatan EduFair", teacher: "", room: "", time: "10.30 - 14.35" },
      { name: "Career Day - Briefing Kegiatan EduFair", teacher: "", room: "", time: "14.35 - 15.20" },
      { name: "Remedial Dan Pengayaan", teacher: "", room: "", time: "15.30 - SELESAI" },
      { name: "", teacher: "", room: "", time: "" },
      { name: "", teacher: "", room: "", time: "" },
      { name: "", teacher: "", room: "", time: "" },
    ]
  }
];

const Schedule = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Neon light effect at the top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-pulse z-50"></div>
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Agenda WorkSpace XI4 !!
        </h1>
        <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_200%] animate-rainbow">
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
                <div className="text-lg">
                  <span className="font-medium">• Lagu, Doa : Cindy</span>
                </div>
                <div className="text-lg">
                  <span className="font-medium">• Renungan, Doa : Dicko Samuel</span>
                </div>
                <div className="text-lg">
                  <span className="font-medium">• Doa Pulang : Elma</span>
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
              
              {/* WorkSpace XI4 Section */}
              <div className="space-y-3">
                <div 
                  className="p-3 rounded-lg bg-gradient-accent border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => window.open('https://www.notion.so/Agenda-WorkSpace-XI4-23134da2b55b801685b5e6938454b07c?source=copy_link', '_blank')}
                >
                  <div className="flex items-center justify-center">
                    <span className="text-lg font-semibold">WorkSpace XI4</span>
                  </div>
                </div>
              </div>

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
                
              </div>

              {/* File PPTX Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-400">File File PPTX Pembelajaran</h3>
                <div className="text-center">
                  <span 
                    className="text-blue-400 font-medium cursor-pointer hover:underline underline" 
                    onClick={() => window.open('https://drive.google.com/drive/folders/1hrVoZT5AgHYv21Vi5gnUCE0tZqP10nBY?usp=sharing', '_blank')}
                  >
                    CLICK DISINI
                  </span>
                </div>
              </div>

              {/* Jadwal PH Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-orange-400">Jadwal PH</h3>
              </div>
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
              </div>

              {/* Bottom notice text */}
              <div className="text-center mt-4">
                <p className="text-red-400 text-sm font-medium">Semua Tabel Dalam Tabel Tugas Bisa Di Click Ya</p>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Schedule;