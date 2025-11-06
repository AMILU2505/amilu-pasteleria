import React from "react";

export default function App(){
  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <header className="text-center mb-8 bg-[#FFF8F0] py-8 rounded-2xl shadow">
        <img src="/logo_amilu.png" alt="Amilu Pastelería" className="mx-auto mb-4 w-32" />
        <h1 className="text-4xl font-bold text-[#8B5E3C]">Amilu Pastelería</h1>
        <p className="text-lg text-[#8B5E3C]">Dulzura artesanal hecha con amor</p>
        <div className="mt-6">
          <a href="#menu" className="inline-block px-6 py-3 bg-[#F8D7E3] text-[#8B5E3C] rounded-xl font-semibold">Ver menú</a>
        </div>
      </header>

      <main id="menu">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Tortas Personalizadas 🎂</h2>
          <div className="border rounded-2xl p-4 shadow mb-6 flex items-center gap-4">
            <img src="/torta_crema_frutas.jpg" alt="Torta con frutas naturales" className="w-28 h-28 object-cover rounded-xl" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Torta frutal 20 cm</h3>
              <p className="italic mb-2">Incluye: crema Chantilly con frutos rojos, frutilla o durazno. Dos capas de relleno con frutas a elección.</p>
              <p className="font-bold">Precio base: $20.000 | Porción: $3.000</p>
              <div className="mt-3">
                <button className="px-4 py-2 bg-[#8B5E3C] text-white rounded-xl">Elegir decoración</button>
                <button className="ml-3 px-4 py-2 bg-black text-white rounded-xl">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Mini Cakes 🧁</h2>
          <div className="border rounded-2xl p-4 shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <img src="/mini_cake.png" alt="Mini Cake" className="w-full h-44 object-cover rounded-xl" />
            <div>
              <p className="font-semibold">Precio base Mini Cake: $12.000</p>
              <p>Extras disponibles: frutas, drip, doble relleno, flores comestibles.</p>
              <div className="mt-3">
                <button className="px-4 py-2 bg-black text-white rounded-xl">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Productos Individuales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-2xl p-4 shadow">
              <h3 className="font-bold">Budines 300g</h3>
              <p>$3.000</p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar</button>
            </div>
            <div className="border rounded-2xl p-4 shadow">
              <h3 className="font-bold">Pastafrola 8 cm</h3>
              <p>$650</p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar</button>
            </div>
            <div className="border rounded-2xl p-4 shadow">
              <h3 className="font-bold">Pastafrola 24 cm</h3>
              <p>$9.000</p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar</button>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Tartas</h2>
          <div className="border rounded-2xl p-4 shadow mb-6">
            <h3 className="text-xl font-semibold">Tarta frutal 26 cm</h3>
            <p>$20.000</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar al carrito</button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Alfajores y Galletas</h2>
          <div className="border rounded-2xl p-4 shadow mb-6">
            <h3 className="text-xl font-semibold">Alfajores de Maicena (kg)</h3>
            <p>$8.000</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar al carrito</button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Combos y Promociones</h2>
          <div className="border rounded-2xl p-4 shadow mb-6">
            <h3 className="text-xl font-semibold">Combo Cumpleaños Premium</h3>
            <p>$65.000</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl w-full">Agregar al carrito</button>
          </div>
        </section>
      </main>

      <footer className="text-center mt-10 text-[#8B5E3C]">
        <p>📍 Los Barriales, Junín Mendoza</p>
        <p>🚚 Envíos sin costo en Los Barriales y Palmira</p>
        <p>⏰ Anticipación: 48 a 72 horas | Horario: 9:00 a 21:00</p>
      </footer>

      {/* Carrito */}
      <section className="fixed bottom-0 left-0 w-full bg-[#FFF8F0] shadow-2xl p-4 flex justify-between items-center">
        <p className="text-lg font-semibold text-[#8B5E3C]">Carrito: 0 productos</p>
        <button className="px-4 py-2 bg-black text-white rounded-xl">Ver carrito</button>
      </section>
    </div>
  );
}
