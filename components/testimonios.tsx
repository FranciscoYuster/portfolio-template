import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Carlos Mora",
      cargo: "Jefe de Administración, D.E.M",
      texto:
        "..puedo resaltar el compromiso por innovar en los procedimientos ya instaurados por la Institución ( Dirección ed educación Municipal de Santiago) , pero por sobre todo el entusiasmo y voluntad a trabajar en equipo , logrando optimizar procesos que son tan importantes en la atención de requerimientos que recibimos de los 44 establecimientos de educación que atendemos como sostenedores.",
      avatar: "/abstract-am.png",
    },
    {
      nombre: "David Fuller",
      cargo: "Gerente General, Inexoos Group",
      texto:
        "pendiente",
      avatar: "/abstract-cr.png",
    },
    {
      nombre: "",
      cargo: "CEO, InnovaTech",
      texto:
        "Francisco no solo entregó un producto de alta calidad, sino que también aportó ideas valiosas que mejoraron significativamente nuestro sistema de gestión de inventario.",
      avatar: "/abstract-geometric-ls.png",
    },
  ]

  return (
    <section id="testimonios" className="py-16 bg-gray-50 dark:bg-gray-900">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold dark:text-white">Testimonios</h2>
          <div className="mx-auto h-1 w-20 bg-gray-300 dark:bg-gray-700"></div>
          
        </div>
      </AnimateOnScroll>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={200 + index * 100}>
              <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={testimonio.avatar || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-white">{testimonio.nombre}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonio.cargo}</p>
                    </div>
                  </div>
                  <blockquote className="flex-grow">
                    <p className="italic text-gray-700 dark:text-gray-300">"{testimonio.texto}"</p>
                  </blockquote>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
