---
id: 2026-08-26-infra-glossary
title: "[인프라 용어사전] NVLink (NVIDIA GPU Interconnect) - 거대 AI 클러스터의 두뇌를 하나로 묶는 초고속 인터커넥트"
date: 2026-08-26
time: "04:56"
category: Terminology
status: published
summary: "📌 1. 30초 핵심 요약 & 개념 정의 NVLink(엔비디아 고속 인터커넥트)는 표준 PCIe 버스의 대역폭 한계를 극복하고 여러 GPU 간, 또는 GPU와 CPU 간에 메모리를 직접 공유하고 초고속으로 데이터를 교환하도록 설계된 양방향 점대점(Point-to-Point) 고속 시리얼 통신 인터페이스입니다. 💡 직관적 비유: 일반 서버가 좁은 시내 도로("
labels:
  - 인프라용어사전
  - IT백과사전
  - NVLink
  - 엔비디아
  - 네이버클라우드
  - GPU서버
  - 데이터센터
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #1E293B;">

  <div style="background: #F1F5F9; border-left: 5px solid #2563EB; padding: 18px 20px; border-radius: 8px; margin-bottom: 28px;">
    <h3 style="margin: 0 0 8px 0; color: #0F172A; font-size: 18px;">📌 1. 30초 핵심 요약 & 개념 정의</h3>
    <p style="margin: 0; font-size: 15px; color: #334155;">
      <strong>NVLink(엔비디아 고속 인터커넥트)</strong>는 표준 PCIe 버스의 대역폭 한계를 극복하고 여러 GPU 간, 또는 GPU와 CPU 간에 메모리를 직접 공유하고 초고속으로 데이터를 교환하도록 설계된 <strong>양방향 점대점(Point-to-Point) 고속 시리얼 통신 인터페이스</strong>입니다.
    </p>
    <p style="margin: 10px 0 0 0; font-size: 14px; color: #475569;">
      💡 <strong>직관적 비유</strong>: 일반 서버가 좁은 시내 도로(PCIe)로 부품 간 짐을 실어 나른다면, NVLink는 GPU 사이에 건설한 <strong>16차선 직통 전용 고속도로</strong>입니다. 여러 개의 분리된 GPU 메모리를 마치 단 하나의 거대한 <strong>통합 단일 메모리 풀(Unified Memory Pool)</strong>처럼 다룰 수 있게 만듭니다.
    </p>
  </div>

  <h2 style="border-left: 4px solid #3B82F6; padding-left: 12px; color: #1E293B; font-size: 20px; margin: 32px 0 16px 0;">⚙️ 2. 작동 원리 & 메커니즘</h2>
  <p style="font-size: 15px; color: #334155;">
    수천억 개 파라미터를 가진 거대언어모델(LLM)을 학습하거나 추론할 때는 단일 GPU 메모리에 모델 전체를 올릴 수 없습니다. 텐서 병렬화(Tensor Parallelism)를 통해 여러 GPU가 실시간으로 행렬 연산 결과를 주고받아야 하는데, 기존 <strong>PCIe Gen5 x16(양방향 128 GB/s)</strong> 대역폭으로는 극심한 통신 병목(Communication Bottleneck)이 발생합니다.
  </p>

  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #2563EB; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
    <strong>📐 [핵심 공식 한눈에 보기: 인터커넥트 총 처리 대역폭]</strong><br>
    <strong style="color: #1E40AF;">총 데이터 전송 대역폭(Bandwidth)</strong> = <strong>차동 신호 레인 수(Lanes)</strong> × <strong>레인당 전송률(Data Rate, PAM4)</strong> × <strong>링크 수(Links)</strong><br>
    <span style="font-size: 13px; color: #64748B;">
      👉 <strong>핵심 의미</strong>: 블랙웰(Blackwell, B200/B300) 기반 NVLink 5세대는 224Gbps PAM4 SerDes를 탑재하여 GPU당 총 <strong>양방향 1.8 TB/s</strong>의 유효 대역폭을 제공합니다. 이는 PCIe Gen5의 14배 이상에 달하는 압도적 속도입니다.
    </span>
  </div>

  <p style="font-size: 15px; color: #334155;">
    NVLink는 단순한 하드웨어 케이블 연결에 그치지 않고, <strong>메모리 캐시 일관성(Cache Coherency)</strong>과 <strong>하드웨어 가속 All-Reduce(SHARP 기술)</strong>를 지원합니다. 이를 통해 각 GPU는 CPU의 개입 없이 원격 GPU의 메모리에 <strong>직접 접근(RDMA)</strong>하여 지연 시간(Latency)을 서브 마이크로초(Sub-microsecond) 단위로 줄입니다.
  </p>

  <div style="overflow-x: auto; margin: 24px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
      <thead>
        <tr style="background-color: #F1F5F9; border-bottom: 2px solid #CBD5E1;">
          <th style="padding: 12px; font-weight: 600; color: #0F172A;">구분 항목</th>
          <th style="padding: 12px; font-weight: 600; color: #0F172A;">PCIe Gen5 x16</th>
          <th style="padding: 12px; font-weight: 600; color: #0F172A;">NVLink 4.0 (Hopper H100)</th>
          <th style="padding: 12px; font-weight: 600; color: #2563EB;">NVLink 5.0 (Blackwell B200/B300)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 12px; font-weight: 600;">단일 GPU 양방향 대역폭</td>
          <td style="padding: 12px;">128 GB/s</td>
          <td style="padding: 12px;">900 GB/s</td>
          <td style="padding: 12px; font-weight: 600; color: #2563EB;">1,800 GB/s (1.8 TB/s)</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">
          <td style="padding: 12px; font-weight: 600;">신호 방식 (SerDes)</td>
          <td style="padding: 12px;">32 GT/s (NRZ)</td>
          <td style="padding: 12px;">100 Gbps (PAM4)</td>
          <td style="padding: 12px; font-weight: 600; color: #2563EB;">224 Gbps (PAM4)</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 12px; font-weight: 600;">도메인 내 GPU 확장성</td>
          <td style="padding: 12px;">호스트 CPU 루트 컴플렉스 종속</td>
          <td style="padding: 12px;">최대 8개 (NVSwitch 단일 노드)</td>
          <td style="padding: 12px; font-weight: 600; color: #2563EB;">최대 72개 GPU (NVL72 랙 스케일)</td>
        </tr>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px; font-weight: 600;">주요 통신 레이어</td>
          <td style="padding: 12px;">호스트 버스 컨트롤러 통유</td>
          <td style="padding: 12px;">피어 투 피어(P2P) 직결</td>
          <td style="padding: 12px; font-weight: 600; color: #2563EB;">NVLink Switch Network (랙 전반 공유)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="border-left: 4px solid #3B82F6; padding-left: 12px; color: #1E293B; font-size: 20px; margin: 32px 0 16px 0;">🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p style="font-size: 15px; color: #334155;">
    오늘 보도된 <strong>국내 디에스앤지(DS&G)의 네이버클라우드 B300 GPU 서버 389대 공급 계약</strong>과 글로벌 빅테크의 차세대 AI 인프라 구축 현장의 핵심 연결 고리가 바로 이 NVLink입니다.
  </p>
  <ul style="font-size: 15px; color: #334155; padding-left: 20px; margin: 12px 0;">
    <li style="margin-bottom: 10px;">
      <strong>네이버클라우드 하이퍼클로바X 고도화</strong>: 공급되는 389대의 엔비디아 B300 서버는 차세대 블랙웰 아키텍처 기반으로, 노드 내부의 5세대 NVLink와 전용 NVSwitch를 통해 GPU 간 대역폭 병목을 완벽히 제거합니다. MoE(Mixture of Experts) 모델처럼 수백 개의 분산 전문가 레이어가 실시간 파라미터를 교환해야 하는 초거대 AI 추론 환경에서 지연 시간을 획기적으로 낮춥니다.
    </li>
    <li style="margin-bottom: 10px;">
      <strong>스페이스X-엔비디아 우주 AI 데이터센터</strong>: 가혹한 방사선과 전력 제약이 따르는 궤도상(In-Orbit) 엣지 클러스터에서도 한정된 GPU 자원을 마치 단일 통합 코어처럼 묶어 온보드 데이터 처리를 수행하기 위해 초저전력·초고집적 NVLink 인터커넥트 토폴로지가 필수적으로 채택됩니다.
    </li>
  </ul>

  <h2 style="border-left: 4px solid #3B82F6; padding-left: 12px; color: #1E293B; font-size: 20px; margin: 32px 0 16px 0;">⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 8px;">
      <h4 style="margin: 0 0 8px 0; color: #16A34A; font-size: 16px;">✅ 핵심 장점</h4>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #334155;">
        <li style="margin-bottom: 6px;"><strong>대역폭 극대화</strong>: PCIe 대비 10배 이상의 통신 처리량 달성</li>
        <li style="margin-bottom: 6px;"><strong>통합 메모리 풀</strong>: GPU 간 가상 주소 공간 공유로 개발 복잡도 저감</li>
        <li><strong>하드웨어 연산 오프로딩</strong>: NVSwitch 레벨의 네트워크 내(In-Network) 집계 연산 지원</li>
      </ul>
    </div>
    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 8px;">
      <h4 style="margin: 0 0 8px 0; color: #DC2626; font-size: 16px;">⚠️ 도입 제약 및 고려사항</h4>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #334155;">
        <li style="margin-bottom: 6px;"><strong>벤더 록인(Vendor Lock-in)</strong>: 엔비디아 독점 규격으로 타사 가속기 및 범용 이기종 시스템과 호환 불가</li>
        <li style="margin-bottom: 6px;"><strong>물리적 한계 및 TCO</strong>: 초고속 신호 감쇠로 인한 구리선(Over-the-PCB) 특수 배선 및 고비용 NVSwitch 보드 필요</li>
        <li><strong>발열 밀도 급증</strong>: SerDes 및 스위치 칩셋 집적에 따른 액체냉각(Liquid Cooling) 인프라 연계 필수</li>
      </ul>
    </div>
  </div>

  <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 18px 20px; border-radius: 8px; margin-top: 28px;">
    <h3 style="margin: 0 0 8px 0; color: #1D4ED8; font-size: 16px;">💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h3>
    <p style="margin: 0; font-size: 14.5px; color: #1E3A8A; font-weight: 500;">
      "초거대 AI 아키텍처의 성능은 개별 GPU의 연산력(TFLOPS)이 아니라, GPU 간 메모리 장벽을 허무는 <strong>NVLink 통신 패브릭의 유효 대역폭과 토폴로지</strong>에 의해 최종 결정됩니다."
    </p>
  </div>

</div>