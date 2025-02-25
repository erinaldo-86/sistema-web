export function StatsSection() {
  const stats = [
    { number: "10M+", label: "URLs verificadas", color: "text-[#3073F0]" },
    { number: "99.9%", label: "Precisão", color: "text-[#3073F0]" },
    { number: "24/7", label: "Monitoramento", color: "text-[#3073F0]" },
    { number: "100k+", label: "Usuários diários", color: "text-[#3073F0]" },
  ]

  return (
    <section className="border-y bg-white dark:bg-gray-900">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 transition-shadow duration-300"
            >
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

