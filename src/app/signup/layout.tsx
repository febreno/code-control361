import type { ReactNode } from 'react'
export default function SignUpLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <section className="relative py-20">
        <div className="absolute top-0 left-0 lg:bottom-0 h-96 lg:h-auto w-full lg:w-8/12 primary-color"></div>
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-white">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">{children}</div>
          </div>
        </div>
      </section>
    </main>
  )
}
