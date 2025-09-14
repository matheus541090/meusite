import { FaWhatsapp, FaTelegramPlane, FaLock } from "react-icons/fa"

export default function Home() {
  return (
    <main
      className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/fundo.jpg')" }}
    >
      {/* camada preta no fundo */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* conteudo alinhado à esquerda */}
      <div className="relative z-10 text-left text-white px-8 max-w-3xl">

        {/* título */}
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="text-white">Conteúdo</span>{" "}
          <span className="text-pink-500">Exclusivo</span>
        </h1>

        {/* subtítulo */}
        <p className="text-xl mb-6">
          Acesse meus conteúdos mais quentes e exclusivos.{" "}
          <span className="text-yellow-400 font-semibold">
            Apenas para maiores de 18 anos.
          </span>
        </p>

        {/* lista */}
        <ul className="text-lg space-y-2 mb-8">
          <li>🔥 Conteúdo exclusivo e personalizado</li>
          <li>⚡ Atualizações diárias</li>
          <li>💬 Interação direta comigo</li>
        </ul>

        {/* chamada */}
        <p className="text-lg font-semibold mb-4">Entre em contato:</p>

        {/* botoes */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4" id="botoes">
          <a
            href="https://wa.me/556299007928?text=Oi%20tenho%20interesse!"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://t.me/evelyin_bot"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg transition"
          >
            <FaTelegramPlane /> Telegram
          </a>

          <a
            href="/privacy"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg text-lg transition"
          >
            <FaLock /> Privacy
          </a>
        </div>

        {/* rodapé ocupando a largura de todos os botões */}
        <div className="flex justify-center">
          <div className="bg-gray-900 bg-opacity-50 border border-gray-500 p-5 rounded-lg text-sm text-gray-100shadow-lg text-center w-full sm:w-[calc(100%-2rem)]">
            <p className="font-bold text-yellow-400 text-lg mb-2">⚠️ Aviso / Urgência</p>
            <ul className="space-y-1">
              <li>⚠️ Vagas limitadas, aproveite antes que feche.</li>
              <li>⚡ Apenas para maiores de 18 anos.</li>
              <li>⏳ O conteúdo pode sair do ar a qualquer momento.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
