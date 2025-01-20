const Stats = () => {
  return (
    <div className="bg-blue-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-2">1M+</div>
            <div className="text-blue-100">Utilisateurs Actifs</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-2">50Md€+</div>
            <div className="text-blue-100">Transactions</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-2">99,9%</div>
            <div className="text-blue-100">Disponibilité</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-2">150+</div>
            <div className="text-blue-100">Pays</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
