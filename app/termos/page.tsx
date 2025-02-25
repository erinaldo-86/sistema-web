import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      <p className="mb-4 text-lg leading-relaxed">
        Ao acessar o site Verificar site seguro, concorda em cumprir estes termos de serviço, todas as leis e regulamentos
        aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não
        concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site
        são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Uso de Licença</h2>
      <p className="mb-4 text-lg leading-relaxed">
        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site
        Verificar site seguro, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não
        uma transferência de título e, sob esta licença, você não pode:
      </p>
      <ul className="list-disc pl-8 mb-4 text-lg leading-relaxed">
        <li>modificar ou copiar os materiais;</li>
        <li>
          usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
        </li>
        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Verificar site seguro;</li>
        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
        <li>transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
      </ul>
      <p className="mb-4 text-lg leading-relaxed">
        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por
        Verificar site seguro a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você
        deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Isenção de responsabilidade</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Os materiais no site da Verificar site seguro são fornecidos 'como estão'. Verificar site seguro não oferece garantias, expressas ou
        implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias
        implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade
        intelectual ou outra violação de direitos.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Além disso, o Verificar site seguro não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis
        ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a tais materiais ou em sites
        vinculados a este site.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Limitações</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Em nenhum caso o Verificar site seguro ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem
        limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
        incapacidade de usar os materiais em Verificar site seguro, mesmo que Verificar site seguro ou um representante autorizado da
        Verificar site seguro tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas
        jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos
        conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Precisão dos materiais</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Os materiais exibidos no site da Verificar site seguro podem incluir erros técnicos, tipográficos ou fotográficos.
        Verificar site seguro não garante que qualquer material em seu site seja preciso, completo ou atual. Verificar site seguro pode fazer
        alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Verificar site seguro não
        se compromete a atualizar os materiais.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Links</h2>
      <p className="mb-4 text-lg leading-relaxed">
        O Verificar site seguro não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site
        vinculado. A inclusão de qualquer link não implica endosso por Verificar site seguro do site. O uso de qualquer site
        vinculado é por conta e risco do usuário.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Modificações</h2>
      <p className="mb-4 text-lg leading-relaxed">
        O Verificar site seguro pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este
        site, você concorda em ficar vinculado à versão atual desses termos de serviço.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Lei aplicável</h2>
      <p className="mb-4">
        Estes termos e condições são regidos e interpretados de acordo com as leis do Verificar site seguro e você se submete
        irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
